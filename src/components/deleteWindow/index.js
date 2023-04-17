import { ButtonConfirm } from "../button";
import deleteData from "../../api/deleteData";

export default function DeleteWindow(props) {
  function handleConfirmClick() {
    deleteData(props.id);
    props.onClose(false);
  }
  function handleCancelClick() {
    props.onClose(false);
  }
  return (
    <div className="delete-window">
      <p>Delete this task?</p>
      <div className="buttons-block">
        <ButtonConfirm text="Yes" onClick={handleConfirmClick} />
        <ButtonConfirm text="No" onClick={handleCancelClick} />
      </div>
    </div>
  );
}
