import { ButtonConfirm } from "../button";

export default function EditWindow() {
  return (
    <form className="edit-window">
      <input type="text" placeholder="Mini input..." />
      <textarea placeholder="Textarea input..." />
      <div>
        <ButtonConfirm text="Cancel" />
        <ButtonConfirm text="Save" />
      </div>
    </form>
  );
}
