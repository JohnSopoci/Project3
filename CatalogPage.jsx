import React, { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, onAddToCart }) {
  // regular js comment
  const genre = ["All", "Classical", "Rock", "Electronic", "Jazz"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  //    put a safety check - what happens if data is bad or missing
  const validAlbums = albums || [];

  const filteredAlbums =
    selectedGenre === "All"
      ? validAlbums
      : validAlbums.filter((a) => a.genre === selectedGenre);

  return (
    <div className="catalog-container">
      <header className="catalog-hero">
        <h1>Album Store</h1>
        <p>Discover your next favorite album.</p>
      </header>

      {/**this is how to comment INSIDE THE RETURN stmnt */}
      <label htmlFor="genre">Genre Filter:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genre.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <div className="album-grid">
        {filteredAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
