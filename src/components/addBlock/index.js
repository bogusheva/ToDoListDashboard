import { ButtonAdd } from "../button";

export default function AddBlock() {
  return (
    <form className="add-block">
      <div>
        <input type="text" placeholder="Title..." />
        <input type="text" placeholder="About..." />
      </div>
      <ButtonAdd />
    </form>
  );
}
