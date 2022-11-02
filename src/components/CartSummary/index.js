// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      const total = 0
      const totalPrice = cartList.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        total,
      )

      return (
        <>
          <div className="CartSummery-container">
            <div className="price">
              <h1 className="total-price">Order Total</h1>
              <h1 className="cart-item-price">{totalPrice}</h1>
            </div>

            <p className="cart-items"> {cartLength}items in a Cart</p>
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
