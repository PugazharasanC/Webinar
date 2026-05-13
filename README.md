# JWT Auth Full Stack Application

Modern full-stack authentication system built with:

* React
* Vite
* Tailwind CSS
* React Router
* Express
* MongoDB
* Mongoose
* JSON Web Token
* Cloudinary

---

# Features

## Backend

* JWT Authentication
* Cookie-based Auth
* MVC Architecture
* Protected Routes
* Password Hashing with bcrypt
* MongoDB Integration
* Auth Middleware
* User Validation
* Cloudinary Avatar Upload
* Environment-based Configuration

---

## Frontend

* Modern React + Vite Setup
* React Router v7
* Protected Dashboard
* Persistent Authentication
* Animated UI with Framer Motion
* Glassmorphism Design
* Tailwind CSS Styling
* Axios API Integration
* Loading States
* Responsive Layout

---

# Project Structure

```txt
root/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   │
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── guards/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── router/
│   │   └── main.jsx
│   │
│   └── .env
```

---

# Environment Variables

## Backend `.env`

```env
PORT=8000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Frontend `.env`

```env
VITE_API_URL=http://localhost:8000/api/v1
```

---

# Installation

## Clone Repository

```bash
git clone <your_repo_url>
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# API Routes

## Auth Routes

```txt
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/auth/me
GET    /api/v1/auth/logout
```

---

# Authentication Flow

```txt
User Login/Register
        ↓
JWT Token Generated
        ↓
Stored in HTTP-only Cookie
        ↓
Browser Sends Cookie Automatically
        ↓
Protected Routes Verified
```

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router v7
* Axios
* Framer Motion
* Lucide Icons

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* cookie-parser
* cors
* multer
* Cloudinary

---

# Screens Included

* Home Page
* Login Page
* Register Page
* Protected Dashboard
* User Details Section

---

# Future Improvements

* Refresh Tokens
* Email Verification
* Forgot Password
* Role-based Authorization
* Profile Update
* Image Optimization
* Dark/Light Theme Toggle
* Redux/Zustand State Management

---

# License

This project is licensed under the MIT License.
