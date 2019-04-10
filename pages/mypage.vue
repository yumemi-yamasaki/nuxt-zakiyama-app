<template>
  <div>
    <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
    <div class="main">
      <Todolist list-name="ToDo" :list="copiedTodoList.todo"/>
      <Todolist list-name="Doing" :list="copiedTodoList.wip"/>
      <Todolist list-name="Done" :list="copiedTodoList.done"/>
    </div>
  </div>
</template>

<script>
import firebase from '~/utils/firebase.js';
import { mapState } from 'vuex';
import clonedeep from 'lodash.clonedeep';

import Todolist from '~/components/Todolist';
export default {
  components: {
    Todolist
  },
  data() {
    return {
      copiedTodoList: {}
    }
  },
  props: {
  },
  computed: {
    ...mapState(['auth', 'todoList'])
  },
  methods: {
  },
  beforeMount() {
    this.copiedTodoList = clonedeep(this.todoList)
  }
}
</script>

<style>
.main {
  display: flex;
}
</style>
