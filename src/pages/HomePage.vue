<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4 bg-vue2'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Shop Template</div>
        <div class="display-4 my-5">Hier könnte Ihre Werbung stehen!</div>
        <div class="row">
          <div class="col-4 my-5 offset-4">
            <img src="@/assets/shopping.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </template>
    <template #rightCol>
      <component
        :is="componentName"
        @change-component="changeComponent"
      ></component>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout";
import Register from "@/components/auth/RegisterComponent";
import Login from "@/components/auth/LoginComponent";
export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    Register,
    Login,
  },
  data() {
    return {
      componentName: "register",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped></style>
