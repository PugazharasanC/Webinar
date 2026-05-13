# JWT Authentication Backend

Modern authentication backend built with:

* Node.js
* Express
* MongoDB
* Mongoose
* JSON Web Token

This backend provides secure JWT cookie-based authentication with protected routes and user management.

---

# Features

* JWT Authentication
* HTTP-only Cookie Auth
* MVC Architecture
* Protected Routes
* MongoDB Integration
* Password Hashing with bcrypt
* Authentication Middleware
* User Validation
* Cloudinary Avatar Upload
* CORS Configuration
* Environment-based Setup

---

# Tech Stack

## Core

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Additional Libraries

* bcrypt
* jsonwebtoken
* cookie-parser
* cors
* dotenv
* multer
* Cloudinary

---

# Folder Structure

```txt id="ut1khh"
src/
│
├── config/
│   ├── db.js
│   └── cloudinary.js
│
├── controllers/
│   └── auth.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── multer.middleware.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── utils/
│   └── sendToken.js
│
└── server.js
```

---

# Environment Variables

Create a `.env` file in the backend root.

```env id="ec3zfr"
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Installation

## Clone Repository

```bash id="jkodax"
git clone <your_repo_url>
```

---

## Install Dependencies

```bash id="g4a6bq"
npm install
```

---

## Run Development Server

```bash id="9k3dlq"
npm run dev
```

---

# API Routes

## Authentication Routes

```txt id="34p3qo"
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/auth/me
GET    /api/v1/auth/logout
```

---

# Authentication Flow

```txt id="3b5rme"
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

# User Model

```js id="n5z6hu"
{
  name: String,
  email: String,
  password: String,
  avatar: String,
  role: String,
  isVerified: Boolean
}
```

---

# Security Features

* Password Hashing
* HTTP-only Cookies
* Protected Middleware
* JWT Verification
* Secure CORS Setup
* Environment Variables

---

# Middleware Included

* Authentication Middleware
* Multer File Upload Middleware
* Cookie Parser
* JSON Parser
* URL Encoded Parser

---

# Future Improvements

* Refresh Tokens
* Email Verification
* Forgot Password
* Role-based Authorization
* Account Verification
* Token Blacklisting
* Rate Limiting
* OTP Authentication

---

# License

This project is licensed under the MIT License.
