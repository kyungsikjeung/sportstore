<template>
  <div id="app">
    <Store />
  </div>
</template>

<script>
import Store from "./components/Store.vue";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: { Store },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>


