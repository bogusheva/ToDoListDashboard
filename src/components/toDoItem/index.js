import { useState } from "react";
import { ButtonDelete, ButtonEdit } from "../button";

export default function ToDoItem(props) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function openDeleteWindow() {
    setIsOpenDelete(true);
  }

  function closeDeleteWindow() {
    setIsOpenDelete(false);
  }

  function openEditWindow() {
    setIsOpenEdit(true);
  }

  function closeEditWindow() {
    setIsOpenEdit(false);
  }

  return (
    <div className="todo-item">
      <div className="text-block">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <ButtonEdit
        id={props.id}
        isOpen={isOpenEdit}
        onClick={openEditWindow}
        onClose={closeEditWindow}
        title={props.title}
        description={props.description}
      />
      <ButtonDelete
        id={props.id}
        isOpen={isOpenDelete}
        onClick={openDeleteWindow}
        onClose={closeDeleteWindow}
      />
    </div>
  );
}
