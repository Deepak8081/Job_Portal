# 💼 HireHub — Full-Stack MERN Job Recruitment & Career Portal

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A production-ready, responsive **Job Portal Web Application** built with the **MERN Stack** that bridges candidates (Job Seekers / Students) with hiring organizations (Recruiters & Employers). Features dual-role authentication, instant job applications, recruiter candidate dashboards, resume management, and multi-parameter job search filters.

---

## 🚀 Key Features

### 👨‍🎓 Job Seeker / Candidate
- **Secure Authentication**: JWT-powered registration and login with encrypted passwords.
- **Dynamic Profile Management**: Showcase education, key technical competencies, portfolio links, and uploaded resumes.
- **Smart Job Search & Filters**: Search jobs by role title, remote/onsite preference, location, salary tier, and contract type (Full-Time, Part-Time, Internship).
- **One-Click Application**: Apply with tailored cover notes and stored resumes.
- **Application Tracking**: Monitor application pipeline status (`Applied`, `Reviewed`, `Shortlisted`, `Rejected`).

### 🏢 Recruiter & Company Dashboard
- **Company Branding Profile**: Manage corporate bio, logo, website, and industry focus.
- **Job Creation & Publishing**: Post vacancies with required qualifications, compensation ranges, and deadline schedules.
- **Applicant Tracking System (ATS)**: Filter applicants, view candidate profiles, download resumes, and update application stages.
- **Analytics Overview**: Real-time counter of active listings, total applications received, and shortlisted candidates.

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router DOM, React Hook Form, Axios, React Icons
- **Backend**: Node.js, Express.js, JSON Web Tokens (JWT), Bcrypt.js, Cors, Multer
- **Database**: MongoDB & Mongoose ODM

---

## 📂 Project Structure

```
Job_Portal/
└── jobPortal/
    ├── client/                 # React frontend application
    │   ├── src/
    │   │   ├── components/     # Navbar, JobCards, FilterBar, Footer
    │   │   ├── pages/          # Home, Jobs, JobDetail, Profile, RecruiterDashboard
    │   │   └── App.jsx
    │   └── package.json
    └── server/                 # Express backend REST API
        ├── controllers/        # Auth, Job, and Application logic
        ├── models/             # User, Job, and Company Mongoose schemas
        ├── routes/             # API route endpoints
        ├── middlewares/        # JWT auth verification middleware
        ├── server.js           # Server bootstrap
        └── package.json
```

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd jobPortal/server
npm install
```
Create `.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
Start backend:
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd ../client
npm install
npm run dev
# Open http://localhost:5173
```

---

## 👨‍💻 Author
**Deepak Raj** — [GitHub (@Deepak8081)](https://github.com/Deepak8081) | deepakraj9454979020@gmail.com
