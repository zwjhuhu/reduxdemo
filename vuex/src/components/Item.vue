<template>
  <li class="item" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
    <button v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import {mapState} from 'vuex'
import Item from './Item'

export default {
  props: {
    todo: Object,
    index: Number
  },
  data () {
    return {
      isShow: false,
      bgColor: 'white'
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    handleEnter (isEnter) {
      if(isEnter){
        this.isShow = true;
        this.bgColor = 'gray'
      } else {
        this.isShow = false;
        this.bgColor = 'white'
      }
    },
    deleteItem () {
      this.$store.dispatch('deleteTodo',this.index)
    }
  }
}
</script>

<style>
li {
  text-decoration: none;
  line-height: 30px;
}

</style>
