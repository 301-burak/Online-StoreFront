# The Good Goods — Online Storefront

A responsive product storefront built with React, Vite, JavaScript, and React Router. The shopping cart uses React state and stays available while navigating between pages.

## Requirements

- Node.js 20 or newer
- npm

## Get started

Open a terminal in this folder and run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`) in your browser. To make a production build, run `npm run build`; to preview that build, run `npm run preview`.

## Try the storefront

1. Browse the eight products on the Shop page and select **Add** on a product.
2. Check that the bag count in the navigation increases.
3. Open **Bag** to see quantities, use **+** or **−** to update them, or select **Remove** to remove a product.
4. Check that the subtotal and total update, and remove all products to see the empty-bag message.
5. Visit **About** and use the navigation to return to the shop.

## Project files

- `index.html`, `vite.config.js`, and `package.json` configure the Vite application and npm scripts.
- `src/main.jsx` mounts React and enables browser routing.
- `src/App.jsx` defines the routes and shared cart state.
- `src/data/catalog.json` contains the eight sample products.
- `src/components/ProductCard.jsx` is the reusable product card used by the shop.
- `src/pages/Home.jsx`, `src/pages/Cart.jsx`, and `src/pages/About.jsx` implement the three pages.
- `src/index.css` and `src/App.css` provide the responsive storefront styling.
