let autosArray = [];

function showAutosList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src= "`+ product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name +`</h4> 
                        <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.currency + ` artículos</small> 
                        <small class="text-muted">` + product.cost + ` artículos</small> 
                        <small class="text-muted">` + product.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("101").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CAT_AUTOS).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            autosArray = resultObj.data;
            showCategoriesList(autosArray);
        }
    });
});

