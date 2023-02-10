// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const { cartCount } = useContext(CartContext);

    const handleCart = () => {
        setIsCartOpen(!isCartOpen)
    }
  return (
    <CartIconContainer onClick={handleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
