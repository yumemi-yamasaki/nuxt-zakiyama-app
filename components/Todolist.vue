<template>
<div>
    <v-sheet
          class="box"
          color="grey lighten-3"
        >
        <h2>{{ listName }}</h2>
            <Draggable  :list="list" group="all">
                <Card v-for="(el, index) in list" :item="el" :key="index" :cardIndex="index" @remove="remove" @updateCard="updateCard"/>
            </Draggable>
        <v-btn small fab depressed dark color="indigo" class="p-btn" @click="add">
            <v-icon>add</v-icon>
        </v-btn>
    </v-sheet>
</div>
</template>

<script>
import Card from '~/components/Card';
import Draggable from 'vuedraggable';

export default {
  components: {
      Card,
      Draggable
  },
  props: {
      list: {
          type: Array,
          default: () => []
      },
      listName: {
          type: String,
          default: '未設定'
      }
  },
  data() {
     return {

     };
  },
  computed: {

  },
  methods: {
      add() {
          this.list.push({text: ''});
          this.updateCard();
      },
      remove(index) {
          this.list.splice(index, 1);
      },
      updateCard() {
          this.$emit('updateCard');
      }
  }
}
</script>

<style>
.box {
    width: 300px;
    margin: 20px 10px;
}

.p-btn {
    bottom: 10px;
    z-index: 1;
}
</style>