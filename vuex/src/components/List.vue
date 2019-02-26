<template>
  <div class="todo-main">
    <Item v-for="(todo,index) in todos" :todo="todo" :key="index" :index="index">
    </Item>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Item from './Item'

export default {
  computed: {
    ...mapState(['todos'])
  },
  components: {
    Item
  }
}
</script>

<style>
</style>
