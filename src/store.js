import Vue from "vue";
import Vuex from "vuex";

import data from "@/data/data.js";

Vue.use(Vuex);

const state = {
  contents: []
};

const getters = {
  getContents: state => {
    return state.contents.map(part => {
      return { title: part.title, id: part.id };
    });
  },
  getTitle: state => partId => {
    let part = state.contents.find(part => part.id == partId);
    return part.title;
  },
  getCard: state => (partId, cardId) => {
    let part = state.contents.find(part => part.id == partId);
    let card = part.cards[cardId];
    return card;
  },
  getPartLength: state => partId => {
    return state.contents.find(part => part.id == partId).cards.length;
  }
};

const mutations = {
  INIT_DATA(state, data) {
    state.contents = data;
  }
};

const actions = {
  initData: ({ commit }) => {
    commit("INIT_DATA", data);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
