<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <a class="text-vue" role="button">melden Sie sich mit Ihrem Konto an</a>
    </div>
    <form class="mt-3">
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="email" class="form-label"
            ><strong>E-Mail-Adresse</strong></label
          >
          <input type="email" class="form-control" id="email" />
        </div>
      </div>
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="password" class="form-label"
            ><strong>Passwort</strong></label
          >
          <input type="password" class="form-control" id="password" />
        </div>
      </div>
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="confirmPassword" class="form-label"
            ><strong>Passwort wiederholen</strong></label
          >
          <input type="password" class="form-control" id="confirmPassword" />
        </div>
      </div>
      <div class="mt-4">
        <div class="col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">Registrieren</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
};
</script>

<style scoped></style>
