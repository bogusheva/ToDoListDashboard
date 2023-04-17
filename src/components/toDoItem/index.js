import { useState } from "react";
import { ButtonDelete, ButtonEdit } from "../button";

export default function ToDoItem(props) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function openDeleteWindow() {
    setIsOpenDelete(true);
  }
  function openEditWindow() {
    setIsOpenEdit(true);
  }

  return (
    <div className="todo-item">
      <div className="text-block">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <ButtonEdit onClick={openEditWindow} isOpen={isOpenEdit} />
      <ButtonDelete onClick={openDeleteWindow} isOpen={isOpenDelete} />
    </div>
  );
}
