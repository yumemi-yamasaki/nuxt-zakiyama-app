<template>
    <div>
        <v-textarea solo v-model="item.text"/>
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
</style>