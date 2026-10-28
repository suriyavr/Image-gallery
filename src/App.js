import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import images from "./data/imageData";
import "./styles/App.css";

function App() {
  const [query, setQuery] = useState("");

  const filtered = images.filter((img) =>
    img.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <main className="gallery">
        <SearchBar query={query} onChange={setQuery} />
        <ImageGallery images={filtered} />
      </main>
    </>
  );
}

export default App;