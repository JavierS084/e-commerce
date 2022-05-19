import React from 'react';

export default function cartScreen(props) {
const productId = props.match.params.id;
const qty = props.location.serach? Number(props.location.serach.split('=')[1]) : 1;
  return (
    <div>
        <h1>Carrito</h1>
        <p>
          ADD to CART : ProductID: {productId} Cantidad: {qty}
        </p>
    </div>
  )
}
