import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*

interface State {
  cardGroups: CardGroup[];
}

interface CardGroup {
  id: number;
  title: string;
  cards: Card[];
}

interface Card {
  front: string;
  back: string;
}

*/

const state = {
  cardGroups: [
    {
      id: 1,
      title: "动词て形",
      cards: [
        {
          front: "開く",
          back: "開いて"
        },
        {
          front: "勝つ",
          back: "勝って"
        },
        {
          front: "返す",
          back: "返して"
        }
      ]
    },
    {
      id: 2,
      title: "ない形",
      cards: [
        {
          front: "怒る",
          back: "怒らない"
        },
        {
          front: "慌てる",
          back: "慌てない"
        },
        {
          front: "帰る",
          back: "帰らない"
        },
        {
          front: "急ぐ",
          back: "急がない"
        }
      ]
    }
  ]
};

const getters = {
  getCardGroups: state => {
    return state.cardGroups.map(part => {
      return { title: part.title, id: part.id };
    });
  },
  getTitle: state => partId => {
    let part = state.cardGroups.find(part => part.id === partId);
    return part.title;
  },
  getCard: state => (partId, cardId) => {
    let part = state.cardGroups.find(part => part.id === partId);
    let card = part.cards[cardId];
    return card;
  },
  getPartLength: state => partId => {
    return state.cardGroups.find(part => part.id === partId).cards.length;
  }
};

export default new Vuex.Store({
  state,
  getters
});
