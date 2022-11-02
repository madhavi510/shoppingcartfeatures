import Header from '../Header'
import CartListView from '../CartListView'
import CartSummery from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemovell = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="removeAll-btn"
                  type="button"
                  onClick={onClickRemovell}
                  testid="remove"
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummery />
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart