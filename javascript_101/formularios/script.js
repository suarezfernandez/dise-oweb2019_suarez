//seleccionar los elementos
var correo = document.querySelector("input#correo");
var contrasena = document.querySelector("input#contrasena");
var div = document.querySelector("div#contenido");
var iniciar = document.querySelector("button#iniciar")
console.log(correo);
console.log(contrasena);



//agregar el evento al elemento
correo.addEventListener("keyup",function(){
    //alert("hola");
 

    //console.log(correo.value);
    div.textContent = correo.value;
    //agregar el evento al elemento 
    correo.addEventListener("blur"),function(){
        alert(correo.value);
    }

// agregar el evento al elemento al boton
iniciar.addEventListener("click");
div.textContent,`bienvenido ${correo.value}`;
});