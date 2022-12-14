const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const PRODUCTS = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const traerIdCats = localStorage.getItem('catID');
const traerIdProduct = localStorage.getItem('products');
const idUsuario = "25801";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

document.addEventListener('DOMContentLoaded', function(){

  let usuario = localStorage.getItem('user');

    if (usuario != null) {
        document.getElementById('ponerUsuario').innerHTML = usuario;
        document.getElementById('iniciarSesion').innerHTML = "";
    }else{
      document.getElementById("ponerUsuario").style.display = "none";
    }

    document.getElementById("cerrarSesion").addEventListener("click", function(){
        localStorage.removeItem('user');
        window.location = "login.html"    
    })

    document.getElementById("miCarrito").addEventListener("click", function(){
      window.location = "cart.html"    
  })

  document.getElementById("miPerfil").addEventListener("click", function(){
    window.location = "my-profile.html"    
})

});