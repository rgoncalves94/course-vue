<template>
    <nav>
      <ul>       
          <li v-for="route of routes">
            <router-link :to="route.path || '/'">{{ route.title }}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            routes: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                routes
            }    
        }
    }
</script>

<style scoped>
</style>

