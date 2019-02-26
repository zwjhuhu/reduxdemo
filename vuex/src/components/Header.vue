<template>
  <div class="todo-header">
    <input type="text" v-model="inputTodo" placeholder="输入名称" @keyup.enter="add"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      inputTodo:''
    }
  },
  methods: {
    add () {
      const inputTodo = this.inputTodo.trim();
      if (!inputTodo) {
        return
      }
      const todo = {
        title: inputTodo,
        complete: false
      }

      this.$store.dispatch('addTodo',todo)
      this.inputTodo = ''
    }
  }
}
</script>

<style>
</style>
