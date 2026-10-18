# AI Usage Log

This log summarizes GitHub Copilot assistance used during development of the
Online StoreFront project.

## 1. React, Vite, catalog, reusable product card, and routing

**Asked:** Set up a React + Vite JavaScript storefront in the existing project,
including a product catalog, reusable product cards, and Shop, About, and Bag
navigation.

**Got:** A Vite React application with `catalog.json`, a reusable `ProductCard`,
and React Router pages for Shop, About, and Bag.

**Fixed:** Created the requested storefront in the project root and connected
the catalog-driven product grid and navigation. No unrelated projects or
backend services were added.

**Verified:** The published storefront displays eight catalog products.
Navigation between Shop, About, and Bag works at the GitHub Pages URL.

## 2. Shopping cart with React state

**Asked:** Add a working cart with Add and Remove actions, an item count, and a
correct total price.

**Got:** Shared cart state managed with React `useState`, with product
quantities, a navigation count, and a calculated cart total.

**Fixed:** Connected product-card Add actions and cart-page Remove and quantity
controls to immutable state updates.

**Verified:** Added a Pocket Picnic Tote priced at $28 and a Little Moments
Journal priced at $18. The cart showed both products, a count of 2, and the
correct total of $46.

## 3. Shopping-cart testing and debugging

**Asked:** Inspect and verify the Add-to-Cart, cart count, product display,
total, Remove, and empty-cart behavior.

**Got:** Browser checks of cart updates and feedback, removal, totals, and the
empty-cart conditional rendering.

**Fixed:** Made a successful Add click show brief “Added!” feedback, and used
the requested “Your cart is empty” heading when no products remain.

**Verified:** Removing the $28 tote changed the count to 1 and the total to
$18. Removing the remaining $18 journal changed the count to 0 and displayed
“Your cart is empty.”

## 4. GitHub Actions and GitHub Pages deployment

**Asked:** Configure automatic deployment from the `main` branch to GitHub
Pages at the repository URL.

**Got:** A Vite base path for `/Online-StoreFront/` and a GitHub Actions
workflow using the official Pages configure, artifact-upload, and deploy
actions.

**Fixed:** Set the React Router basename from Vite’s configured base so assets
and client-side navigation work under the GitHub Pages project path.

**Verified:** The published site at
[https://301-burak.github.io/Online-StoreFront/](https://301-burak.github.io/Online-StoreFront/)
loads successfully. Browser checks confirmed navigation, cart operations, and
the $46 total on the published site. No JavaScript console errors were
reported.
