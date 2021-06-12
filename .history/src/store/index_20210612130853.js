import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {},
  actions: {
    async login({ dispatch }, ) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        email,
        form.password
      );

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      router.push("/");
    },
  },
  modules: {},
});