import data from './data'
import Product from './components/Product';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Zhort</a>
            </div>
            <div>
                <a href="cart.html"><i className="fa fa-cart-plus"></i></a>
                <a class="btn btn-outline" href="/signin">Iniciar Sesi&oacute;n</a>
            </div>
        </header>
        <main> 
             
            <div className="row center">
                {data.products.map((product) =>(
                        
                     <Product key={product._id} product={product}></Product>
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
