import { useState } from "./react";
const  useForm = callback => {
  const [values, setValues] = useState({ keyword: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.keyword);
    callback(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export default useForm;