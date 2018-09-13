<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="Digite o titulo da imagem:">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <Panel :titulo="foto.titulo">
          <ResponsiveImage v-transform:rotate.animate :titulo="foto.titulo" :url="foto.url" />
          <Button type="button" label="Remover" @buttonClick="remove(foto)" :confirm="true" buttonStyle="danger" />
        </Panel>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue'
import Button from '../shared/button/Button.vue'
import Transform from '../../directives/Transform'

export default {
  components: {
    Panel,
    ResponsiveImage,
    Button
  },
  directives: {
    transform: Transform
  },
  data () {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ""
    }
  },
  methods: {
    remove(foto) {
      alert(`'${foto.titulo}' removido(a) com sucesso.`);
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