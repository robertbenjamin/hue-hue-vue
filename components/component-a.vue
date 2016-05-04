<template>
  <div class="component-a">
    <h1>Todo List</h1>
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.text }}</span>
        <button v-on:click="removeTodo($index)"></button>
      </li>
    </ul>
  </div>
</template>

<!-- JavScript here -->
<script>
module.exports = {
  data: function() {
    return {
      newTodo: "",
      todos: [
        { text: "Add some todos" }
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