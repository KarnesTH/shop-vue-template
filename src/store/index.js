import { createStore } from "vuex";
import { API_KEY } from "../config/firebase";
import axios from "axios";

const store = createStore({
  state: {
    userId: null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
  },
  actions: {
    signup(context, payload) {
      const signUpObj = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      return axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          signUpObj
        )
        .then((res) => {
          context.commit("setUser", {
            userId: res.data.localId,
            token: res.data.idToken,
          });
        })
        .catch((err) => {
          const errorMessage = new Error(
            err.response.data.error.message || "UNKNOWN_ERROR"
          );
          throw errorMessage;
        });
    },
  },
  getters: {},
});

export default store;
