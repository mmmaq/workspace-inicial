function login() {
    let usuario= document.getElementById('typeEmailX').value ;
    let clave= document.getElementById('typePasswordX').value ;

    if (usuario==='' || clave===''){
        alert('Debe ingresar usuario y clave');
    }else{
        location.href='index.html';
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('inicio').addEventListener('click', ()=>{
        login();
    })
})