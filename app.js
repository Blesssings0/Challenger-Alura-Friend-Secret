// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let EnterAmigo = document.getElementById("amigo");
//Declaramos la Variable para la ul a la cual agregar el elemento li
let ListaAmigos = document.getElementById("listaAmigos");

let ListaSorteo = [];

let maximo = 5;

//Funcion Para agregar un amigo
function agregarAmigo() {
  //Creamos el elemento li
  let li = document.createElement("li");
  //A la ul le agregamos el elemento Creado li
  ListaAmigos.appendChild(li);

  //Convertimoa la Entrada a Un valor
  let NombreAmigo = EnterAmigo.value;

  //Agregamos el Valor a la Lista
  li.innerHTML = NombreAmigo;

  //Validamos que La Entrada no este Vacia
  if (NombreAmigo === "") {
    alert("iNGRESE UN NOMBRE");
  } else {
    //Limpiamos despues de ingresar un texto
    limpiarentrada();

    console.log(ListaSorteo);
    //Incluimos los amigos en el Sorteo si no esta la cantidad
    if (ListaSorteo == maximo) {
      alert("sorteando");
    } else {
      if (ListaSorteo.includes(NombreAmigo.length)) {
        return sortearAmigo();
      } else {
        ListaSorteo.push(NombreAmigo);
      }
    }
  }

  return;
}

function sortearAmigo() {
  if (ListaSorteo == "") {
    alert("Ingrese un amigo");
  } else {
    let Sort = Math.floor(Math.random() * ListaSorteo.length);

    //Para ver los elemntos de listaSorteo debes agregar DONDE estan agregando la lista y especificarle en que indice queres elegirlo y para eso solo pones dentro de corchetes el aleatorio en este caso la variable Sort
    agregarElemento("p", ` Tu amigo secreto es: ${ListaSorteo[Sort]}`);
  }
}

//agregar mensaje de amigo Sorteado
function agregarElemento(tags, TextoTag) {
  let Texto = document.querySelector(tags);
  Texto.innerHTML = TextoTag;
}

//Limpiar Entrada del User
function limpiarentrada() {
  document.querySelector("input").value = "";
}

//Reiniciar el Juego
function Reload() {
  window.location.reload();
}
