
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Zhort</a>
            </div>
            <div>
                <a href="cart.html"><i className="fa fa-cart-plus"></i></a>
                <a href="signin.html">Iniciar Sesi&oacute;n</a>
            </div>
        </header>
        <main> 
             
            <div className="row center">
                <div className="card">
                    <a href="product.html"><img className="medium" src="./images/product-1.jpeg" alt="Product"/></a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Chamarra Adidas </h2>
                        </a>
                        <div className="rating">
                            <i className="las la-battery-three-quarters"></i>
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span> 
                            <span><i className="fa fa-star"></i> </span>
                            <span><i className="fa fa-star"></i> </span> 
                            <span><i className="fa fa-star"></i> </span>
                            
                           
                        </div>
                        <div className="price">
                            $90
                        </div>
                    </div>
                </div>
               
                
            </div>     
   
        </main>
        <footer className="row center">
            
        <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Javier S&aacute;nchez. Todos los derechos reservados.</p>
  

        </footer>
    </div>
    
  );
}

export default App;
