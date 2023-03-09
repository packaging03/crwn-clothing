import {
  CartItemContainer,
  ImageStyle,
  ItemDetails,
  NameSpan,
} from "./cart-item.styles.jsx";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ImageStyle src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameSpan>{name}</NameSpan>
        <span className="price">
          {quantity} * ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
