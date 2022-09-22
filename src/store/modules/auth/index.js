import { API_KEY } from "../../../config/firebase";
import axios from "axios";

let timer;

const state = {
  userId: null,
  token: null,
};
const mutations = {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
  },
};
const actions = {
  auth(context, payload) {
    let url = "";
    if (payload.mode === "signin") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else if (payload.mode === "signup") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    } else {
      return;
    }
    const authObj = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    return axios
      .post(url, authObj)
      .then((res) => {
        const expiresIn = Number(res.data.expiresIn) * 1000;
        const expireDate = new Date().getTime() + expiresIn;
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("expiresIn", expireDate);
        timer = setTimeout(() => {
          context.dispach("autoSignout");
        }, expireDate);
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
  signup(context, payload) {
    const signUpObj = {
      ...payload,
      mode: "signup",
    };
    return context.dispatch("auth", signUpObj);
  },
  signin(context, payload) {
    const signInObj = {
      ...payload,
      mode: "signin",
    };
    return context.dispatch("auth", signInObj);
  },
  signout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");
    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoSignout(context) {
    context.dispatch("signout");
  },
};
const getters = {
  isAuthenticated: (state) => !!state.token,
};

const authModule = {
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
