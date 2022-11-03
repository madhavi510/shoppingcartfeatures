// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = 0
      const totalPrice = cartList.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        total,
      )

      return (
        <>
          <div className="CartSummery-container">
            <h1 className="price">
              <span className="total-price">Order Total: </span>
              RS {totalPrice}
            </h1>

            <p className="cart-items"> {cartList.length} Items in a Cart</p>
            <button className="continue-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummery
