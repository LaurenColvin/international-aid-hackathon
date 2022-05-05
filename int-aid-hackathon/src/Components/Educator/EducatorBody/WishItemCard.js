import React from "react";

function WishItemCard({ thing }) {
  return (
    <div className="card h-48 w-48 m-4 inline-block bg-base-100 border-4 border-secondary shadow-xl">
      <figure>
        <img
          src={thing.imgUrl}
          alt={thing.name}
          className="h-20 m-3 mb-0 object-scale-down  "
        />
      </figure>
        <h2 className="card-title">{thing.name}</h2>
          <h2>{thing.numberNeeded}</h2>  
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
  );
}

export default WishItemCard;
