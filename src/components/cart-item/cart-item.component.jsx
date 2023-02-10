
import { CartItemContainer, Image, ItemDetails } from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
      <CartItemContainer>
        <Image src={imageUrl} alt={`&{name}`} />
        <ItemDetails className="item-details">
          <h1 className="name">{name}</h1>
          <span className="price">
            {quantity} x ${price}
          </span>
        </ItemDetails>
      </CartItemContainer>
    );
}

export default CartItem