# Image Gallery (React)

A responsive image gallery built with React. Each item is shown as a reusable card with an image, title, description and time, and the list can be filtered with a live search box.

**Live demo:** https://YOUR-SITE-LINK-HERE

---

## Features

- Reusable `ImageCard` component to display each item
- Image details stored in an array of objects (`imageData.js`)
- Cards rendered dynamically with `map()`
- Data passed from parent to child components using props
- Live search by title (case-insensitive)
- "No results found" message when nothing matches
- React Fragments used to avoid extra DOM elements
- Responsive layout (works on mobile, tablet and desktop)
- Hover effects, fade-in animation and gradient styling

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS3 (Flexbox, media queries, CSS variables, animations)

## Folder Structure

```
image-gallery/
├── public/
├── src/
│   ├── assets/            # one.jpg ... six.jpg
│   ├── components/
│   │   ├── ImageCard.jsx      # displays one item
│   │   ├── ImageGallery.jsx   # loops over the list with map()
│   │   └── SearchBar.jsx      # controlled search input
│   ├── data/
│   │   └── imageData.js       # array of image objects
│   ├── styles/
│   │   └── App.css            # all styling and responsive rules
│   ├── App.js                 # parent: state, filtering, layout
│   └── index.js               # entry point
├── package.json
└── README.md
```

## How It Works

```
imageData.js  →  App.js  →  ImageGallery  →  ImageCard
                   ↑  ↓
                SearchBar
```

1. `App` holds the search text (`useState`) and imports the full image list.
2. Typing in `SearchBar` updates the search text in `App`.
3. `App` filters the list by title and passes the result to `ImageGallery`.
4. `ImageGallery` uses `map()` to render one `ImageCard` per item.
5. `ImageCard` displays the image, title, description and time.

## Data Format

Each item in `src/data/imageData.js` looks like this:

```js
{
  id: 1,
  imageUrl: one,
  title: "Jessica Koel",
  description: "Hey, Joel, I here to help you out please...",
  time: "11:26"
}
```

### Adding a new image

1. Put the image file in `src/assets/`.
2. Import it at the top of `imageData.js`.
3. Add a new object to the array with a **unique `id`**.

The gallery updates automatically. No JSX changes are needed.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/suriyavr/Image-gallery.git
cd Image-gallery
npm install
```

### Run locally

```bash
npm start
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
```

The final site is created in the `build/` folder.

## Deployment

The `build/` folder can be hosted on any static host:

- **Netlify:** drag and drop the `build` folder at app.netlify.com/drop
- **Vercel:** import the GitHub repo and click Deploy
- **GitHub Pages:** use the `gh-pages` package and set `homepage` in `package.json`

## Concepts Practiced

- Components and props
- `useState` hook
- Controlled inputs
- Lifting state up
- Rendering lists with `map()` and `key`
- Conditional rendering
- Spread operator for props
- React Fragments
- Responsive CSS

## Author

**Your Name**
GitHub: https://github.com/suriyavr
