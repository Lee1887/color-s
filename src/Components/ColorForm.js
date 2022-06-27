import "./ColorForm.css";
import { useState } from "react";
export const ColorForm = ({ onSubmit }) => {
  const [code, setCode] = useState("#000000");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(code);
  };
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input type="color" value={code} onChange={handleChange} />
      <input type="text" value={code} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};
