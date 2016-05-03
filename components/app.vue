<template>
  <div class="app">
    <component-a></component-a>
    <component-b></component-b>
  </div>
</template>

<script>
import componentA from './component-a.vue'
import componentB from './component-b.vue'

export default {
  components: {
    componentA,
    componentB
  }
}
</script>