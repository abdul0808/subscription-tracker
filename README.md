# Subscription Tracker API

A backend API to track and manage your subscriptions with automatic email reminders before due dates. Built using **Node.js**, **Express**, **MongoDB**, and **Upstash Scheduler**.

## 🧠 Features

- Add, update, delete subscriptions
- Automatic reminders sent before subscription due dates (7, 5, 2, 1 days)
- Day.js for date handling
- RESTful API design
- MongoDB for persistent storage

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Day.js**
- **Upstash Scheduler** (for cron-style reminders)
- **dotenv** for environment variables

## 📁 Project Structure

subscription-tracker/
│
├── controllers/ # Business logic for API routes
├── models/ # Mongoose models
├── routes/ # API endpoints
├── services/ # External services like email/reminder logic
├── utils/ # Utility functions
├── workflows/ # Scheduled jobs via Upstash
│
├── .env # Environment variables (add your keys here)
├── app.js # Entry point for Express app
└── README.md


## 🚀 Getting Started

### ✅ **Prerequisites**

- Node.js >= 18
- MongoDB URI (local or Atlas)
- Upstash credentials (for scheduling)
- Email service credentials (for reminders)

### ⚙️ Installation

```bash
git clone https://github.com/abdul0808/subscription-tracker.git
cd subscription-tracker
npm install

```
🛠️ Environment Setup
Create a .env file in the root and add:

```PORT=5000
MONGO_URI=your_mongodb_uri
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

▶️ Run the Server
npm run dev
