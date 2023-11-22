import React from "react";

const InputTodo = ({
  text,
  onChangeInput,
}: {
  onChangeInput: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="오늘 할 일은 무엇이 있을까요?"
        onChange={onChangeInput}
        value={text}
      />
    </div>
  );
};

export default InputTodo;
