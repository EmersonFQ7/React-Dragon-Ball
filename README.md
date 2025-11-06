# 🐉 Dragon Ball Explorer

**Dragon Ball Explorer** es una aplicación desarrollada en **React con Vite** que permite explorar personajes y planetas del universo de **Dragon Ball** mediante la API pública [Dragon Ball API](https://dragonball-api.com).

El proyecto está alojado en **Netlify** y se actualiza automáticamente con cada cambio en GitHub.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 19.1.1** — Librería para construir interfaces de usuario.
- 🌐 **React Router DOM 7.9.5** — Manejo de rutas entre páginas.
- 🔗 **Axios 1.13.2** — Cliente HTTP para consumir la API.
- 💅 **Bootstrap 5.3.8** — Framework CSS para un diseño moderno y responsivo.
- 🧱 **HTML5 & CSS3** — Estructura y estilos base.

---

## Estructura del proyecto
```
dragonball-react/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   └── CharacterList.jsx
│   │   └── entities/
│   │       └── EntityList.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── EntitiesPage.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/EmersonFQ7/React-Dragon-Ball.git](https://github.com/EmersonFQ7/React-Dragon-Ball.git)
    cd React-Dragon-Ball
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta el proyecto en modo desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Abre tu navegador en:**
    👉 `http://localhost:5173`

---

## 🌐 API utilizada

La app consume datos desde la API pública:
🔗 [https://dragonball-api.com/api](https://dragonball-api.com/api)

Ejemplos de endpoints:

-   `/characters` → Lista de personajes
-   `/planets` → Lista de planetas

---

## 📦 Dependencias

```json
"dependencies": {
  "axios": "^1.13.2",
  "bootstrap": "^5.3.8",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.5"
}

---

## 🔗 Enlaces

* 🌍 Deploy (Netlify): [https://dragon-ball-react-emerson.netlify.app](https://dragon-ball-react-emerson.netlify.app)
* 💻 Repositorio (GitHub): [https://github.com/EmersonFQ7/React-Dragon-Ball](https://github.com/EmersonFQ7/React-Dragon-Ball)
* 🎥 Video demostrativo: [https://youtu.be/vguILgCN20c](https://youtu.be/vguILgCN20c)

---

## 🧩 Características principales

* Listado de personajes del universo Dragon Ball.
* Visualización de planetas y entidades.
* Diseño responsive compatible con dispositivos móviles.
* Navegación dinámica sin recarga de página (SPA).
* Integración directa con API externa.

---

## 👨‍💻 Desarrollado por

**Emerson Flores Q.**
📅 2025
GitHub: [@EmersonFQ7](https://github.com/EmersonFQ7)