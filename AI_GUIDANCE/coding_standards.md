# Coding Standards

This document defines the coding standards followed during development of the Task Manager application.

---

# Backend Standards

## Python Style

The backend follows Python's PEP8 coding style guidelines.

Key practices include:

- Meaningful variable and function names
- Consistent indentation (4 spaces)
- Logical grouping of imports
- Avoiding unnecessary complexity

Example:

```python
def create_task():
    data = request.json
    task = Task(
        title=data["title"],
        description=data["description"],
        priority=data["priority"],
        status="Pending"
    )