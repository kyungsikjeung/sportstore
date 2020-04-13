<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import Store from "./components/Store.vue";

import { mapActions } from "vuex";

export default {
  name: "app",
  //  components: { Store },
  methods: {
    ...mapActions(["getData"])
  },
  created() {
    this.getData();
  }
};
</script>


