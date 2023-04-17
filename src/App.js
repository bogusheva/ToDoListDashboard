import useFetch from "react-fetch-hook";

import AddBlock from "./components/addBlock";
import EmptyList from "./components/emptyList";
import ToDoList from "./components/toDoList";

export default function App() {
  const { isLoading, error, data } = useFetch("http://localhost:3000/toDoList");

  if (error) {
    console.log(error);
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="body-container">
      <h1>TODO-LIST</h1>
      <div className="main-page">
        <AddBlock />
        {data.length > 0 ? <ToDoList data={data} /> : <EmptyList />}
      </div>
    </div>
  );
}
