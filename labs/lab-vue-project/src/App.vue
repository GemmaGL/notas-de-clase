<template>
  <div>
    <header class="logos">
      <img src="./images/Ironhack_logo.svg" alt="logo de Ironhack" />
      <img src="./images/Burger_menu.svg" alt="menu hamburguesa" />
    </header>
    <main>
      <img src="./images/Vue_logo.svg" alt="logo de vue" />
      <h1>Welcome to Vue.js</h1>
      <h3>
        Become a coding ninja with the fastest-growing JavaScript framework
      </h3>
      <button class="awsbut">Awesome!</button>
    </main>
    <section class="green">
      <div>
        <img src="./images/USP-1.png" alt="logo ordenador" />
        <h2>Performant</h2>
        <p>
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </p>
      </div>
      <div>
        <img src="./images/USP-2.png" alt="logo hombre" />
        <h2>Approachable</h2>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </p>
      </div>
      <div>
        <img src="./images/USP-3.png" alt="logo config" />
        <h2>Versatile</h2>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style>
body {
  width: 100 vw;
}
.logos {
  margin-top: 3vw;
  margin-left: 3vw;
  margin-right: 3vw;
  display: flex;
  justify-content: space-between;
  gap: ;
}

main {
  margin-top: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main h1 {
  font-size: 50px;
}

main h3 {
  font-size: 30px;
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
}

.awsbut {
  background-color: rgb(52, 73, 94);
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  width: 8vw;
  height: 2vw;
  margin-bottom: 5vw;
}
.green {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(57, 185, 151);
  width: 100%;
  flex-wrap: wrap;
  padding-top: 5vw;
}
.green div {
  width: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
