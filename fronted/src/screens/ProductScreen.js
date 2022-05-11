import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product){
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <Link to="/">Volver a los Resultados</Link>
      <div class="row top">
        <div class="col-2">
          <img class="large" src={product.image} alt={product.name}/>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <Rating
              rating={product.rating}
              numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>
              Precio :  ${product.price}
            </li>
            <li>Description: <p>{product.description}</p></li>
          </ul>

        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Estado </div>
                  <div>
                    {product.countInStock > 0 ?(
                      <span className="Success"> En Stock</span>
                    ) : (
                      <span className="error">No disponible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Agregar al Carrito</button>
              </li>
            </ul>
          </div>
        </div>
      </div> 

    </div>
  )
}
