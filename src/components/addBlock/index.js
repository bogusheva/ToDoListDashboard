import { useForm } from "react-hook-form";
import { ButtonAdd } from "../button";

import postData from "../../api/postData";

export default function AddBlock() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => postData(data);
  return (
    <form className="add-block" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Title..."
          {...register("title", { required: true })}
        />
        <input
          type="text"
          placeholder="About..."
          {...register("description", { maxLength: 50 })}
        />
        {(errors.title || errors.description) && (
          <span>Title is required, description less than 50 ch. </span>
        )}
      </div>
      <ButtonAdd />
    </form>
  );
}
