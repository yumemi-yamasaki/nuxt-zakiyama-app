<template>
<div>
    <v-sheet
          class="d-flex box"
          color="grey lighten-3"
          height="424"
        >
        <h2>{{ listName }}</h2>
        <div class="cards">
            <Draggable  :list="list" group="all">
                <Card v-for="(el, index) in list" :item="el" :key="index" />
            </Draggable>
        </div>
        <v-btn small fab dark color="indigo" class="p-btn">
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
  }
}
</script>

<style>
.box {
    width: 300px;
    margin: 20px 10px;
    position: relative;
}

.p-btn {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
</style>