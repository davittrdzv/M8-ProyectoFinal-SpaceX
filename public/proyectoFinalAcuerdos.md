# Proyecto Final

## Definición del Proyecto

**Título:** Sitio Web de Misiones Espaciales de SpaceX

Este proyecto consiste en el desarrollo de una aplicación web que muestre información sobre las misiones espaciales e información relacionada de SpaceX. El sitio se construirá utilizando tecnologías modernas de desarrollo frontend y consumirá datos en tiempo real desde una API pública.

## Funcionalidades

- 🔭 **Consumo de API SpaceX**: Obtención de datos en tiempo real desde [https://api.spacexdata.com](https://api.spacexdata.com).
- 🔐 **Consumo de JSON Server**: Uso de un servidor mock con JWT (`https://ecommerce-json-jwt.onrender.com/`) para autenticación de usuarios y persistencia temporal de datos.
- 🔐 **Sign In**: Inicio de sesión para usuarios registrados.
- 🔓 **Sign Out**: Cierre de sesión de usuario.
- 📝 **Sign Up**: Registro de nuevos usuarios.
- ✅ **Validación de formularios**: Validaciones en los inputs para garantizar datos válidos con `yup`.
- 🧾 **Uso de formularios**: Captura de datos mediante `react-hook-form`.
- ⚛️ **Uso de React**: Aplicación desarrollada completamente con React.
- 🌐 **Uso de rutas**: Navegación entre diferentes vistas usando `react-router-dom`.
- 🔒 **Protección de rutas**: Acceso restringido a secciones según el estado de autenticación (autenticado/no autenticado).
- 🔁 **Renderizado condicional**: Elementos mostrados dependiendo del estado de sesión del usuario.
- 🧩 **Uso de Hooks de React**: Uso de `useState`, `useEffect`, `useContext`, `createContext`, `useParams`.
- 🧠 **Uso de useParams**: Para obtener parámetros de la URL y mostrar detalles de un cohete o lanzamiento específico.
- 🛠️ **Creación y uso de componentes funcionales**: Tarjetas, sliders e interfaces reutilizables que reciben props.
- ♻️ **Hooks personalizados**: Para manejo de lógica y acceso a contexto de usuario y SpaceX.
- 🌍 **Gráfico de posición del Roadster en el espacio**: Usando `three.js`.
- 🛰️ **Visualización de satélites Starlink orbitando la Tierra**: Usando `satellite.js`, `cesium`, y `resium`.
- 🧭 **Archivo centralizado de rutas (RoutesIndex)**: Toda la configuración de rutas en un solo archivo.
- 🧱 **Route Guards personalizados**: Componentes `PrivateRoutes` y `PublicOnlyRoutes` usando `Outlet` y `Navigate`.
- 🛎️ **Lógica de servicios GET y POST**: Archivos JavaScript separados que centralizan peticiones HTTP con `axios`.
- 🧰 **Utilities/Helpers**: Funciones reutilizables agrupadas por funcionalidad, por ejemplo: formateo de datos, URLs de YouTube, manejo de imágenes, etc.
- 🎨 **Estilos CSS globales y específicos**: Archivos `.css` divididos según necesidad.
- 🚀 **Deployment en Netlify**: Sitio desplegado mediante integración con GitHub.

## Librerías Usadas

- `axios` – Para hacer peticiones HTTP.
- `bootstrap` – Framework CSS para estilos rápidos y responsivos.
- `cesium` – Librería para visualización 3D geoespacial.
- `jwt-decode` – Para decodificar tokens JWT.
- `react` – Biblioteca base del proyecto.
- `react-router-dom` – Para enrutamiento del frontend.
- `react-hook-form` – Manejo de formularios en React.
- `resium` – Adaptador de Cesium para React.
- `satellite-js` – Cálculo de posiciones orbitales.
- `sweetalert` – Alertas personalizadas.
- `three` – Motor gráfico 3D para web.
- `yup` – Validación de formularios con esquemas.

## Estructura del Proyecto (`src/`)

- `assets` – Archivos estáticos como imágenes.
- `components` – Componentes reutilizables como tarjetas, sliders, carouseles, etc.
- `context` – Contextos globales como autenticación y datos SpaceX.
- `hooks` – Hooks personalizados (`useAuthContext`, `useSpaceXContext`, etc).
- `pages` – Vistas principales de cada ruta (Home, Launches, Roadster, etc).
- `routeGuards` – Componentes de protección de rutas (`PrivateRoutes`, `PublicOnlyRoutes`).
- `routes` – Configuración completa de rutas (`RoutesIndex.jsx`).
- `services` – Funciones para llamadas HTTP a APIs (`getCompanyData`, `postLogin`, etc).
- `styles` – Archivos CSS divididos por componente y globales.
- `utilities` – Funciones auxiliares (`getYouTubeEmbedUrl`, `handlePicError`, etc).
  - `roadsterInSpaceUtils` – Cálculos de posición y órbita del Tesla Roadster.

## Dinámica de Trabajo

- Trabajo individual.
- Seguimiento del progreso mediante un tablero Kanban en Trello.

## Recursos

- 📌 **Kanban Board**: [Trello - Proyecto Final G38](https://trello.com/b/svcE29Pb/proyecto-final-g38-drv)
- 💻 **Repositorio GitHub**: [M8-ProyectoFinal-SpaceX](https://github.com/davittrdzv/M8-ProyectoFinal-SpaceX)