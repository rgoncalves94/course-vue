<template>
  
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <Panel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </Panel>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import Panel from './components/shared/panel/Panel.vue';
export default {
  components: {
    Panel: Panel
  },
  data () {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },
  async created() {
    let response  = await this.$http.get('http://localhost:3000/v1/fotos');
    this.fotos = await response.json();
  }
}
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin-top: 0 auto;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
    width: 100%;
  }

</style>