import ToDoItem from "../toDoItem";

export default function ToDoList({ data }) {
  return (
    <ul className="todo-block">
      {data.map((item) => (
        <li key={item.id}>
          <ToDoItem title={item.title} description={item.description} />
        </li>
      ))}
    </ul>
  );
}
