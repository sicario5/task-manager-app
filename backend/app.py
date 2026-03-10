from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from models import db, Task

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)

with app.app_context():
    db.create_all()

# Create Task
@app.route("/tasks", methods=["POST"])
def create_task():

    data = request.json

    task = Task(
        title=data["title"],
        description=data["description"],
        priority=data["priority"],
        status="Pending"
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({"message": "Task created"})


# Get All Tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():

    tasks = Task.query.all()

    return jsonify([task.to_dict() for task in tasks])


# Update Task
@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):

    task = Task.query.get(id)

    data = request.json

    task.status = data["status"]

    db.session.commit()

    return jsonify({"message": "Task updated"})


# Delete Task
@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):

    task = Task.query.get(id)

    db.session.delete(task)

    db.session.commit()

    return jsonify({"message": "Task deleted"})


if __name__ == "__main__":
    app.run(debug=True)