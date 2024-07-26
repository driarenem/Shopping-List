export default function Item({
  itemObj,
  onDeleteItems,
  onToogleInCart,
  onReset,
}) {
  return (
    <>
      <li className="list__item">
        <input
          className="item__checkbox"
          type="checkbox"
          value={itemObj.inCart}
          onChange={() => onToogleInCart(itemObj.id)}
        />
        <span
          style={itemObj.inCart ? { textDecoration: `line-through` } : {}}
          className="item__span"
        >
          {itemObj.quantity} {itemObj.description}
        </span>
        <button
          onClick={() => onDeleteItems(itemObj.id)}
          className="item__delete"
          type="button"
        >
          ❌
        </button>
      </li>
    </>
  );
}
