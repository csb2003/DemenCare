Dementia Care Web Application
This is a web-based application designed to assist users in monitoring dementia-related cognitive skills through quizzes, analysis tools, and interactive features. The app provides a user-friendly interface for patients, caregivers, or medical professionals to track cognitive progress over time.

Features
User Authentication:

Signup and login functionality using MongoDB to store user credentials securely.
Interactive Games:

Includes multiple games (e.g., cognitive quizzes) to test and improve memory and analytical skills.
Cognitive Analysis:

Displays detailed analysis of quiz/game results to track progress.
Multiple Views:

Pages include:
Login
Signup
Contact
Quizzes
Analysis
Games
404 Error Page for incorrect routes.

Responsive Design:
Built to work across desktop and mobile platforms using EJS templating and static assets.

Tech Stack
Frontend: EJS templating, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Styling: Custom CSS and static assets for a polished look
Hosting: Compatible with platforms like Vercel for deployment
Installation and Setup

Prerequisites
Node.js installed on your system
MongoDB Atlas account (or local MongoDB instance)
Git for version control
Steps to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/dementia-care.git
cd dementia-care
Install dependencies:

bash
npm install
Configure MongoDB:

Replace the dbURI in app.js with your MongoDB connection string.
Start the application:

bash
npm start
Open your browser and navigate to:

arduino
http://localhost:3000
