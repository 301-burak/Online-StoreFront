import { useEffect, useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (!isAdded) return undefined

    const timeoutId = window.setTimeout(() => setIsAdded(false), 1200)
    return () => window.clearTimeout(timeoutId)
  }, [isAdded])

  function handleAddToCart() {
    onAddToCart(product)
    setIsAdded(true)
  }

  return (
    <article className="product-card">
      <div className={`product-art art-${product.color}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-emoji" role="img" aria-label={product.name}>
          {product.emoji}
        </span>
        <span className="art-sparkle sparkle-one" aria-hidden="true">✳</span>
        <span className="art-sparkle sparkle-two" aria-hidden="true">✦</span>
      </div>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-card-bottom">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className={isAdded ? 'add-button added' : 'add-button'}
            type="button"
            onClick={handleAddToCart}
            aria-label={
              isAdded
                ? `${product.name} added to cart`
                : `Add ${product.name} to cart`
            }
          >
            <span aria-hidden="true">{isAdded ? '✓' : '+'}</span>
            {isAdded ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
