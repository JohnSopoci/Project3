import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ Album, onAddToCart }) => {
  // sanity check: make sure that Album to display is not broken
  if (!Album) return null;

  return (
    <article className="Album-card">
      <Link className="Album-img-link" to={`/Album/${Album.id}`}>
        <img
          className="Album-image"
          src={Album.image}
          alt={Album.name}
          loading="lazy"
        />
      </Link>
      <div className="Album-body">
        <span className="Album-category">{Album.category}</span>
        <h3 className="Album-title">
          <Link to={`/Album/${Album.id}`}>{Album.name}</Link>
        </h3>
        <p className="Album-price">
          $
          {typeof Album.price === "number"
            ? Album.price.toFixed(2)
            : "Contact For Price"}
        </p>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={() => onAddToCart(Album)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default AlbumCard;
