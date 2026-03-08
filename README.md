# Gym Management System (MERN Stack)

A modern, responsive, and robust full-stack Gym Management System built with the MERN (MongoDB, Express, React, Node.js) stack. This application allows gym owners and administrators to efficiently manage their gym members, track fitness goals, assign workouts, and handle membership plans seamlessly.

---

## 🚀 Features

- **Member Management**: Add, view, edit, and delete gym members.
- **Fitness Tracking**: Track members' initial and current weights, and monitor if they have achieved their fitness goals.
- **Workout Split Assignments**: Categorize members by their workout routines (e.g., Beginner, Intermediate, Calisthenics).
- **Membership Plans**: Pre-configured monthly, quarterly (6 months), and yearly plans with auto-select integration during registration.
- **Advanced Filtering & Search**: Easily search for members by name, or filter them by fitness goal achievement, membership plan, and workout split.
- **Modern User Interface**: A beautifully styled, highly responsive UI built using Tailwind CSS and DaisyUI components, featuring a dark fitness theme, micro-animations, and dynamic data tables.

---

## 🛠️ Technology Stack

**Frontend:**
- **React.js** (v19) with Vite
- **React Router Dom** for navigation
- **Tailwind CSS** & **DaisyUI** for styling and UI components
- **Axios** for API requests

**Backend:**
- **Node.js** & **Express.js** for RESTful API routing
- **MongoDB** & **Mongoose** for database and schema modeling
- **dotenv** for environment variable management
- **Cors** for cross-origin resource sharing

---

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: Installed (v18 or higher recommended).
- **MongoDB**: Access to a MongoDB database (locally installed MongoDB Compass or a cloud MongoDB Atlas cluster).

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Backend Setup:**
   Navigate into the backend folder, install dependencies, and configure the environment variables.
   ```bash
   cd backend
   npm install
   ```
   **Create a `.env` file** in the `backend` directory and add the following details:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string_here
   ```
   *Start the backend development server:*
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal tab, navigate to the frontend folder, and install dependencies.
   ```bash
   cd frontend
   npm install
   ```
   *Start the frontend development server:*
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:5173` (or the port Vite provides) to start using the system. The server will run on `http://localhost:5000`.

---

## 📂 Project Structure

- `/backend/src/models`: Mongoose schemas defining the data structure (`memberModel.js`).
- `/backend/src/controller`: Logic functions for processing API requests to manage members.
- `/frontend/src/pages`: Key views like `MembersList.jsx`, `CreateMember.jsx`, `EditMember.jsx`, and `MembershipPlans.jsx`.
- `/frontend/src/components`: UI components like Navbars, Spinners, Theme Controllers.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
