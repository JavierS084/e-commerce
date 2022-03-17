
function App() {
  return (
    <div class="grid-container">
        <header class="row">
            <div>
                <a class="brand" href="index.html">Zhort</a>
            </div>
            <div>
                <a href="cart.html"><i class="fa fa-cart-plus"></i></a>
                <a href="signin.html">Iniciar Sesi&oacute;n</a>
            </div>
        </header>
        <main> 
             
            <div class="row center">
                <div class="card">
                    <a href="product.html"><img class="medium" src="./images/product-1.jpeg" alt="Product"/></a>
                    <div class="card-body">
                        <a href="product.html">
                            <h2>Chamarra Adidas </h2>
                        </a>
                        <div class="rating">
                            <i class="las la-battery-three-quarters"></i>
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star"></i> </span>
                            
                           
                        </div>
                        <div class="price">
                            $90
                        </div>
                    </div>
                </div>
                <div class="card">
                    <a href="product.html"><img class="medium" src="./images/product-1.jpeg" alt="Product"/></a>
                    <div class="card-body">
                        <a href="product.html">
                            <h2>Chamarra Adidas </h2>
                        </a>
                        <div class="rating">
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star"></i> </span>
                           
                        </div>
                        <div class="price">
                            $90
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a href="product.html"><img class="medium" src="./images/product-1.jpeg" alt="Product"/></a>
                    <div class="card-body">
                        <a href="product.html">
                            <h2>Chamarra Adidas </h2>
                        </a>
                        <div class="rating">
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star"></i> </span>
                            <span><i class="fa fa-star"></i> </span> 
                            <span><i class="fa fa-star-o"></i></span>
                           
                        </div>
                        <div class="price">
                            $90
                        </div>
                    </div>
                </div>

                
            </div>     
   
        </main>
        <footer class="row center">
            All rights reserved
        </footer>
    </div>
  );
}

export default App;
