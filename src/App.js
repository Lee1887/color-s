import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ColorBox } from "./Components/ColorBox";
import { ColorForm } from "./Components/ColorForm";

function App() {
  const [colors, setColors] = useState([]);

  const handleAddColor = (code) => {
    setColors([{ id: nanoid(), code }, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const handleChangeColor = (id, code) => {
    setColors(
      colors.map((color) => {
        return {
          ...color,
          code: color.id === id ? code : color.code,
        };
      })
    );
  };

  return (
    <div className="App">
      <h1>Color Saver Step 7</h1>
      <ColorForm onSubmit={handleAddColor} />
      <div className="card-grid">
        {colors.map((color) => {
          return (
            <ColorBox
              color={color.code}
              key={color.id}
              onDelete={() => {
                handleDeleteColor(color.id);
              }}
              onChange={(code) => {
                handleChangeColor(color.id, code);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
