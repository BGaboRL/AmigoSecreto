// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = 0;

function agregarAmigo(){
    let valorAmigo = document.getElementById("amigo").value;
    if (valorAmigo == ''){
        alert("Por favor ingresa un nombre!");
    }
    else{
        amigos.push(valorAmigo);
        document.querySelector('#amigo').value='';

        //Obtine la lista con el id
        let agregaAmigo = document.getElementById("listaAmigos");
        //Crea un nuevo elemenento li
        let nuevoElemento = document.createElement("li");
        //Agrega contenido al nuevo elemento
        nuevoElemento.textContent = `${amigos[amigo]}`;
        //Agrega el nuevo li al ul
        agregaAmigo.appendChild(nuevoElemento);

        amigo++;
    }
}


function sortearAmigo(){
    let amigoSecreto = Math.floor((Math.random() * amigos.length));
    console.log(amigoSecreto);

    //Oculta la lista para que deje de aparecer en pantalla
    document.getElementById("listaAmigos").style.display = 'none'; 


    //Obtine la lista con el id
    let agregaAmigo = document.getElementById("resultado");
    //Crea un nuevo elemenento li
    let nuevoElemento = document.createElement("li");
    //Agrega contenido al nuevo elemento
    nuevoElemento.textContent = `El amigo secreto es: ${amigos[amigoSecreto]}`;
    //Agrega el nuevo li al ul
    agregaAmigo.appendChild(nuevoElemento);
}