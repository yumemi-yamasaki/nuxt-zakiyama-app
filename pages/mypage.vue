<template>
  <div>
    <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
    <div class="main">
      <Todolist list-name="ToDo" :list="copiedTodoList.todo" @updateCard="updateTodoList"/>
      <Todolist list-name="Doing" :list="copiedTodoList.wip" @updateCard="updateTodoList"/>
      <Todolist list-name="Done" :list="copiedTodoList.done" @updateCard="updateTodoList"/>
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
    updateTodoList() {
      this.$store.dispatch('updateTodoList', clonedeep(this.copiedTodoList));
    }
  },
  beforeMount() {
    this.copiedTodoList = clonedeep(this.todoList)
  },
  async fetch({ store }) {
    const val = await firebase.app().functions('asia-northeast1').httpsCallable('getData')();
      if(val.data){
         store.dispatch('updateTodoList', val.data);
      }else{
         val.data = {
            done: [],
            wip: [],
            todo: []
         }
         store.dispatch('updateTodoList', val.data);
      }
  }
}
</script>

<style>
.main {
  display: flex;
}
</style>
