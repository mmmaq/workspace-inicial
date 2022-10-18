let productosCarrito = [] 

function showCarrito(productosCarrito){

    let htmlContentToAppend = "";

    for(let i = 0; i < productosCarrito.length; i++){ 
        let carrito = productosCarrito[i];

        htmlContentToAppend += `
        
        <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src= "`+ carrito.image +`" class="img-fluid rounded-3">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">`+ carrito.name +`</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown(),multiplicarCosto(productosCarrito[${i}],${i})">
                        <i class="fas fa-minus"></i>    
                    </button>        
                    <input onchange="multiplicarCosto(productosCarrito[${i}],${i})" id="cantidad${i}" min="0" name="quantity" value="`+ carrito.count +`" type="number" class="form-control form-control-sm">
    
                    <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp(),multiplicarCosto(productosCarrito[${i}],${i})" >       
                    <i class="fas fa-plus"></i>
                    </button>           
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <span class="mb-0">`+ carrito.currency +` </span> <span id="resultado${i}"> `+ carrito.unitCost +`</span>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                </div>
            </div>
        </div>

         `
    }
         document.getElementById("infoCarrito").innerHTML = htmlContentToAppend;
    }


function multiplicarCosto(articulosCarrito, i) {
    
    let cantidad = document.getElementById("cantidad"+i).value;
    articulosCarrito.count = cantidad;

    let resultado = articulosCarrito.count * articulosCarrito.unitCost;

    document.getElementById("resultado"+i).innerHTML = resultado;

}

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL + idUsuario + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productosCarrito = resultObj.data.articles;
            showCarrito(productosCarrito);
        }
    });

});



















