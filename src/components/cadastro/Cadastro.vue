<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form>
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off">
        <imagem-responsiva/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao label="GRAVAR" type="submit"/>
        <router-link to="/"><meu-botao label="VOLTAR" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue'
import Button from '../shared/button/Button.vue';

export default {

  components: {

    'imagem-responsiva': ResponsiveImage, 
    'meu-botao': Button
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>
