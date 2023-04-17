import DeleteWindow from "../deleteWindow";
import EditWindow from "../editWindow";

export function ButtonConfirm(props) {
  return <button className="btn-confirm btn">{props.text}</button>;
}

export function ButtonAdd() {
  return (
    <>
      <button className="btn-add btn">
        <img src="plus.svg" alt="add sign" />
      </button>
    </>
  );
}

export function ButtonDelete(props) {
  return (
    <>
      {" "}
      <button className="btn-delete btn" onClick={props.onClick}>
        <img src="delete.svg" alt="delete sign" />
      </button>
      {props.isOpen && <DeleteWindow isOpen={props.isOpen} />}
    </>
  );
}

export function ButtonEdit(props) {
  return (
    <>
      <button className="btn-edit btn" onClick={props.onClick}>
        <img src="edit.svg" alt="edit sign" />
      </button>
      {props.isOpen && <EditWindow isOpen={props.isOpen} />}
    </>
  );
}
