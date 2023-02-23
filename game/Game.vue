<script setup>
import game from "../stores/game";
</script>

<template>
  <h1>Vamos a jugar!</h1>
  <h3>Encuentra las parejas</h3>
  <p>En cada turno levanta dos fichas para hacer parejas.</p>
  <main>
    <div id="mesa" class="mesa">
        <div class="tarjeta">
         <div class="tarjeta_contenido">"🐼"</div>
    </div>
  </main>
  </div>
</template>

<style scoped>
main{
    flex-grow:1;
    display:flex;
    justify-content: center;
    position: relative;
}
.mesa{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    max-width: 50rem;
    margin:auto;
}

.tarjeta{
    width: 6rem;
    height: 6rem;
    margin: 0.5rem;
    border-radius: 0.3em; 
    background-color: mediumspringgreen;
    box-shadow: 1px 1px 3px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;
    backface-visibility: hidden;
    transform-style: preserve-3d;
}

.tarjeta_contenido{
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: rotateY(-180deg);
    backface-visibility: hiden;
    background-color: white;
    box-shadow: 1px 1px 3px;
    border-radius: 0.3em;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    padding-top: 0.4rem;
}
.tarjeta_contenido: :selection{
    background: transparent;
}
</style>

.tarjeta.descubierta {
    transform: rotateY(-180deg);
}
