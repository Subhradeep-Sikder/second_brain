# 🧠 Second Brain

**Second Brain** is a full-stack personal knowledge management (PKM) app designed to act as your external digital memory. 

It lets you capture, organize, and retrieve links, notes, tweets, and videos in a single dashboard. With tag-based organization and secure sharing, Second Brain helps you build a curated, searchable repository of ideas and resources.


---

## 🌟 Benefits

- 📂 **Centralized Workspace**: Keep links, notes, videos, and documents sorted in one place.
- ⚡ **Instant Filtering**: Retrieve any saved item in seconds using tag-based filtering.
- 🔗 **Secure Sharing**: Easily share your brain using secure, custom public links.


---

## 🛠️ Tech Stack

- 🎨 **Frontend Core**: React (v19) • TypeScript • Vite
- 🖌️ **Styling**: Tailwind CSS (v4)
- 🗺️ **Routing & API**: React Router • Axios
- ⚙️ **Backend Server**: Node.js • Express • TypeScript
- 🗄️ **Database**: MongoDB • Mongoose
- 🔒 **Authentication**: JWT (JSON Web Tokens) • bcrypt (Password Hashing)


---


## 📖 User Guide

1. 🔐 **Auth**: Register and log in to open your private dashboard.
2. ➕ **Add**: Click **Add Content** to save tweets, videos, notes, or links with tags.
3. 🔍 **Filter**: Use the sidebar to search or filter items by type or tag.
4. 🌓 **Theme**: Toggle light/dark mode instantly via the topbar.
5. 🔗 **Share**: Click **Share Brain** to generate a read-only public URL.


---

## 📸 Screenshots

| Authentication Page | Add New Content |
| :---: | :---: |
| ![Auth Page](screenshots/auth-page.png) | ![Add New Content](screenshots/add-new-content-from.png) |
| **Dashboard (Light Mode)** | **Dashboard (Dark Mode)** |
| ![Dashboard Light](screenshots/dashboard-light-mode.png) | ![Dashboard Dark](screenshots/dashboard-dark-mode.png) |
| **With Sample Content** | **Share Brain Dialog** |
| ![Sample Content](screenshots/dashboard-with-sample-content.png) | ![Shared Brain Link](screenshots/sharedbrain-link.png) |
| **Public Shared View** | |
| ![Public View](screenshots/public-shared-brain.png) | |

---

## 🚀 Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally

### 1. Clone the Repository
```bash
git clone https://github.com/Subhradeep-Sikder/second_brain.git
cd second_brain
```

### 2. Configure Backend
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` (or use [MongoDB Atlas](https://cloud.mongodb.com/)):
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/secondbrain
JWT_SECRET=your_jwt_secret_key
```
Start the backend server in development mode:
```bash
npm run dev
```

### 3. Configure Frontend
Open a new terminal window and navigate to the frontend directory:
```bash
cd frontend
npm install
```
Create a `.env` file inside `frontend/` and add the backend API URL:
```env
VITE_BACKEND_URL=http://localhost:3000/api/v1
```
Start the frontend development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

<p align="center">
  Built with ❤️ 
</p>
