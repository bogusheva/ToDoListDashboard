import { ButtonConfirm } from "../button";

export default function DeleteWindow() {
  return (
    <div className="delete-window">
      <p>Delete this task?</p>
      <div className="buttons-block">
        <ButtonConfirm text="Yes" />
        <ButtonConfirm text="No" />
      </div>
    </div>
  );
}
