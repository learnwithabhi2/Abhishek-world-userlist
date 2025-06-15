🔹 Project Description 🔹:
Project Name: Abhishek World — A Simple User Information Capture Application

Description:
Abhishek World is a simple full-stack web application designed to collect and store user information. This application allows users to submit their name (required), phone number, age, and biodata through a form on a webpage. All the submissions are then safely stored in a database (using SQLite) and displayed on another page in a tabular format.

Features:
✅ Simple form submission: Capture a user's name, number, age, and biodata.
✅ Data persistence: Stores all submissions in a SQLite database.
✅ User-friendly UI: An easy-to-understand and lightweight UI with a welcoming header.
✅ View all users: Displays a table of all the submitted information.
✅ Full-stack implementation: Built with Node.js, Express, and EJS.

Technology Stack:

Frontend: HTML, CSS, EJS (for server-side rendered views)

Backend: Node.js with Express framework

Database: SQLite (lightweight, file-based)

Other: Express’ urlencoded middleware for form submission parsing

Application Flow:

The application starts with a welcome page featuring a form.

The user enters their details and clicks “Add User.”

The server saves this information into the SQLite database.

The user is redirected to a list view (/users) where all submissions are displayed in a table format.

All the data is persistent and can be accessed at any time by visiting the users’ page.

Possible Enhancement Ideas (Future Improvement):

Implement authentication (login and password) for adding users.

Implement pagination for large number of users.

Provide API endpoints to retrieve data in JSON format.

Integrate with a more robust database (like MySQL or PostgreSQL) for large-scale applications.
