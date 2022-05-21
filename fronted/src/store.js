import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { cartReducers } from './reducers/cartReducers';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
    }
};
const reducer = combineReducers ({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,
     composeEnhancer(applyMiddleware(thunk))
    );

export default store; 