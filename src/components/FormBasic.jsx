import React from "react";
import useForm from "../hooks/useForm";

const FormBasic = () => {
  const initialState = { email: "", password: "" };
  const [values, setValues] = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email</label>
      <input type="email" name="email" onChange={setValues} />
      <label htmlFor="">Password</label>
      <input type="password" name="password" onChange={setValues} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBasic;
