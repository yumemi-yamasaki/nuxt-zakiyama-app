<template>
  <div>
    <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
    <div class="main">
      <Todolist list-name="ToDo" :list="list1"/>
      <Todolist list-name="Doing" :list="list2"/>
      <Todolist list-name="Done" :list="list3"/>
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
  data() {
     return {
       list1: [
         'hogehoge',
         'fugafuga'
       ],
       list2: [
         'hogehoge',
         'fugafuga'
       ],
       list3: [
         'hogehoge',
         'fugafuga'
       ]
     };
  },
  computed: {
    ...mapState(['auth'])
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
