import { urlServer } from "./api";

export default function deleteData(id) {
  fetch(urlServer + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
