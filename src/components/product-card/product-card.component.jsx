import { useContext } from 'react'
import './product-card.styles.scss'

import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({product}) => {
    const {id, name, imageUrl, price} = product
    const { addItemToCart } = useContext(CartContext);

    const addproductToCart = () => addItemToCart(product)

    return (
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{`$${price}`}</span>
        </div>
        <Button buttonType="inverted" onClick={addproductToCart}>
          Add to card
        </Button>
      </div>
    );
}

export default ProductCard