import data from './data'
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Zhort</a>
            </div>
            <div>
                <a href="cart.html"><i className="fa fa-cart-plus"></i></a>
                <a class="btn btn-outline" href="signin.html">Iniciar Sesi&oacute;n</a>
            </div>
        </header>
        <main> 
             
            <div className="row center">
                {data.products.map((product) =>(
                        
                        <div key={product._id} className="card">
                            <a href={`/product/${product._id}`}>
                                <img className="medium" src={product._id} alt="Product"/></a>
                            <div className="card-body">
                                <a href={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
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
                    ))
                }
               
               
                
            </div>     
   
        </main>
        <footer className="row center">
            
        <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Javier S&aacute;nchez. Todos los derechos reservados.</p>
  

        </footer>
    </div>
    
  );
}

export default App;
