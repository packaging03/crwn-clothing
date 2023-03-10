import "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Footer, Name, Price, ProductCartContainer } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
     <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
