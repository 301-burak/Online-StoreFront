import { Component } from 'react'

class ProductGridErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('The product grid could not be rendered.', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="product-grid-error" role="alert">
          <h3>We couldn’t load these products.</h3>
          <p>Please refresh the page or try again in a little while.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ProductGridErrorBoundary
