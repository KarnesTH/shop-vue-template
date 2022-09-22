<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
      <router-link to="/shop" class="navbar-brand">Shop Template</router-link>
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <router-link to="/shop" class="nav-link">Startseite</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop/item/create" class="nav-link"
            >Neuer Artikel</router-link
          >
        </li>
      </ul>
      <button class="btn bg-vue me-3">
        <i class="fas fa-shopping-cart"></i> Warenkorb (10€)
      </button>
      <button class="btn bg-vue2" @click="signout()">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  methods: {
    async signout() {
      try {
        await this.$store.dispatch("signout");
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped></style>
