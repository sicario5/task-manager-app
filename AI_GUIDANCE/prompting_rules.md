# Prompting Rules

## Purpose

This document outlines the rules used when interacting with AI tools during the development of this project. The goal was to ensure that generated code followed clean architecture principles and industry best practices.

---

## General Prompting Strategy

Prompts were designed to be clear and specific. Instead of asking vague questions, prompts described:

- The programming language
- The framework being used
- The desired functionality
- Constraints for the solution

Example prompt structure:

"Generate a Flask REST API endpoint for creating tasks using SQLAlchemy and PostgreSQL."

---

## Constraints Applied to AI Responses

The following constraints were enforced when generating code using AI:

1. Use Python with Flask for backend development.
2. Use SQLAlchemy ORM for database interaction.
3. Avoid unnecessary external libraries.
4. Follow REST API design principles.
5. Keep code modular and readable.
6. Ensure compatibility with PostgreSQL.

---

## Code Quality Expectations

When generating code through AI, the following requirements were applied:

- Use descriptive variable names.
- Avoid deeply nested logic.
- Keep functions focused on a single responsibility.
- Maintain consistent formatting.

---

## Iterative Refinement

AI generated code was refined through multiple iterations. Each iteration involved:

1. Reviewing the generated code
2. Testing the functionality
3. Asking AI for improvements or fixes
4. Integrating the final validated code into the project

---

## Validation Process

Before accepting AI generated code:

- The code was executed locally
- API endpoints were tested using Postman
- Database queries were validated
- Frontend integration was tested

This ensured reliability and correctness of the implementation.