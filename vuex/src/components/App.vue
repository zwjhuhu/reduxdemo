<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <todos-header></todos-header>
        <List></List>
        <todos-footer></todos-footer>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import List from './List'
import Footer from './Footer'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['todos'])
  },
  watch: {
    todos: {
      deep: true,
      handler: function(todos){
        console.log(todos.length)
      }
    }
  },
  mounted () {
    this.$store.dispatch('reTodos')
  },
  components: {
    'todos-header': Header,
    List,
    'todos-footer': Footer
  }
}
</script>

<style>
</style>
