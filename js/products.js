let autosArray = [];

function showAutosList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let cats_products = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src= "`+ cats_products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ cats_products.name +`</h4> 
                        <p> `+ cats_products.description +`</p> 
                        </div>
                        <small class="text-muted">` + cats_products.currency + ` artículos</small> 
                        <small class="text-muted">` + cats_products.cost + ` artículos</small> 
                        <small class="text-muted">` + cats_products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + traerId + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            autosArray = resultObj.data.products;
            showAutosList(autosArray);
        }
    });
});

