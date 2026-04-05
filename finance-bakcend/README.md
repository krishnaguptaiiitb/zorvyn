# Finance Backend API

## 🚀 Overview
This is a backend system for a finance dashboard that supports user roles, financial record management, and summary analytics.

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 👤 Roles
- Viewer → View only
- Analyst → View + summary
- Admin → Full access

## 🔐 Authentication
JWT-based authentication is used. Protected routes require a valid token.

## 📦 API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Records
- POST /api/records (Admin)
- GET /api/records (Admin, Analyst)
- PUT /api/records/:id (Admin)
- DELETE /api/records/:id (Admin)

### Summary
- GET /api/summary (Admin, Analyst)

## 📊 Features
- Role-based access control
- Financial record CRUD
- Filtering records
- Dashboard analytics (income, expense, balance)
- Secure password hashing

## ⚙️ Setup

```bash
git clone <your-repo>
cd finance-backend
npm install
npm run dev