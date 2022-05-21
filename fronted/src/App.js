import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
function App() {
    const  cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

  return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">Zhort</Link>
                    </div>
                    <div>
                        <Link to="cart.html">
                            <i className="fa fa-cart-plus"></i>
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        <Link className="btn btn-outline" to="/signin">Iniciar Sesi&oacute;n</Link>
                    </div>
                </header>
                <main> 
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>

                </main>
                <footer className="row center">
                <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Javier S&aacute;nchez. Todos los derechos reservados.</p>
                </footer>
            </div>
       </BrowserRouter>
  );
}

export default App;
