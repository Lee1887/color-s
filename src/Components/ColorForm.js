import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm({ onSubmit }) {
  const [colorCode, setColorCode] = useState("#CCCCCC");
  return (
    <form
      action=""
      className="color-form"
      style={{ backgroundColor: colorCode }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(colorCode);
      }}
    >
      <input
        type="color"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value.toUpperCase());
        }}
      />
      <input
        type="text"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value.toUpperCase());
        }}
      />
      <button>Create</button>
    </form>
  );
}
