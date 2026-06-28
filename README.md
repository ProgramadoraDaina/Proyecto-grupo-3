# 🧠 Flashwise | Study Cards

**Flashwise** es una Single Page Application (SPA) interactiva diseñada para optimizar el aprendizaje mediante tarjetas de estudio (flashcards) con un sistema de repaso inteligente. 

Este proyecto constituye la entrega del **Segundo Proyecto Integrador del Módulo de React**, cumpliendo con los requisitos de desarrollo frontend moderno sin depender de APIs o bases de datos externas.

🔗 **Deploy de la aplicación:** [Flashwise Live](https://shadowia-sofiazilijosky.github.io/Proyecto-grupo-3/)
🔗 **Repositorio (Estable):** [GitHub Repo](https://github.com/shadowia-sofiazilijosky/Proyecto-grupo-3.git) 
*(Nota: Este repositorio es un fork utilizado como versión estable definitiva para preservar la integridad del código y los despliegues frente a problemas técnicos en el repositorio original).*

---

## 👥 Equipo de Desarrollo (Grupo 3)
* Sofia Zilijosky
* Josue Quino
* Daina Paucar
* Luz Mendoza
* Tommy Quispe
* Santiago Aguirre

---

## 🚀 Resolución de la Consigna (Idea 6)

El desarrollo cumple a la perfección con la **Idea 6: Tarjetas de Estudio con Repaso Inteligente**, resolviendo los 5 desafíos técnicos obligatorios de la cursada:

* **D1 (Gestión de Mazo):** Implementación de un CRUD completo para tarjetas (pregunta, respuesta, tema, dificultad) respaldado por un store global.
* **D2 (Modos de Estudio):** Separación mediante React Router del "Modo Repaso" interactivo y el "Modo Quiz" evaluativo.
* **D3 (Métricas):** Registro persistente de aciertos y errores por cada tarjeta individual.
* **D4 (Priorización):** Algoritmo inteligente que detecta y prioriza las tarjetas con mayor índice de fallos al armar las sesiones.
* **D5 (Dashboard de Progreso):** Panel analítico con rachas diarias, progreso histórico y visualización de datos.

---

## ✨ Funcionalidades y Navegación

La aplicación está dividida en módulos de navegación claros, diseñados con una interfaz **Glassmorphism**, una paleta de colores pastel inmersiva con fondos 3D y un diseño **100% responsive** (adaptable a móviles, tablets y escritorio).

### 🏠 Home
Landing principal que da la bienvenida al usuario, introduce la propuesta de valor de la plataforma (Repetición Espaciada, Consistencia) y ofrece un acceso rápido a las herramientas de estudio.

### ➕ Create Cards (Creación de Tarjetas)
Formulario optimizado para la creación de contenido:
* **Inputs detallados:** Espacios designados para Pregunta, Respuesta y Tema (Materia).
* **Control de UI:** Límite estricto de 300 caracteres en las respuestas para garantizar que las tarjetas no desborden visualmente.
* **Categorización:** Selector de dificultad (Fácil, Media, Difícil).

### 📚 List Cards (Colección de Flashcards)
Una biblioteca completa para administrar el mazo de estudio:
* **Buscador Inteligente:** Motor de búsqueda predictivo. Encuentra instantáneamente la tarjeta deseada escribiendo cualquier palabra clave.
* **Agrupación Semántica:** El filtro de Materia es inteligente; detecta y unifica materias independientemente de si el usuario las escribió en mayúsculas, minúsculas o variaciones menores.
* **Filtros por Dificultad:** Visualiza rápidamente solo las tarjetas Fáciles, Medias o Difíciles con etiquetas de colores (Easy, Medium, Hard).
* **Historial de Repaso en Tiempo Real:** Cada tarjeta renderiza dinámicamente hace cuánto tiempo fue estudiada (ej. *"Última revisión: hace 5 horas"*) y el contador total de las veces que ha sido repasada (*ej. "27 veces repasada"*).
* **Gestión Segura:** Botones de edición y eliminación protegidos por Modales de Confirmación para evitar acciones accidentales. Al editar, se despliega un menú con las mismas reglas de validación.

### 🔄 Study Cards (Modo Repaso)
Entorno de estudio sin distracciones:
* **Interacción 3D:** Tarjetas con efecto *Flip* (giro) al hacer clic, mostrando primero la pregunta y revelando la respuesta tras la interacción.
* **Sidebar (Barra Lateral):** Controles accesibles para filtrar la sesión de estudio actual por materia o nivel de dificultad.

### 🎯 Quiz Mode (Modo Evaluación)
Entorno de prueba para medir el conocimiento real:
* **Dinámica de Selección:** El usuario resuelve preguntas eligiendo la opción correcta (con contadores de aciertos y errores en vivo).
* **Feedback Semaforizado:** Al finalizar, el sistema renderiza un modal de resultados con colores dinámicos (Verde, Amarillo o Rojo) dependiendo del porcentaje final de aciertos.
* **Revisión de Errores:** Menú detallado "Ver Respuestas" que cruza la opción elegida por el usuario frente a la respuesta correcta real.
* **Reinicio:** Botón de acción para volver a intentar la evaluación.

### 📈 Progress Page (Panel de Rendimiento)
Dashboard analítico en tiempo real para mantener la motivación del usuario:
* **Reloj Global:** Medidor de tiempo de sesión persistente en tiempo real mientras el usuario navega la web.
* **Motor de Rachas (Streaks):** Contador dinámico que suma días de estudio consecutivo y penaliza reseteando a 0 ante la inactividad diaria.
* **Métricas de Efectividad:** Porcentaje de precisión histórica basado en el rendimiento del Quiz y contador de tarjetas estudiadas frente al total del mazo.
* **Gráfico de Rendimiento (Líneas):** Evolución temporal (0 a 100) de lunes a domingo, con selectores dinámicos para ver los últimos 7, 15 o 30 días.
* **Gráfico de Distribución (Torta):** Representación visual semaforizada de la composición del mazo según su dificultad (Fácil, Media, Difícil).

---

## 🛠️ Stack Tecnológico

* **Core:** React 19 + TypeScript + Vite
* **Enrutamiento:** React Router v7 (Modo SPA)
* **Estado Global:** Zustand v5
* **Persistencia:** Integración nativa con `localStorage` mediante Zustand Persist middleware.
* **Visualización de Datos:** Recharts
* **Estilos:** CSS Modules (`.module.css`) + UI Glassmorphism

---

## 📁 Arquitectura del Proyecto (Feature-First)

El código sigue estrictamente una arquitectura **Feature-First**, aislando la lógica de dominio de los componentes genéricos:

```text
src/
├── app/                  # Providers globales y configuración del Router.
├── features/             
│   └── flashcards/       # Dominio: Componentes CRUD, estado Zustand (store.ts), lógica de negocio (utils).
├── pages/                # Vistas enrutables (Home, CreateCards, ListCards, StudyCards, Quiz, Progress).
└── shared/               # Componentes transversales (RootLayout, Headers, UI base, TimeContext global).

💻 INSTALACIÓN Y USO LOCAL
Para levantar este proyecto en tu entorno de desarrollo local:

1. Clona este repositorio:
git clone [https://github.com/shadowia-sofiazilijosky/Proyecto-grupo-3.git](https://github.com/shadowia-sofiazilijosky/Proyecto-grupo-3.git)

2. Instala las dependencias necesarias:
npm install

3. Inicia el servidor de desarrollo local provisto por Vite:
npm run dev

4. Abre http://localhost:5173 en tu navegador.