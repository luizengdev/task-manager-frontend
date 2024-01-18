const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Concluído" : "Não concluído"}</p>
    </>
  );
};

export default TaskItem;
