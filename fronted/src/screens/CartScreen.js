import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function cartScreen(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch()
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    :1;

  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
    return (
      <div>
          <h1>Carrito</h1>
          <p>
            ADD to CART : ProductID: {productId} Cantidad: {qty}
          </p>
      </div>
    );
}
