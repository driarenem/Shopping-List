import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(``);
  const [quantity, setQuantity] = useState(1);

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, inCart: false, id: Date.now() };

    onAddItems(newItem);

    setDescription(``);
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="app__form" action="">
      <p>What's your shopping list?</p>
      <select
        className="form__quantity"
        value={quantity}
        onChange={handleQuantity}
        name=""
        id=""
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={handleDescription}
        placeholder="Item..."
        value={description}
        className="form__description"
      />
      <button className="form__btn" type="submit">
        Add Item
      </button>
    </form>
  );
}
