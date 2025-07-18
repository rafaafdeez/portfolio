// Funcionalidad para el portfolio de Rafael Fernández

// Desplazamiento rápido y suave para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Función para scroll rápido personalizado
    function smoothScrollTo(target, duration = 800) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 50;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Función de easing para un scroll más suave
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Agregar evento de clic a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                smoothScrollTo(target, 600);
            }
        });
    });

    // Agregar animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Inicializar EmailJS
    emailjs.init("N3YMcXoR95j9QjSb5");

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('_replyto') || formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validación básica
            if (!name || !email || !subject || !message) {
                showMessage('Por favor, completa todos los campos.', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showMessage('Por favor, introduce un email válido.', 'error');
                return;
            }

            // Mostrar estado de carga
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // Enviar con EmailJS
            if (typeof emailjs !== 'undefined') {
                emailjs.send("service_2m52lgm", "template_bm4da5e", {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_email: "rafaelfernandezrosi@gmail.com"
                })
                .then(function(response) {
                    showMessage('¡Mensaje enviado correctamente! Te contactaré pronto.', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    // Si EmailJS falla, usar mailto como fallback
                    openMailtoFallback();
                })
                .finally(function() {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
            } else {
                // Si EmailJS no está disponible, usar mailto
                openMailtoFallback();
            }

            function openMailtoFallback() {
                const mailtoLink = `mailto:rafaelfernandezrosi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
                window.location.href = mailtoLink;
                
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                showMessage('Abriendo tu cliente de email...', 'success');
            }
        });
    }

    // Efecto de escritura para el tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        
        function startTypeWriter() {
            tagline.textContent = '';
            typeWriter(tagline, originalText, 50, function() {
                // Esperar 5 segundos después de completar la escritura, luego repetir
                setTimeout(startTypeWriter, 5000);
            });
        }
        
        startTypeWriter();
    }

    // Efectos hover para las tarjetas de habilidades
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Contador animado para estadísticas
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        animateCounter(stat, 0, target, 2000);
    });
});

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar mensajes
function showMessage(message, type) {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Estilos para el mensaje
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background-color: #28a745;' : 'background-color: #dc3545;'}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Animar entrada
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 5000);
}

// Función de efecto de escritura
function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Función para animar contadores
function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Función para cambiar tema
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
}

// Restaurar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }
});

// Efecto parallax mejorado para el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled < heroHeight * 0.8) {
            heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
            heroSection.style.opacity = Math.max(0.3, 1 - (scrolled / heroHeight) * 0.7);
        } else {
            heroSection.style.transform = 'translateY(0)';
            heroSection.style.opacity = '0.3';
        }
    }
});

// Mostrar/ocultar botón de "volver arriba"
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

function scrollToSection(sectionId) {
    const heroSection = document.querySelector('.hero-section');
    let disableParallax = false;
    
    let offsetTop = 0;
    
    if (sectionId === 'top') {
        offsetTop = 0;
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            offsetTop = rect.top + window.pageYOffset;
            disableParallax = true;
        } else {
            return;
        }
    }
    
    if (disableParallax && heroSection) {
        heroSection.style.pointerEvents = 'none';
        heroSection.style.zIndex = '1';
    }
    
    const start = window.pageYOffset;
    const distance = offsetTop - start;
    const duration = 700;
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentPosition = start + distance * ease;
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else {
            window.scrollTo(0, offsetTop);
            
            if (disableParallax && heroSection) {
                setTimeout(() => {
                    heroSection.style.pointerEvents = 'auto';
                    heroSection.style.zIndex = '8';
                }, 200);
            }
        }
    }

    requestAnimationFrame(scrollAnimation);
}
