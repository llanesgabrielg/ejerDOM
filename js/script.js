const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  //valor de texto en el input
  const textoInput = document.getElementsByClassName("text")[0].value;
  console.log(textoInput);
  //tengo que obtener los objetos por id, por clase obtengo una lista
  const contenedor = document.getElementById("contenedor");
  console.log(contenedor);
  // puntero a un nuevo elemento creado, en la banca de suplentes xd
  const newContenedor = document.createElement("div");
  const newParrafo = document.createElement("p");
  newParrafo.textContent = textoInput;
  newContenedor.appendChild(newParrafo);
  // agrego el nuevo elemento creado a el contenedor div con id="contenedor"
  contenedor.appendChild(newContenedor);
  // nuevaCaja.classList('forma');
  newContenedor.classList.add("forma");
});
