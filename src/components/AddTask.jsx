import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error(
          "A tarefa precisa de uma descrição para ser adicionada!"
        );
      }

      await axios.post("http://localhost:3000/tasks", {
        description: task,
        isCompleted: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa ..."
        value={task}
        onChange={onChange}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={12} color="#000000" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
