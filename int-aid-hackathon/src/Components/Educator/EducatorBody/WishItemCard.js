import React from "react";

function WishItemCard({ thing }) {
  return (
    <div className="card w-min- inline-block bg-base-100 shadow-xl">
      <figure>
        <img
          src={thing.imgUrl}
          alt={thing.name}
          className="h-20 object-scale-down  "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{thing.name}</h2>
        <section className="w-20  justify-end items-center gap-3 border-2 border-black">
          Number of {thing.name} needed:
          <div className="countdown font-mono text-6xl">
            {thing.numberNeeded}
          </div>
        </section>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default WishItemCard;
