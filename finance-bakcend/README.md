# 💰 Finance Dashboard (Full Stack)

## 🚀 Overview
A full-stack finance management system with role-based access control, secure authentication, and real-time analytics.

This project demonstrates backend architecture, API design, and frontend integration.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Frontend
- React (Vite)
- Axios

---

## 👤 Roles & Permissions

| Role    | Permissions |
|--------|------------|
| Viewer | View data only |
| Analyst | View + summary analytics |
| Admin | Full access (CRUD + users) |

---

## 🔐 Authentication
- JWT-based authentication
- Protected routes using middleware
- Role-based access control

---

## 📦 API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Records
- POST `/api/records`
- GET `/api/records`
- PUT `/api/records/:id`
- DELETE `/api/records/:id`

### Summary
- GET `/api/summary`

---

## 📊 Features

- Role-based access control
- Financial records CRUD
- User-specific data isolation
- Dashboard analytics:
  - Total income
  - Total expenses
  - Net balance
  - Category breakdown
- Pagination & filtering
- Secure password hashing
- Clean API structure

---

## 🖥 Frontend Features

- Login & Register UI
- Dashboard with analytics cards
- Records management UI
- API integration with Axios

---

## ⚙️ Setup

### Backend

```bash
git clone <your-repo>
cd finance-bakcend
npm install
npm run dev
