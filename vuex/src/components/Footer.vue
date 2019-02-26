<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox" v-model="isAllSelect"/>
    </label>
    <span>
      <span>已完成{{completeCount}}</span> / 全部 {{totalCount}}
    </span>
    <button v-show="completeCount" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalCount', 'completeCount']),
    isAllSelect: {
      get () {
        return this.$store.getters.isAllSelect
      },
      set (value) {
        this.$store.dispatch('selectAllTodos',value)
      }
    }
  },
  methods: {
    ...mapActions(['clearAllCompleted'])
  }

}
</script>

<style>

</style>
