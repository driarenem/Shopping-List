import { useState } from "react";
import Item from "./Item";

export default function ShoppingList({
  items,
  onDeleteItems,
  onToogleInCart,
  onReset,
}) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;

  if (sortby === `input`) sortedItems = items;

  if (sortby === `description`)
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === `inCart`)
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.inCart) - Number(b.inCart));

  function handleSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="app__list">
      <ul className="list__container">
        {sortedItems.map((item) => (
          <Item
            onToogleInCart={onToogleInCart}
            onDeleteItems={onDeleteItems}
            itemObj={item}
            onReset={onReset}
            key={item.id}
          />
        ))}
      </ul>
      {items.length > 0 ? (
        <div className="div__btn__container ">
          <select
            value={sortby}
            onChange={handleSortBy}
            className="list__btn btn__sort"
            type="button"
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="inCart">Sort by in cart status</option>
          </select>

          <button
            onClick={onReset}
            className="list__btn btn__reset"
            type="button"
          >
            Clear the list
          </button>
        </div>
      ) : null}
    </div>
  );
}
