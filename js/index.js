document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    let usuario = localStorage.getItem('user');

    if (usuario != null) {
        document.getElementById('ponerUsuario').innerHTML = usuario;
        document.getElementById('iniciarSesion').innerHTML = "Cerrar Sesión";

    }

    document.getElementById('iniciarSesion').addEventListener("click", function(){
        localStorage.removeItem('user');
        
    })


});



