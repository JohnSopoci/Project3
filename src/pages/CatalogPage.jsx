import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, onAddToCart }) {
  // regular js comment
  const categories = ["All", "Classical", "Rock", "Electronic", "Jazz"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  //    put a safety check - what happens if data is bad or missing
  const validAlbums = albums || [];

  const filteredAlbums =
    selectedCategory === "All"
      ? validAlbums
      : validAlbums.filter((p) => p.category === selectedCategory);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1>Handcrafted Functional Stoneware</h1>
        <p>
          Sustainable ceramics shaped by hand for intentional daily rituals.
        </p>
      </header>

      {/**this is how to comment INSIDE THE RETURN stmnt */}
      <div className="filter-bar">
        {categories.map((cat) => {
          <button
            key={cat}
            className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>;
        })}
      </div>

      <div className="Album-grid">
        {filteredAlbums.map((albums) => (
          <AlbumCard key={albums.id} Album={albums} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
