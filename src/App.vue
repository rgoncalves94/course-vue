<template>
  
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="Digite o titulo da imagem:">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <Panel :titulo="foto.titulo">
          <ResponsiveImage :titulo="foto.titulo" :url="foto.url" />
        </Panel>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import Panel from './components/shared/panel/Panel.vue';
import ResponsiveImage from './components/shared/responsive-image/ResponsiveImage.vue'

export default {
  components: {
    Panel: Panel,
    ResponsiveImage: ResponsiveImage
  },
  data () {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ""
    }
  },
  computed: {
    fotosComFiltro() {
      if(this.filtro) {
        let regex = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => regex.test(foto.titulo));
      }

      return this.fotos;
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



.filtro {
  display: block;
  width: 100%;
}

</style>