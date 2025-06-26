# 🔧 Backend – Di Động Việt Clone (Node.js + Express)

This is the **backend** of the Di Động Việt Clone project, built using **Node.js**, **Express.js**, and **PostgreSQL** via **Sequelize ORM**.

---

## 🌐 API Overview

- Built following **RESTful principles**
- Uses **JWT** for authentication and authorization
- Includes **role-based access control** for admin & user
- Returns JSON responses

---

## ⚙️ Tech Stack

- **Framework**: Express.js
- **Database**: PostgreSQL + Sequelize ORM
- **Authentication**: JWT + Bcrypt + Passport Local
- **Session/Flash**: express-session, connect-flash
- **File Upload**: Multer
- **Templating (optional)**: EJS
- **Other Tools**: Cheerio, dotenv, method-override, cookie-parser

---

## 🔑 Features

### 🔐 Auth
- Register / Login with JWT
- Admin/User role assignment
- Forgot password flow (via token/email - WIP)

### 👤 Admin Dashboard
- User management (create, update, delete)
- Product management (create, update, delete)
- Order confirmation & management

### 🛒 User Side
- View products
- Add to cart, checkout
- Cancel order (if unconfirmed)

---

## 📁 Project Structure (simplified)

server/
├── config/ # Sequelize & environment config
├── controllers/ # Request logic
├── models/ # Sequelize models
├── routes/ # Express routes
├── middlewares/ # Auth middlewares
├── views/ (optional) # EJS templates
└── uploads/ # Uploaded images