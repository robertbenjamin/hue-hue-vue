<template>
  <div class="app">
    <album-search></album-search>
    <album-list></album-list>
  </div>
</template>

<script>
import AlbumSearch from './album-search.vue'
import AlbumList from './album-list.vue'

export default {
  components: {
    AlbumSearch,
    AlbumList
  }
}
</script>

<style>
.app {
  width: 600px;
  margin: 0 auto;
}
/* default stles should go here */
</style>