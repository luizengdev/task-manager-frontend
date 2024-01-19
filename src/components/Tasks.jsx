import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

import "./Tasks.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((lastTask) => (
              <TaskItem key={lastTask.id} task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem key={completedTask.id} task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
