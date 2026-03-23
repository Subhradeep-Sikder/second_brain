# 🧠 Frontend Setup Guide

This is the frontend of the project built using **Vite + React + TypeScript**. Follow the steps below to run it locally and connect it to your backend.

---

## 🚀 How to Run the Frontend

### 1. Clone the Repository

```bash
<<<<<<< HEAD
git clone <repo>
=======
git clone <your-repo-url>
>>>>>>> 48e9e65b8d1d7dbca4ac51854da0571bfafe3bc2
cd frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

The frontend requires a backend API URL to function properly.

Create a `.env` file in the root directory (same level as `package.json`):

```bash
touch .env
```

Now open the `.env` file and add:

```env
VITE_BACKEND_URL=http://localhost:3000/api/v1  
```

📌 Replace the URL if your backend runs on a different port or is deployed.

---

### 4. Start the Development Server

```bash
npm run dev
```

---

### 5. Open in Browser

After running the server, open:

```
http://localhost:5173
```

---

## ⚠️ Important Notes

* Make sure your **backend server is running** before starting the frontend.
* If the `.env` file is updated, restart the dev server.
* The `VITE_` prefix is required for environment variables in Vite.

---

## ✅ You're Good to Go!

Your frontend should now be connected to the backend and running successfully 🚀
