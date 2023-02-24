let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("C");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("POWERBI");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
const Nombre= document.getElementById("name")
const Correo= document.getElementById("email")
const Telefono= document.getElementById("tel")
const form= document.getElementById("form")
const parrafo= document.getElementById("warning")


 form.addEventListener("submit", e=> {
    e.preventDefault()
    let warning= ""
    let regexemail= /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(Nombre.value.length <4) {
        warning += 'El nombre es muy corto </br>'
        entrar=true
    }
    console.log(regexemail.test(email.value))
    if (!regexemail.test(email.value)){
        warning += 'El email es incorrecto </br>'
        entrar=true
}
}

     )
    