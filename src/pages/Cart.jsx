import { Link } from 'react-router-dom'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function Cart({ items, onRemove, onUpdateQuantity }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <section className="cart-page page-section">
      <span className="eyebrow">YOUR LITTLE LINEUP</span>
      <div className="cart-heading">
        <h1>Your bag<span>.</span></h1>
        <span className="cart-item-total">
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">♡</span>
          <h2>Your cart is empty</h2>
          <p>It’s looking a little empty in here. Let’s find something lovely for it.</p>
          <Link className="button button-dark" to="/">Find a little something</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className={`cart-item-art art-${item.color}`}>
                  <span role="img" aria-label={item.name}>{item.emoji}</span>
                </div>
                <div className="cart-item-info">
                  <p className="product-category">{item.category}</p>
                  <h2>{item.name}</h2>
                  <span className="cart-unit-price">{currency.format(item.price)}</span>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >−</button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >+</button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>{currency.format(item.price * item.quantity)}</strong>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
            <Link className="text-link continue-shopping" to="/">← Keep browsing</Link>
          </div>

          <aside className="order-summary">
            <span className="eyebrow">THE LITTLE DETAILS</span>
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{currency.format(total)}</span>
            </div>
            <div className="summary-row summary-shipping">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row summary-total">
              <strong>Total</strong>
              <strong>{currency.format(total)}</strong>
            </div>
            <button className="button button-dark checkout-button" type="button">
              Ready when you are <span aria-hidden="true">→</span>
            </button>
            <p className="checkout-note">Just browsing? Your bag will be right here.</p>
          </aside>
        </div>
      )}
    </section>
  )
}

export default Cart
