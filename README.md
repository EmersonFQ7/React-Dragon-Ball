# 🐉 Dragon Ball Explorer

**Dragon Ball Explorer** es una aplicación desarrollada en **React con Vite** que permite explorar personajes y planetas del universo de **Dragon Ball** mediante la API pública [Dragon Ball API](https://dragonball-api.com).

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 19.1.1** — Librería para construir interfaces de usuario.  
- 🌐 **React Router DOM 7.9.5** — Manejo de rutas entre páginas.  
- 🔗 **Axios 1.13.2** — Cliente HTTP para consumir la API.  
- 💅 **Bootstrap 5.3.8** — Framework CSS para un diseño moderno y responsivo.  
- 🧱 **HTML5 & CSS3** — Estructura y estilos base.  

---

## 📁 Estructura del proyecto

dragonball-react/
│
├── src/
│ ├── components/
│ │ ├── common/
│ │ │ ├── Navbar.jsx
│ │ │ └── Footer.jsx
│ │ ├── home/
│ │ │ ├── HeroSection.jsx
│ │ │ └── CharacterList.jsx
│ │ └── entities/
│ │ └── EntityList.jsx
│ │
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ └── EntitiesPage.jsx
│ │
│ ├── services/
│ │ └── api.js
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
├── package.json
└── README.md

yaml
Copiar código

---

## ⚙️ Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/dragonball-react.git
   cd dragonball-react
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta el proyecto en modo desarrollo:

bash
Copiar código
npm run dev
Abre tu navegador en:
👉 http://localhost:5173

🌐 API utilizada
La app consume datos desde la API pública:
🔗 https://dragonball-api.com/api

Ejemplos de endpoints:

/characters → Lista de personajes

/planets → Lista de planetas

📦 Dependencias
json
Copiar código
"dependencies": {
  "axios": "^1.13.2",
  "bootstrap": "^5.3.8",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.5"
}
🔗 Enlaces
🌍 Deploy (Netlify): https://dragon-ball-react-emerson.netlify.app

🎥 Video demostrativo: https://youtu.be/vguILgCN20c

🧠 Nota sobre los despliegues en Netlify
Cada vez que hagas un git push a la rama main, Netlify detectará el cambio y publicará una nueva versión automáticamente.
El enlace del sitio seguirá siendo el mismo:

👉 https://dragon-ball-react-emerson.netlify.app

Netlify genera también URLs únicas de cada deploy (por ejemplo, deployID--dragon-ball-react-emerson.netlify.app) para previsualización, pero la URL principal no cambia mientras mantengas el mismo dominio.

👨‍💻 Desarrollado por
Emerson Flores Q.
GitHub: @EmersonFQ7