<template>
  <div>
    <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
    <div class="main">
      <Todolist list-name="ToDo" :list="todoList.todo"/>
      <Todolist list-name="Doing" :list="todoList.wip"/>
      <Todolist list-name="Done" :list="todoList.done"/>
    </div>
  </div>
</template>

<script>
import firebase from '~/utils/firebase.js';
import { mapState } from 'vuex';

import Todolist from '~/components/Todolist';
export default {
  components: {
    Todolist
  },
  props: {
  },
  computed: {
    ...mapState(['auth', 'todoList'])
  },
  methods: {
  }
}
</script>

<style>
.main {
  display: flex;
}
</style>
