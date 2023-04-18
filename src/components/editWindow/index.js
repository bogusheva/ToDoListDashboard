import { ButtonConfirm } from "../button";
import editData from "../../api/editData";
import { useForm } from "react-hook-form";

export default function EditWindow(props) {
  const { register, handleSubmit } = useForm();

  function handleConfirmClick(data) {
    editData(props.id, data);
    props.onClose(false);
  }
  function handleCancelClick() {
    props.onClose(false);
  }
  return (
    <form className="edit-window" onSubmit={handleSubmit(handleConfirmClick)}>
      <input
        type="text"
        defaultValue={props.title}
        {...register("title", { required: true })}
      />
      <input
        type="text"
        defaultValue={props.description}
        {...register("description", { maxLength: 50 })}
      />
      <div>
        <ButtonConfirm text="Cancel" onClick={handleCancelClick} />
        <ButtonConfirm text="Save" type="submit" />
      </div>
    </form>
  );
}
