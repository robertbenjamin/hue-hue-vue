<template>
  <div class="album-list">
    <div class="album" v-for="album of albums">
      <img :src="album.artwork" alt="" class="artwork">
      <div class="title">{{ album.title }}</div>
      <div class="artist">{{ album.artist }}</div>
    </div>
  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {
      albums: [
        { artwork: "http://is2.mzstatic.com/image/thumb/Music/v4/f2/10/16/f2101636-2f4d-647c-4e91-ccfe25922e1c/source/500x500bb.png",
          title: "Wolf",
          artist: "Tyler, The Creator" },
        { artwork: "http://is4.mzstatic.com/image/thumb/Music69/v4/4e/b8/ba/4eb8ba96-6ee2-8a60-f012-a7a61a4fe097/source/500x500bb.png",
          title: "OK Computer",
          artist: "Radiohead" },
        { artwork: "http://is1.mzstatic.com/image/thumb/Music/v4/ed/00/00/ed00003f-a64f-9d99-9cfc-a476d0dff8f1/source/500x500bb.png",
          title: "Begin to Hope",
          artist: "Regina Spektor" },
      ]
    }
  },

  methods: {
    addTodo: function() {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ""
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1)
    },
    excitedTodo: function(index) {
      return this.todos[index].text + "!!!"
    }
  },

  computed: {

  }
}
</script>


<!-- Add `lang='sass'` to the style tag for preprocessing -->
<style lang="sass">
.album-list {

  .album {
    display: flex;
    align-items: center;

    .artwork {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
    .title { margin-right: 20px; }
  }
}
</style>