<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt anmelden</h2>
      <p>
        oder
        <a class="text-vue" role="button" @click="changeComponent('register')"
          >erstellen Sie ein Konto.</a
        >
      </p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form
      class="mt-3"
      @submit="submitData"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="email" class="form-label"
            ><strong>E-Mail-Adresse</strong></label
          >
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="password" class="form-label"
            ><strong>Passwort</strong></label
          >
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="mt-4">
        <div class="col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
export default {
  name: "LoginComponent",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "register") {
        return false;
      }
      return true;
    },
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird ben??tigt!")
        .trim()
        .email("Das ist keine g??ltige E-Mail Adresse."),
      password: yup
        .string()
        .required("Ein Passwort wird ben??tigt.")
        .min(6, "Nicht gen??gend Zeichen!"),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("INVALID_PASSWORD")) {
          return "Das Passwort ist nicht g??ltig.";
        } else if (this.error.includes("EMAIL_NOT_FOUND")) {
          return "E-Mail Adresse konnte nicht gefunden werden.";
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es sp??ter noch einmal.";
      }
      return "";
    },
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      this.$store
        .dispatch("signin", {
          email: values.email,
          password: values.password,
        })
        .then(() => {
          this.isLoading = false;
          this.$router.push({ path: "/shop" });
        })
        .catch((err) => {
          this.error = err.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<style scoped></style>
