export default function Stats({ items }) {
  if (!items.length)
    return (
      <>
        <footer className="app__stats">
          <span>Start adding some items to your shopping list.</span>
          <p>- Rodrigo Arellano &copy; -</p>
        </footer>
      </>
    );

  const numItems = items.length;
  const itemsInCart = items.filter((item) => item.inCart).length;
  const percentageInCart = Math.round((itemsInCart / numItems) * 100);

  return (
    <footer className="app__stats">
      <span>
        {percentageInCart === 100
          ? `You got everything in the cart. Ready to go 😁`
          : `You have (${numItems}) items on your list. You already
          placed (${itemsInCart}) items in your cart 🛒(${percentageInCart}%)`}
      </span>
      <p>- Rodrigo Arellano &copy; -</p>
    </footer>
  );
}
