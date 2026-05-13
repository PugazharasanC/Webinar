# React Authentication Frontend

Modern authentication frontend built with:

* React
* Vite
* React Router
* Tailwind CSS
* Framer Motion

This frontend connects with a JWT cookie-based authentication backend built using Express and MongoDB.

---

# Features

* Modern Glassmorphism UI
* Responsive Design
* JWT Cookie Authentication
* Protected Routes
* Persistent Login
* Login & Registration
* Dashboard Page
* User Details Fetching
* Logout Functionality
* Animated Components
* API Integration with Axios

---

# Tech Stack

## Core

* React
* Vite
* React Router v7
* Tailwind CSS

---

## Additional Libraries

* Axios
* Framer Motion
* Lucide React

---

# Folder Structure

```txt id="wbr4dz"
src/
│
├── api/
│   └── axios.js
│
├── components/
│   ├── Loader.jsx
│   └── Navbar.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── guards/
│   └── ProtectedRoute.jsx
│
├── layouts/
│   └── AuthLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
│
├── router/
│   └── router.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Environment Variables

Create a `.env` file in the frontend root.

```env id="m3fd8n"
VITE_API_URL=http://localhost:8000/api/v1
```

---

# Installation

## Clone Repository

```bash id="jz0smi"
git clone <your_repo_url>
```

---

## Install Dependencies

```bash id="1ns8cz"
npm install
```

---

## Run Development Server

```bash id="7b4gzt"
npm run dev
```

---

# Available Routes

```txt id="ff2ljr"
/                → Home Page
/login           → Login Page
/register        → Register Page
/dashboard       → Protected Dashboard
```

---

# Authentication Flow

```txt id="ffh5mc"
User Login/Register
        ↓
JWT Cookie Stored in Browser
        ↓
Protected Route Verification
        ↓
Authenticated Dashboard Access
```

---

# API Integration

The frontend communicates with the backend using Axios.

```js id="g4ttgv"
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
```

---

# UI Highlights

* Dark Theme
* Glassmorphism Components
* Smooth Hover Effects
* Framer Motion Animations
* Responsive Layout
* Premium Styled Forms

---

# Future Improvements

* Toast Notifications
* Form Validation
* Theme Toggle
* Profile Update
* Global State Management
* Loading Skeletons
* Better Error Handling

---

# License

This project is licensed under the MIT License.
