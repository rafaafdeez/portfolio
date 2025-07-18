# 📧 Configuración del Formulario de Contacto

## Opciones Disponibles

Tu formulario de contacto ahora tiene dos opciones de envío. Aquí te explico cómo configurar:

---

## � Opción 1: EmailJS (RECOMENDADO - Más Profesional)

### Pasos:

1. **Ve a [emailjs.com](https://www.emailjs.com/)**
2. **Regístrate gratis**
3. **Configura un servicio de email:**
   - Conecta tu Gmail (`rafaelfernandezrosi@gmail.com`)
4. **Crea una plantilla de email (ver detalles abajo)**
5. **Obtén tus credenciales:**
   - Public Key
   - Service ID
   - Template ID
6. **En tu archivo `js/script.js`, líneas ~74 y ~95:**

   ```javascript
   emailjs.init("TU_PUBLIC_KEY_AQUI");

   emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
   ```

### 📧 Crear Plantilla de Email Paso a Paso:

#### 1. En EmailJS Dashboard:

- Clic en **"Email Templates"**
- Clic en **"Create New Template"**
- Nombre: **"Portfolio Contact Form"**

#### 2. Configurar la plantilla:

**Subject (Asunto):**

```
Nuevo mensaje desde tu portfolio: {{subject}}
```

**Content (Contenido del email):**

```html
<h2>📧 Nuevo mensaje desde tu Portfolio</h2>

<div
  style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;"
>
  <h3 style="color: #007bff; margin-top: 0;">Información del contacto:</h3>

  <p><strong>👤 Nombre:</strong> {{from_name}}</p>
  <p><strong>📧 Email:</strong> {{from_email}}</p>
  <p><strong>📋 Asunto:</strong> {{subject}}</p>

  <h3 style="color: #007bff;">💬 Mensaje:</h3>
  <div
    style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;"
  >
    {{message}}
  </div>

  <hr style="margin: 20px 0;" />

  <p style="font-size: 0.9em; color: #6c757d;">
    <strong>🌐 Enviado desde:</strong> Portfolio de Rafael Fernández<br />
    <strong>📅 Fecha:</strong> {{current_date}}<br />
    <strong>🔄 Para responder:</strong> Simplemente responde a este email
  </p>
</div>
```

#### 3. Configurar variables de la plantilla:

En la sección **"Template Parameters"**, agrega estas variables:

```
from_name     - El nombre de quien contacta
from_email    - El email de quien contacta
subject       - El asunto del mensaje
message       - El contenido del mensaje
to_email      - Tu email (rafaelfernandezrosi@gmail.com)
```

#### 4. Configurar email de destino:

En **"Settings"** de la plantilla:

- **To Email:** `{{to_email}}` o directamente `rafaelfernandezrosi@gmail.com`
- **From Name:** `Portfolio Contact Form`
- **Reply To:** `{{from_email}}`

#### 5. Probar la plantilla:

Usa estos valores de prueba:

```
from_name: "Juan Pérez"
from_email: "juan@ejemplo.com"
subject: "Interesado en colaborar"
message: "Hola Rafael, me interesa tu trabajo..."
to_email: "rafaelfernandezrosi@gmail.com"
```

#### 6. Actualizar tu JavaScript:

En `js/script.js`, busca la línea ~95 y cambia:

```javascript
emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
  from_name: name,
  from_email: email,
  subject: subject,
  message: message,
  to_email: "rafaelfernandezrosi@gmail.com",
});
```

### 🖼️ Guía Visual para EmailJS

#### Paso 1: Crear Servicio de Email

```
Dashboard → Email Services → Add New Service → Gmail
```

- Autoriza tu cuenta Gmail
- Nombra el servicio: "Gmail Portfolio"
- Copia el **Service ID** (ej: `service_abc123`)

#### Paso 2: Crear Template

```
Dashboard → Email Templates → Create New Template
```

**Campos importantes:**

- **Template Name:** `Portfolio Contact Form`
- **Template ID:** Se genera automático (ej: `template_xyz789`)

**En el editor de template:**

1. **Subject Line:**

   ```
   Portfolio: {{subject}} - Contacto de {{from_name}}
   ```

2. **HTML Content:**

   ```html
   <div
     style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"
   >
     <h2
       style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;"
     >
       📧 Nuevo contacto desde tu Portfolio
     </h2>

     <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
       <tr style="background-color: #f8f9fa;">
         <td
           style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;"
         >
           👤 Nombre:
         </td>
         <td style="padding: 12px; border: 1px solid #dee2e6;">
           {{from_name}}
         </td>
       </tr>
       <tr>
         <td
           style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;"
         >
           📧 Email:
         </td>
         <td style="padding: 12px; border: 1px solid #dee2e6;">
           {{from_email}}
         </td>
       </tr>
       <tr style="background-color: #f8f9fa;">
         <td
           style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;"
         >
           📋 Asunto:
         </td>
         <td style="padding: 12px; border: 1px solid #dee2e6;">{{subject}}</td>
       </tr>
     </table>

     <div
       style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;"
     >
       <h3 style="color: #007bff; margin-top: 0;">💬 Mensaje:</h3>
       <p style="line-height: 1.6; margin: 0;">{{message}}</p>
     </div>

     <div
       style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; font-size: 0.9em; color: #6c757d;"
     >
       <p><strong>🌐 Origen:</strong> Portfolio Rafael Fernández</p>
       <p>
         <strong>📧 Para responder:</strong> Simplemente responde a este email
       </p>
     </div>
   </div>
   ```

3. **Settings Tab:**
   - **To Email:** `rafaelfernandezrosi@gmail.com`
   - **From Name:** `Portfolio Contact`
   - **Reply To:** `{{from_email}}`

#### Paso 3: Obtener Credenciales

**Public Key:**

```
Dashboard → Account → General → Public Key
```

Ejemplo: `pk_123abc456def`

**Service ID:**

```
Dashboard → Email Services → [Tu servicio] → Service ID
```

Ejemplo: `service_gmail123`

**Template ID:**

```
Dashboard → Email Templates → [Tu template] → Template ID
```

Ejemplo: `template_contact456`

#### Paso 4: Configurar JavaScript

En tu archivo `js/script.js`, reemplaza estas líneas:

**Línea ~74:**

```javascript
emailjs.init("TU_PUBLIC_KEY"); // Tu Public Key real
```

**Línea ~104:**

```javascript
emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
  from_name: name,
  from_email: email,
  subject: subject,
  message: message,
  to_email: "rafaelfernandezrosi@gmail.com",
});
```

---

## 🚀 Resumen de Pasos Pendientes

**Para completar la configuración del portfolio necesitas:**

### ✅ Opción Rápida: Formspree (5 minutos)

1. Registrarte en [Formspree.io](https://formspree.io/)
2. Crear un formulario y obtener el Form ID
3. Reemplazar `YOUR_FORM_ID` en el HTML por tu Form ID real

### ✅ Opción Avanzada: EmailJS (15 minutos)

1. Configurar Public Key en línea ~74 del JavaScript
2. Configurar Service ID y Template ID en línea ~104 del JavaScript
3. Crear plantilla con los parámetros documentados

### ✅ Opción Backup: Mailto (Ya configurado)

- Si las otras opciones fallan, el formulario usa mailto automáticamente

---

Para verificar que todo está configurado correctamente:

1. **Verifica que tienes:**

   - ✅ Service ID (servicio de Gmail conectado)
   - ✅ Template ID (plantilla creada)
   - ✅ Public Key (de tu cuenta EmailJS)

2. **Test desde EmailJS:**

   - Ve a tu template
   - Clic en "Test Template"
   - Llena los campos de prueba
   - Verifica que el email llegue a tu Gmail

3. **Test desde tu portfolio:**
   - Llena tu formulario de contacto
   - Verifica en la consola del navegador (F12) si hay errores
   - Revisa tu Gmail (y carpeta de spam)

---

## 📱 Opción 2: Mailto (Backup Automático)

Si EmailJS falla, el formulario automáticamente abrirá el cliente de email del usuario con todos los datos prellenados.

**No necesitas configurar nada para esta opción.**

---

## 🧪 Cómo Probar

1. **Abre tu portfolio**
2. **Ve a la sección "Contacto"**
3. **Llena el formulario con datos de prueba**
4. **Haz clic en "Enviar Mensaje"**
5. **Deberías recibir un email en tu Gmail**

---

## 🚨 Solución de Problemas

### Si no recibes emails:

1. **Revisa tu carpeta de SPAM**
2. **Verifica que los IDs de EmailJS sean correctos**
3. **Asegúrate de que tu email esté verificado en EmailJS**
4. **Prueba el formulario desde el dominio público (no localhost)**

### Si ves errores en consola:

1. **Abre las herramientas de desarrollador (F12)**
2. **Ve a la pestaña "Console"**
3. **Busca mensajes de error en rojo**
4. **Contáctame si necesitas ayuda para resolverlos**

---

## 📞 Contacto para Soporte

Si tienes problemas con la configuración:

- **Email:** [Tu email de soporte]
- **Documentación EmailJS:** https://www.emailjs.com/docs/

---

**¡Tu portfolio ya está listo para recibir mensajes profesionales! 🚀**
