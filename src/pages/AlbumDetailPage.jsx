import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AlbumDetailPage = ({ albums, onAddToCart }) => {
  // create the state of the component
  const { albumId } = useParams();
  const [qty, setQty] = useState(1);

  //   which Album to display on this page?
  const album = albums.find((a) => a.id === albumId);

  //   sanity check: if Album is missing?
  if (!album) {
    return (
      <div className="detail-error">
        <h2>Album Not Found</h2>
        <Link className="btn btn-secondary" to="/">
          Return To Main Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <nav className="breadcrumb">
        <Link to="/">Catalog</Link> &gt; <span>{album.title}</span>
      </nav>

      <div className="detail-grid">
        <img src={album.image} alt={album.title} className="album-img" />

        <div className="detail-info">
          <span className="detail-genre">{album.genre}</span>
          <h1 className="detail-title">{album.title}</h1>
          <p className="detail-artist">{album.artist}</p>
          <p className="detail-specs">
            "specs:"
            <h2 className="detail-catalognum">{album.catalogNumber}</h2>
            <h2 className="detail-weight">{album.weight}</h2>
            <h2 className="detail-speed">{album.speed}</h2>
            <h2 className="detail-label">{album.label}</h2>
          </p>
          <p className="detail-tracklist">{album.tracklist}</p>
          <p className="detail-price">{album.price.toFixed(2)}</p>
          <p className="detail-desc">{album.description}</p>

          <div className="stock-tag">
            {album.stock > 0
              ? "✓ In Stock ({album.stock} units available)"
              : "Out of Stock"}
          </div>

          <div className="detail-actions">
            <div className="qty-input-group">
              <label htmlFor="detail-qty">Quantity: </label>
              <input
                type="number"
                id="detail-qty"
                min="1"
                max={album.stock}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                }
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(album, qty)}
            >
              Add {qty} to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailPage;
