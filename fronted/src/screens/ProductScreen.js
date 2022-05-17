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
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}/>
        </div>
      
        <div className="col-1">
          <ul>
            <li>
            <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
              rating={product.rating}
              numReviews={product.numReviews}
              price={product.price}
              ></Rating>
            </li>
            <li>
              Precio : ${product.price}
            </li>
            <li>Descripcion: {product.description}</li>
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
                      <span className="success"> En Stock</span>
                    ) : (
                      <span className="error">No disponible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary-add">Agregar al Carrito</button>
              </li>
            </ul>
          </div>
        </div>
      </div> 

    </div>
  )
}
