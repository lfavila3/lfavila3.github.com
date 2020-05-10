//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
});
*/


//Obtener elementos de la clase .close
let links = document.querySelectorAll(".close")

//REcorrerlos
links.forEach(function(link){

  //Agregar un evento click a cada uno de ellos
        link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        //Quitarles las clases de animacion que ya addEventListener
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600);

        return false;
  })
});
