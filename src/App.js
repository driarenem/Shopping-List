import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: `apples`, quantity: 5, inCart: false },
//   { id: 2, description: `milk`, quantity: 4, inCart: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleInCart(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, inCart: !item.inCart } : item
      )
    );
  }

  function handleReset(e) {
    e.preventDefault();
    const confirm = window.confirm(`Are you sure you want to delete the list?`);

    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <ShoppingList
        onToogleInCart={handleToogleInCart}
        onDeleteItems={handleDeleteItems}
        onReset={handleReset}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
