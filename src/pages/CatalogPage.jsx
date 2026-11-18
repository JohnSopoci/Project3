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
      : validAlbums.filter((a) => a.category === selectedCategory);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1>Album Store</h1>
        <p>Discover your next favorite album.</p>
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

      <div className="album-grid">
        {filteredAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
