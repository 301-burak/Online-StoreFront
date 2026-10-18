import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id)

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    )
  }

  function updateQuantity(productId, change) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="The Good Goods home">
            <span className="brand-mark" aria-hidden="true">g.</span>
            <span>the good goods</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <NavLink end to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Shop
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
          </nav>

          <NavLink
            to="/cart"
            className={({ isActive }) => isActive ? 'cart-link active' : 'cart-link'}
            aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
          >
            <span className="bag-icon" aria-hidden="true">↗</span>
            <span className="cart-label">Bag</span>
            <span className="cart-count">{itemCount}</span>
          </NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                items={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" to="/">the good goods</Link>
        <span>Small joys, thoughtfully found.</span>
        <span>© 2026 The Good Goods</span>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">That’s a plot twist</span>
      <h1>We can’t find that page.</h1>
      <Link className="button button-dark" to="/">Back to the shop</Link>
    </section>
  )
}

export default App
