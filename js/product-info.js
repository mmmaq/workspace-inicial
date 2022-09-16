let productInfo = {}
let comentariosArray=[]

function showProductInfo(productInfo){

    let htmlContentToAppend = "";

        htmlContentToAppend += `
        
            <div class="row">
                `+ cargarImagenes(productInfo.images)+`
                <div class="col">
                    <div >
                        <br>
                        <h4 class="fw-bold fs-1">`+ productInfo.name +`</h4> <br>
                        <p class="fs-4"> Descripcion del producto: `+ " "+ productInfo.description +`</p> 
                        <p class="fs-4"> Moneda:`+ " " + productInfo.currency + `</p> 
                        <p class="fs-4">Precio:`+ " " + productInfo.cost + ` <p> 
                        <p class="fs-4">Cantidad vendidos:` + " " + productInfo.soldCount + ` <p> 
                    </div>
                </div>
            </div>
         `
         document.getElementById("product-info-container").innerHTML = htmlContentToAppend;
    }
        
    
function cargarImagenes(lista){
    let fotitos=""
    for (let foto of lista){
        fotitos+=
       ` <div class="col-3">
                    <img src= `+ foto + ` class="img-thumbnail">
        </div>`

    } return fotitos
}


function mostrarComentarios(comentariosArray){
    let htmlContentToAppend = "";
    for(let i = 0; i < comentariosArray.length; i++){
        let comment= comentariosArray[i];

        htmlContentToAppend += `
        <span class="border p-3 mb-2 bg-light text-dark"> 
                <div class="">
                    <h4>`+ comment.user + ` ` + comment.dateTime +` ` + puntaje(comment.score)+` </h4> 
                    <span> </span>
                    <p> `+ comment.description +`</p> 
                </div>
       </span> 
       `
    }
    document.getElementById("comentarios-container").innerHTML = htmlContentToAppend;
}

function puntaje(puntos){
    var estrellas = "";
    for (let i=1; i<=5;i++){
    if(i<=puntos){
        estrellas+= `<i class="fas fa-star checked"></i>`
    }else{
        estrellas+= `<i class="far fa-star nada"></i>`
    }  
}return estrellas
}


document.addEventListener("DOMContentLoaded", function(e){
    
    getJSONData(PRODUCT_INFO_URL + traerIdProduct + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            productInfo= resultObj.data
            showProductInfo(productInfo)
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + traerIdProduct + EXT_TYPE).then(function(resultObj){
       if (resultObj.status === "ok"){
            comentariosArray= resultObj.data
            mostrarComentarios(comentariosArray)
        }
    });

});