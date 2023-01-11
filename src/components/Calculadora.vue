<template>
  <div class="contenedor">
    <h1>Calculadora</h1>
    <h2>Numeros</h2>
    <input type="text" v-model.number="numeroUno" />
    <label id="lblOperacion" for="">⚋</label>
    <input type="text" v-model.number="numeroDos" />
    <div class="resultado">
      <label for="">Resultado:</label>
      <label for="">{{ resultado }}</label>
    </div>
    <h2>Operaciones</h2>
    <div class="operaciones">
      <button class="operacion" id="suma" v-on:click="setOperacion('suma')">
        Suma
      </button>
      <button class="operacion" id="resta" v-on:click="setOperacion('resta')">
        Resta
      </button>
      <button
        class="operacion"
        id="multiplicacion"
        v-on:click="setOperacion('multiplicacion')"
      >
        Multiplicacion
      </button>
      <button
        class="operacion"
        id="divicion"
        v-on:click="setOperacion('divicion')"
      >
        Divicion
      </button>
    </div>
    <button class="calcular" v-on:click="calcular">Calcular</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroUno: null,
      numeroDos: null,
      operacion: null,
      resultado: null,
    };
  },
  methods: {
    setOperacion(operacion) {
      this.operacion = operacion;
      switch (this.operacion) {
        case "suma":
          document.getElementById('lblOperacion').innerHTML = '+'
          break;
        case "resta":
          document.getElementById('lblOperacion').innerHTML = '-'
          break;
        case "multiplicacion":
          document.getElementById('lblOperacion').innerHTML = '×'
          break;
        case "divicion":
          document.getElementById('lblOperacion').innerHTML = '÷'
          break;
      }
      let btnOperaciones = ["suma", "resta", "multiplicacion", "divicion"];
      btnOperaciones.forEach((element) => {
        if (operacion == element) {
          document.getElementById(element).style = "background-color: #20bf6b";
        } else {
          document.getElementById(element).style = "background-color: #26de81";
        }
      });
    },
    calcular() {
      switch (this.operacion) {
        case "suma":
          this.resultado = this.numeroUno + this.numeroDos
          break;
        case "resta":
          this.resultado = this.numeroUno - this.numeroDos
          break;
        case "multiplicacion":
          this.resultado = this.numeroUno * this.numeroDos
          break;
        case "divicion":
          this.resultado = this.numeroUno / this.numeroDos
          break;
      }
    },
  },
};
</script>

<style>
.contenedor {
  margin: auto;
  width: 75vw;
}
input {
  padding: 15px;
  margin: 0px 20px;
  font-size: medium;
  border-radius: 30px;
}
button {
  color: #fff;
  display: block;
  margin: 20px;
  padding: 15px;
  border-radius: 30px;
  border: none;
  font-size: medium;
}
.operacion {
  background-color: #26de81;
}
.operacion:hover {
  background-color: #20bf6b;
}
.operaciones {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.calcular {
  background-color: #45aaf2;
  margin: 30px auto;
  width: 35%;
}
.calcular:hover {
  background-color: #2d98da;
}
.resultado label {
  display: block;
  font-weight: bold;
  font-size: larger;
  margin-top: 20px;
}
</style>