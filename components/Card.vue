<template>
    <div>
      <v-btn v-if="showDeleteFlg" depressed small color="error" @click="remove">
        <v-icon>clear</v-icon>
      </v-btn>
      <v-textarea solo v-model="item.text" @focus="changeShowDeleteFlg(true)" @blur="changeShowDeleteFlg(false)" @change="updateCard"/>
    </div>
</template>

<script>

export default {
  components: {

  },
  props: {
    item: {
      type: Object,
      default: () => []
    },
    cardIndex: {
      type: Number
    }
  },
  data() {
     return {
       showDeleteFlg: false
     };
  },
  computed: {

  },
  methods: {
    updateCard() {
      this.$emit('updateCard');
    },
    changeShowDeleteFlg(state) {
      if(state) {
        this.showDeleteFlg = true;
      } else {
        setTimeout(()=> {
          this.showDeleteFlg = false;
        }, 500)
      }
    },
    remove() {
      this.$emit('remove', this.index);
    }
  }
}
</script>

<style>
</style>