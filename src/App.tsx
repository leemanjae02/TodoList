import React, { useState } from "react";
import "./App.css";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";
import Tasks from "./Components/Tasks";

export type TodoItem = {
  id: number;
  todoTxt: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text === "") {
      alert("등록할 일정을 입력해주세요.");
    } else if (
      todoList.some((todoItem) => todoItem.todoTxt.trim() === text.trim())
    ) {
      alert("이미 등록된 일정입니다.");
      setText("");
    } else {
      const nextTodoList = [
        ...todoList,
        { id: todoList.length, todoTxt: text, isChecked: false },
      ];
      setText("");
      setTodoList(nextTodoList);
    }
  };

  const toggleChecked = (id: number) => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isChecked: !todoItem.isChecked }
          : todoItem
      )
    );
  };

  const tasks = () => {
    if (todoList.some((todoItem) => todoItem.isChecked === true)) {
      return todoList.filter((todoItem) => todoItem.isChecked === false).length;
    } else {
      return todoList.length;
    }
  };

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();
  const day: number = today.getDay();
  const week: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div id="root">
      <div className="Container">
        <p className="Title">
          TodoList&nbsp;
          <p className="Date">
            {year}년 {month}월 {date}일 {week[day]}
          </p>
        </p>
        <InputTodo onChangeInput={onChangeInput} text={text}></InputTodo>
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          toggleChecked={toggleChecked}
        ></TodoList>
        <Tasks addTodo={addTodo} tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
