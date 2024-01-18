import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Estudar React", isCompleted: false },
    { id: 2, description: "Estudar Next", isCompleted: true },
    { id: 3, description: "Estudar Node", isCompleted: true },
  ]);

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
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
