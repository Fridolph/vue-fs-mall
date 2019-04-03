import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'procuction';

export interface IState {
  isCollapsed: boolean;
  currentMenuitem: string;
}

export interface IGetters {
  menuitemClasses: string[];
  collapsedWidth: number;
}

export default new Vuex.Store<IState>({
  state: {
    isCollapsed: false,
    currentMenuitem: '首页',
  },

  mutations: {
    setCollapse(state, status) {
      state.isCollapsed = status;
    },

    setCurrentMenuitem(state, item) {
      state.currentMenuitem = item;
    },
  },

  getters: {
    menuitemClasses(state) {
      return [
        'menus',
        state.isCollapsed ? 'collapsed-menu' : '',
      ];
    },

    collapsedWidth(state) {
      return state.isCollapsed ? 78 : 200;
    },
  },

  actions: {

  },

  plugins: debug ? [createLogger()] : [],
});
