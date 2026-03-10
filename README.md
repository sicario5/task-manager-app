# Task Manager Application

## Overview

This project is a simple full-stack task management application built using **Flask (Python)** for the backend, **React** for the frontend, and **PostgreSQL** as the relational database.

The application allows users to create, view, update, and delete tasks through a RESTful API and a web interface.

The goal of the project is to demonstrate core full-stack development concepts including API design, database integration, and frontend-backend communication.

---

# Tech Stack

## Backend
- Python
- Flask
- Flask-SQLAlchemy
- Flask-CORS

## Frontend
- React
- Axios

## Database
- PostgreSQL

---

# System Architecture

The application follows a **client-server architecture**.
React Frontend
│
│ HTTP Requests (Axios)
▼
Flask REST API
│
│ SQLAlchemy ORM
▼
PostgreSQL Database


---

# Features

- Create tasks
- View all tasks
- Update task status
- Delete tasks
- REST API integration
- PostgreSQL persistent storage

---

# Database Design

Table: **tasks**

| Column | Type | Description |
|------|------|-------------|
| id | Integer | Primary key |
| title | String | Task title |
| description | Text | Task details |
| priority | String | Task priority |
| status | String | Task status |

---

# API Endpoints

### Create Task

POST /tasks

Example request:

```json
{
"title": "Complete project",
"description": "Finish assessment project",
"priority": "High"
}

GET /tasks
Returns list of all tasks.

PUT /tasks/{id}

{
"status": "Completed"
}

DELETE /tasks/{id}
Deletes the selected task.

Running the Project
Backend Setup

cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py

Backend runs on:
http://localhost:5000

Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

Technical Decisions
Flask for Backend

Flask was chosen because it is lightweight and well suited for building REST APIs quickly.

SQLAlchemy ORM

SQLAlchemy simplifies database interactions and prevents writing raw SQL queries, improving maintainability and security.

React Frontend

React enables modular UI development and efficient state management through hooks.

Axios for API Calls

Axios was used to handle HTTP communication between React and the Flask backend.

AI Usage

AI tools were used during development for:

generating initial project scaffolding

suggesting API structure

debugging environment setup issues

improving documentation

All generated code was reviewed and modified to ensure correctness and adherence to project requirements.

Risks and Limitations

No authentication system implemented

Limited input validation

Minimal error handling

No production deployment configuration

Future Improvements

Possible extensions include:

User authentication and authorization

Task filtering and search functionality

Pagination for large task lists

Docker containerization

CI/CD pipeline integration

Role-based access control

Repository Structure
task-manager-app
│
├── backend
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   └── requirements.txt
│
├── frontend
│   └── React application
│
├── AI_GUIDANCE
│   ├── agents.md
│   ├── prompting_rules.md
│   └── coding_standards.md
│
├── architecture.md
└── README.md

Walkthrough Video

A walkthrough video demonstrating the architecture, technical decisions, and application functionality is included with the submission.