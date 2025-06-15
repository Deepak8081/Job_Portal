# 💼 Job Portal Web Application

A **modern and responsive job portal** built using the **MERN stack** that connects **Students** (Job Seekers) and **Recruiters** (Job Providers). The application supports role-based login, allowing students to search and apply for jobs while enabling recruiters to post job openings and manage applicants effectively.

> 🔐 **Role-Based Authentication** – Two distinct user roles: `Student` and `Recruiter`  
> ⚙️ Built with **MongoDB, Express.js, React.js, and Node.js**

---

## 🚀 Features

### 👨‍🎓 Student (Job Seeker)

Students can:

- 🔐 **Register and login** with email and password using secure JWT-based authentication.
- 📝 **Complete and update their profile**, including education, skills, and resume.
- 🔍 **Browse and search job listings** with filters such as role, location, job type (full-time, part-time, internship), etc.
- 📄 **View detailed job information** before applying.
- 📨 **Apply for jobs** with one click, attaching their resume and profile.
- 📋 **View list of jobs they’ve applied for** with status updates.

### 🏢 Recruiter

Recruiters can:

- 🔐 **Register and login** to access their dashboard.
- 🏢 **Create and manage their company profile** with relevant information.
- ➕ **Post new job listings** with detailed descriptions, role requirements, location, salary, etc.
- 📈 **View and manage all posted jobs**, including the number of applications.
- 👤 **Access a list of applicants** for each job.
- 📥 **Download resumes** and **view student profiles**.
- 📧 **Contact students directly** (optional feature via email integration).

---

## 🛠 Tech Stack

This project leverages the power of the **MERN stack** for full-stack development:

### 🔹 Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – For fast, responsive, and modern styling
- **React Router DOM** – Client-side routing for different pages
- **React Hook Form** – For handling forms and validation
- **Axios** – For making HTTP requests to the backend

### 🔹 Backend
- **Node.js** – JavaScript runtime for the backend
- **Express.js** – Web framework for building REST APIs
- **Mongoose** – ODM for interacting with MongoDB database
- **JWT (jsonwebtoken)** – For user authentication and route protection
- **Bcrypt.js** – For securely hashing passwords

### 🔹 Database
- **MongoDB** – NoSQL database for storing user profiles, job listings, and applications

