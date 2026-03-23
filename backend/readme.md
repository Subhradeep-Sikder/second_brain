# 🧠 Backend Setup Guide

This is the backend of the project built using **Node.js + Express + TypeScript**. Follow the steps below to run it locally.

---

## 🚀 How to Run the Backend

### 1. Clone the Repository

```bash
git clone <repo>
cd backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

The backend requires environment variables for database connection and authentication.

Create a `.env` file in the root directory (same level as `package.json`):

```bash
touch .env
```

Now open the `.env` file and add:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/secondbrain
JWT_SECRET=secret123
```

📌 Replace values if needed (for example, if using a different database or secret).

---

### 4. Start MongoDB

Make sure your MongoDB server is running locally.

---

### 5. Start the Development Server

```bash
npm run dev
```

---

### 6. Server URL

After running the server, your backend will be available at:

```
http://localhost:3000
```

---

## ⚠️ Important Notes

* Make sure **MongoDB is running** before starting the backend.
* If you update the `.env` file, restart the server.
* Do not push your `.env` file to GitHub (keep it in `.gitignore`).
* Use tools like Postman to test APIs.

---

## ✅ You're Good to Go!

Your backend server should now be running successfully 🚀
