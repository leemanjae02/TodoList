import React from "react";

const Tasks = ({
  tasks,
  addTodo,
}: {
  tasks: () => React.ReactNode;
  addTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="bottom">
      <div className="leavings-todo"> {tasks()} TASKS</div>
      <div className="add-btn">
        <button onClick={addTodo}>ADD NEW +</button>
      </div>
    </div>
  );
};

export default Tasks;
