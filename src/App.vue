<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4 bg-vue2'"
    :fullsize="true"
  />
</template>

<script>
import TheTwoColumnsLayout from "./layouts/TheTwoColumnsLayout.vue";
export default {
  name: "App",
  components: {
    TheTwoColumnsLayout,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.bg-vue {
  background-color: rgb(52, 73, 94);
  color: #f3f3f3;
}

.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: #f3f3f3;
}

.text-vue {
  color: rgb(52, 73, 94);
}

.text-vue2 {
  color: rgb(65, 184, 131);
}
</style>
