<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <a class="text-vue" role="button">melden Sie sich mit Ihrem Konto an</a>
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
      <div class="my-2">
        <div class="col-md-8 offset-2">
          <label for="confirmPassword" class="form-label"
            ><strong>Passwort wiederholen</strong></label
          >
          <Field
            as="input"
            name="confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
          />
          <small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>
      <div class="mt-4">
        <div class="col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">Registrieren</button>
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
  name: "RegisterComponent",
  components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird benötigt!")
        .trim()
        .email("Das ist keine gültige E-Mail Adresse."),
      password: yup
        .string()
        .required("Ein Passwort wird benötigt.")
        .min(6, "Nicht genügend Zeichen!"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein."),
    });
    return {
      schema,
    };
  },
  methods: {
    submitData(values) {
      console.log(values);
    },
  },
};
</script>

<style scoped></style>
