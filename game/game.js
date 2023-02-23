import {ref} from "vue";

const grupoTarjetas = ref(["🐼", "⭐️", "🌍", "🌵", "👻", "🎂", "🍉", "🚀", "📒", "🦊")];

const totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function reparteTarjetas() {
  const mesa = document.getElementById("mesa");
  mesa.innerHTML = "";
  
  totalTarjetas.forEach(function(elemento){
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML = 
    "<div class='tarjeta'>" +
      "<div class='tarjeta_contenido'>" +
      elemento + "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);

  });
}

function descubrir(){
    this.classList.add("descubierta");

}
reparteTarjetas();

document.querySelectorAll(".tarjeta").array.forEach(elemento => {
    elemento.addEventListener("click", descubrir);
});