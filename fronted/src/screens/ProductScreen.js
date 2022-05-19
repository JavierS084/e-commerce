import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector( (state) => state.productDetails);
  const { loading , error, product} = productDetails;

  useEffect(() =>{
    dispatch(detailsProduct(productId));
  },[dispatch, productId]);

  return (
    <div>
      {loading? ( 
        <LoadingBox></LoadingBox>
      ) : error? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
        <Link to="/">Volver a los Resultados</Link>
        <div className="row top">
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
                Precio : Gs. {product.price}
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
                        <span className="danger">No disponible</span>
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

      )}
    </div>
   
  )
}
