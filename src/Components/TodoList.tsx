import { TodoItem } from "../App";

const TodoList = ({
  removeTodo,
  todoList,
  toggleChecked,
}: {
  toggleChecked: (id: number) => void;
  todoList: TodoItem[];
  removeTodo: (id: number) => void;
}) => {
  return (
    <div className="TodoList">
      {todoList.map((todoItem) => (
        <div key={todoItem.id}>
          <input
            className="chcekbox"
            type="checkBox"
            id={`ckb-${todoItem.id}`}
            checked={todoItem.isChecked}
            onChange={() => toggleChecked(todoItem.id)}
          />
          <label htmlFor={`ckb-${todoItem.id}`}></label>
          <span className={todoItem.isChecked ? "ischeck" : ""}>
            {todoItem.todoTxt}
          </span>
          <button className="Remove" onClick={() => removeTodo(todoItem.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
