# SpaceX Explorer Website — Final Project (Module 8, DEV.F)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2c7f133f-ec77-4c2e-a9d5-cf3acdcbdbfe/deploy-status)](https://app.netlify.com/projects/g38m8-drv-spacexexplorer/deploys)

Built as the final project for the Web Development Program (Module 8) at DEV.F.

This is a front-end-focused single-page application (SPA) built with `React` and `Vite`. It showcases data from the official SpaceX public API and allows user authentication via a mock backend (JSON Server + JWT) provided by DEV.F. The application features protected routes, role-based rendering, and reusable visual components, all styled with Bootstrap.

---

## 🚀 Tech Stack

- **Frontend**: `React`, `Vite`, `React Router DOM`, `Bootstrap 5`
- **State & Forms**: React Hooks, Context API, custom hooks
- **Routing & Navigation**:
    - Centralized route definition with a `RoutesIndex` file
    - Protected routes using wrapper components
    - Role-based and conditional rendering
- **API & Auth**:
    - SpaceX API (public, open-source)
    - Mock backend with `JSON Server + JWT` (external, not built by me)
- **Utilities**:
    - Axios for HTTP requests
    - Utility helpers for date formatting, fallback handling, etc.
    - Reusable UI cards for launches, rockets, and Starlink satellites

---

## 🔐 User Access

You can log in using one of the following pre-registered accounts:

- 👤 **Regular User**
    - Email: `drstrange@marvel.com`
    - Password: `multiverso`

- 🛠️ **Admin User**
    - Email: `superman@dc.com`
    - Password: `superman`

Or you can create your own account via the **Sign Up** page.

>⚠️ This mock backend is hosted on a free tier (Render), so data will reset after periods of inactivity.

---

## 🌌 Features Summary

- View upcoming and past **launches**, **rocket specs**, and **Roadster data**
- Restricted access to **Starlink satellite data**, available only to logged-in users
- Protected routes for:
    - Viewing all users (admin-only)
    - User profile management
- Authentication and registration using a mock server (JWT-based)
- Responsive layout with a dynamic navbar and mobile menu (hamburger style)
- Conditional rendering based on login state and user role
- Fully reusable card components for data presentation
- Global state management with `AuthContext` and `SpaceXContext`
- Scrollable collapsible menu for better mobile UX
- API services abstracted into separate files (Axios-based)
- Utility file for shared logic like formatting or image fallbacks

---

## 🧱 Folder Structure Highlights

```
src/
│
├── assets/             # Static files (images, icons, custom CSS)
├── components/         # Reusable UI elements (cards, navbar, footer)
├── context/            # AuthContext & SpaceXContext providers
├── hooks/              # Custom React hooks (e.g., useAuthContext)
├── pages/              # Main page components (Home, About, Login, etc.)
├── routeGuards/        # Higher-order components for protecting routes (e.g., RequireAuth)
├── routes/             # Centralized routing logic and <RoutesIndex />
├── services/           # Axios-based API service files for SpaceX and auth
├── styles/             # Optional custom CSS modules or global overrides
├── utilities/          # Shared helper functions (e.g., formatters, fallbacks)
├── main.jsx            # App entry point, mounts <App /> and wraps with contexts
└── App.jsx             # Top-level component with router and layout
```

---

## 📡 APIs Used

**1.  SpaceX API (Public Open-Source)**
- Data source for launches, rockets, Roadster, and Starlink satellites
- Maintained by the developer community
- 🔗 [Docs](https://github.com/r-spacex/SpaceX-API)

**2. Mock JSON Server with JWT (Authentication)**
- Used to manage users, tokens, registration, and login
- Provided by the DEV.F team for educational purposes
- Hosted on Render
- 🔗 [Docs](https://github.com/warderer/json-server-jwt)
- 🔗 [Live API](https://ecommerce-json-jwt.onrender.com/)

---

## 📦 Local Setup & Run

1. Clone the repository:

```bash
 git clone https://github.com/davittrdzv/M8-ProyectoFinal-SpaceX.git
```
2. Install dependencies:

```bash
 npm install
```
3. Start the development server:

```bash
 npm run dev
```
4. (Optional) Start the local mock API server (if not using the hosted one):

```bash
 json-server-auth --watch db.json --port 3000
```

---

## 🌐 Live Demo

🔗 **Live deployment on Netlify**: [DRV SpaceX Explorer](https://g38m8-drv-spacexexplorer.netlify.app/)

---

## 🎓 Credits

Created by David Rodríguez as part of the Web Development program at DEV.F.

Back-end server used for authentication was provided by instructors for practice purposes.