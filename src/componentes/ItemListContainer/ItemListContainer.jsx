import React from "react";

const ItemListContainer = ({ message }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">{message}</h2>
    </div>
  );
};

export default ItemListContainer;
