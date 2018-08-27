<template>
  <div class="corpo">
    
    <Menu :routes="routes" />

    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    Menu
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin-top: 0 auto;
}

.page-enter, .page-leave-active {
  opacity: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .4s;
}
</style>