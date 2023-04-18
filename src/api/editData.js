import { urlServer } from "./api";

export default function editData(id, data) {
  fetch(`${urlServer}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.error(error));
}
