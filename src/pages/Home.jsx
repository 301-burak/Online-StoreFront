import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/catalog.json'

function Home({ onAddToCart }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> GOOD THINGS, MADE FOR EVERYDAY</span>
          <h1>Find your<br />everyday <span>favorite.</span></h1>
          <p>Thoughtful little things that make ordinary days feel a little more lovely.</p>
          <a className="button button-dark" href="#shop">
            Meet your next favorite <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-note">
            <span aria-hidden="true">✳</span>
            Good stuff. No fuss. Just for you.
          </div>
        </div>
        <div className="hero-art" aria-label="A colorful collection of everyday favorites">
          <span className="hero-sun" />
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
          <span className="hero-sticker">little<br />things,<br /><i>big joy</i></span>
          <span className="hero-object object-mug" role="img" aria-label="Coffee mug">☕</span>
          <span className="hero-object object-flower" role="img" aria-label="Flower">🌼</span>
          <span className="hero-object object-book" role="img" aria-label="Notebook">📔</span>
          <span className="hero-object object-candle" role="img" aria-label="Candle">🕯️</span>
          <span className="hero-doodle doodle-one" aria-hidden="true">✳</span>
          <span className="hero-doodle doodle-two" aria-hidden="true">✦</span>
        </div>
        <span className="hero-index">01 — 08 &nbsp; / &nbsp; THE LITTLE JOYS EDIT</span>
      </section>

      <section className="shop-section page-section" id="shop">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A GOOD PLACE TO START</span>
            <h2>Little things, <span>lots of joy.</span></h2>
          </div>
          <Link className="text-link" to="/about">
            Our little story <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="promise-banner">
        <span className="promise-icon" aria-hidden="true">✳</span>
        <p>Good things should feel good.<br /><span>To use, to give, and to bring home.</span></p>
        <Link to="/about" className="promise-link">Get to know us <span aria-hidden="true">→</span></Link>
      </section>
    </>
  )
}

export default Home
