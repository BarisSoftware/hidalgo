import React from "react";

function InputCategory(props) {
  let categories = [
    "SDK",
    "IDE",
    "npm", // js
    "pip", // python
    "Científico",
    "Videojuego",
    "Editor de Código",
    "Educativo",
    "Editor Gráfico",
    "Oficina",
    "Otro",
  ];

  let i = 0;

  return (
    <div>
      <select name="category" id="category">
        {categories.map((categorie) => (
          <option value={i++}>{categorie}</option>
        ))}
      </select>
    </div>
  );
}

export default InputCategory;
