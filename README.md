# 🍏 GreenBite

GreenBite es una plataforma moderna para la gestión de planes nutricionales y el seguimiento de la salud de pacientes. Construida con **React, Vite y Supabase**, permite a los administradores asignar dietas personalizadas y a los pacientes realizar un seguimiento detallado de sus comidas, objetivos y pagos.

## 🚀 Despliegue (Vercel)

El proyecto está alojado en Vercel, conectándose directamente con nuestra base de datos en Supabase. 

*(**Nota:** Sube tus propias capturas de pantalla de la aplicación funcionando a una carpeta `docs/` o directamente a la raíz de tu proyecto para que se muestren aquí abajo).*

### 🖥️ Vista del Dashboard
![Dashboard de GreenBite](./docs/dashboard-preview.png)

### 📋 Catálogo de Planes
![Catálogo de Planes](./docs/catalogo-preview.png)

### 💳 Panel de Pagos
![Panel de Pagos](./docs/pagos-preview.png)

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React.js + Vite
- **Base de Datos & Auth:** Supabase (PostgreSQL)
- **Despliegue:** Vercel + GitHub
- **Librerías Adicionales:** React Router, Recharts (para gráficas), jsPDF (para recibos).

## 📖 Características Principales

### 👨‍⚕️ Panel de Administrador
- **Gestión de Plantillas:** Creación y asignación de plantillas dietéticas asegurando un balance de macronutrientes del 100%.
- **Gestión de Pacientes:** Administración de usuarios y seguimiento de su historial de peso y métricas de salud.
- **Asignación de Dietas:** Personalización de planes de 5 comidas diarias a lo largo de la semana.
- **Control de Cotizaciones:** Emisión y monitoreo de cobros.

### 🧑 Panel de Paciente
- **Perfil de Salud y Biométrica:** Calculadora automática de IMC y gráficas visuales del progreso de peso.
- **Mis Dietas:** Seguimiento diario con cálculo de porcentaje de cumplimiento del plan alimenticio.
- **Pagos Seguros:** Sistema que simula la pasarela de pago, validando tarjetas y generando recibos PDF descargables de forma automática.

## 💻 Instalación y Uso Local

Si deseas correr este proyecto en tu propia máquina, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/YxngPaul29/GreenBite-Mejorado.git
   cd ProyectoGreenBite
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura Supabase:** 
   El proyecto ya incluye la conexión en `src/lib/supabase.js`. Si tienes tu propio entorno, modifica allí la URL y Key.

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 🧪 Calidad de Software (QA)
Las funcionalidades clave (como la suma exacta de macronutrientes o el ciclo de vida de una cotización de pago) cuentan con el diseño de casos de uso y casos de prueba formales para asegurar un control de calidad óptimo del producto.
