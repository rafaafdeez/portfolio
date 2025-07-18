# 💼 Portfolio Personal - Rafael Fernández

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&lo## 📝 Secciones del Portfolio

- **🏠 Hero**: Presentación principal con efecto parallax y animación de escritura
- **👨‍💻 Sobre Mí**: Información personal y habilidades técnicas organizadas por categorías
- **🚀 Proyectos**: Showcase de proyectos destacados con tecnologías utilizadas
- **📚 Experiencia**: Timeline de educación y experiencia profesional
- **📬 Contacto**: Formulario funcional con validación y múltiples métodos de envío=white)](https://developer.mozilla.org/es/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
  [![EmailJS](https://img.shields.io/badge/EmailJS-FFDD44?style=for-the-badge&logo=email&logoColor=black)](https://www.emailjs.com/)

## 📋 Descripción

Portfolio web personal moderno y responsive desarrollado para mostrar mis habilidades como estudiante de Ingeniería Informática especializado en desarrollo de software. Diseñado con un enfoque profesional y una experiencia de usuario optimizada.lio Personal - Rafael Fernández

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-FFDD44?style=for-the-badge&logo=email&logoColor=black)](https://www.emailjs.com/)

## 📋 Descripción

Portfolio web personal moderno y responsive desarrollado para mostrar mis habilidades como estudiante de Ingeniería Informática especializado en desarrollo de software. Diseñado con un enfoque profesional y una experiencia de usuario optimizada.

## 🌟 Características

- ✨ **Diseño Moderno**: Interface limpia y profesional
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- 🎯 **Navegación Suave**: Scroll animado entre secciones
- 📧 **Formulario de Contacto**: Integración con EmailJS y fallback automático
- 🎨 **Efectos Visuales**: Animaciones CSS y JavaScript
- ⚡ **Performance Optimizada**: Carga rápida y eficiente
- 🎭 **Efecto Parallax**: Animaciones sutiles en el hero section
- 🔄 **Animación Continua**: Efecto de escritura que se repite automáticamente

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica y accesible
- **CSS3**:
  - Flexbox y Grid Layout
  - Custom Properties (Variables CSS)
  - Media Queries para responsividad
  - Animaciones y transiciones
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Intersection Observer API
  - RequestAnimationFrame para animaciones

### Servicios Externos

- **[EmailJS](https://www.emailjs.com/)**: Servicio de envío de emails
- **Google Fonts**: Tipografías Poppins y Inter

### Herramientas de Desarrollo

- **Visual Studio Code**: Editor principal
- **GitHub**: Control de versiones
- **Navegadores**: Testing cross-browser

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Página principal
├── stylesheet.css          # Estilos principales
├── js/
│   └── script.js          # Funcionalidad JavaScript
├── img/
│   ├── cara.jpg           # Foto de perfil
│   ├── github.png         # Icono GitHub
│   ├── linkedin.png       # Icono LinkedIn
│   └── icon.png           # Favicon
├── README.md              # Documentación del proyecto
└── LICENSE                # Licencia MIT
```

## 🚀 Instalación y Uso

### Clonar el Repositorio

```bash
git clone https://github.com/rafaelfernandezrosi/portfolio.git
cd portfolio
```

### Abrir en Navegador

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar Live Server (recomendado)
# Instalar Live Server extension en VS Code
# Hacer clic derecho en index.html -> "Open with Live Server"
```

### Configuración del Formulario de Contacto

El portfolio incluye un sistema robusto de contacto con dos métodos:

1. **EmailJS** (Principal) - Envío directo de emails
2. **Mailto** (Fallback automático) - Abre el cliente de email del usuario

#### Configurar EmailJS (Opcional)

Para habilitar el envío directo de emails:

1. **Registrarse en [EmailJS](https://www.emailjs.com/)**
2. **Conectar tu cuenta de Gmail**
3. **Crear una plantilla de email** con estos parámetros:
   ```
   from_name     - Nombre del remitente
   from_email    - Email del remitente
   subject       - Asunto del mensaje
   message       - Contenido del mensaje
   to_email      - Tu email de destino
   ```
4. **Obtener credenciales:**
   - Public Key
   - Service ID
   - Template ID
5. **Actualizar el archivo `js/script.js`:**

   ```javascript
   // Línea ~62: Reemplazar con tu Public Key
   emailjs.init("TU_PUBLIC_KEY");

   // Línea ~85: Reemplazar con tus IDs
   emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
   ```

Si no configuras EmailJS, el formulario funcionará automáticamente con mailto.

## 📝 Secciones del Portfolio

- **🏠 Hero**: Presentación principal con efecto parallax
- **👨‍💻 Sobre Mí**: Información personal y profesional
- **🚀 Proyectos**: Showcase de proyectos destacados
- **� Experiencia**: Timeline de educación y experiencia
- **📬 Contacto**: Formulario funcional con validación

## 🎨 Características de Diseño

### Paleta de Colores

- **Primario**: #007bff (Azul profesional)
- **Secundario**: #6c757d (Gris neutro)
- **Acentos**: Gradientes y transparencias

### Tipografías

- **Títulos**: Poppins (Google Fonts)
- **Texto**: Inter (Google Fonts)

### Animaciones

- Scroll suave entre secciones
- Fade-in al hacer scroll (Intersection Observer)
- Hover effects en elementos interactivos
- Efecto de escritura continua en tagline (se repite cada 5 segundos)
- Parallax sutil en hero section

## � Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🔧 Funcionalidades JavaScript

### Navegación

- Scroll suave animado
- Detección de sección activa
- Navegación por botones y enlaces

### Formulario

- Validación en tiempo real de todos los campos
- Estados de carga visual durante el envío
- Mensajes de éxito/error informativos
- Doble sistema: EmailJS + fallback automático a mailto
- Compatibilidad total sin configuración adicional

### Efectos Visuales

- Intersection Observer API para animaciones al scroll
- Efecto parallax en hero section
- Contador animado para estadísticas (cuando se agreguen)
- Efecto typewriter continuo con bucle automático
- Transiciones CSS suaves en todos los elementos

## 🚀 Deployment

### GitHub Pages

```bash
# El portfolio está listo para GitHub Pages
# Solo subir a repositorio y activar Pages en configuración
```

### Netlify

```bash
# Drag & drop de la carpeta del proyecto
# O conectar con repositorio GitHub
```

### Vercel

```bash
# Importar proyecto desde GitHub
# Deploy automático en cada push
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Rafael Fernández**

- 📧 Email: rafaelfernandezrosi@gmail.com
- 💼 LinkedIn: [Rafael Fernández](https://www.linkedin.com/in/rafael-fern%C3%A1ndez-rosi-22721223a)
- 🐱 GitHub: [rafaafdeez](https://github.com/rafaafdeez)

## 🙏 Agradecimientos

- [EmailJS](https://www.emailjs.com/) por el servicio de envío de emails
- [Google Fonts](https://fonts.google.com/) por las tipografías Poppins e Inter
- Comunidad de desarrolladores por inspiración y recursos

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
