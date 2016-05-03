<template>
  <div class="component-a">
    <h1>Hello World!</h1>
    <p>Here's some shitty writing I wrote.</p>
    <input v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<!-- JavScript here -->
<script>
module.exports = {
   data: function() {
    return {
      message: "Oh shit waddup."
    }
   }
}
</script>

<!-- Add `lang='sass'` to the style tag for preprocessing -->
<style>
.component-a {
  width: 600px;
  margin: 0 auto;
}
</style>