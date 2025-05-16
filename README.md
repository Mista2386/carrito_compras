# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Aplicación de Lista de Compras en React 🛒

Aplicación web para gestión de listas de compras desarrollada con React, que permite:
- Visualizar productos desde API externa
- Agregar/eliminar productos del carrito
- Calcular total de la compra
- Guardar compras en localStorage
- Enviar datos a API backend

## Características principales ✨
- **Arquitectura basada en componentes** reutilizables
- **Persistencia de datos** usando localStorage
- **Conexión con API REST** para productos y compras
- **Routing con React Router** para múltiples vistas
- **Diseño responsive** con Tailwind CSS
- **Validación de formularios** integrada

## Tecnologías utilizadas 🛠️
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)

## Estructura del proyecto 📂
src/
├── components/
│ ├── ItemList.jsx
│ ├── Button.jsx
│ ├── AddItem.jsx
│ └── Actions.jsx
├── pages/
│ ├── Home.jsx
│ └── Checkout.jsx
└── App.jsx
