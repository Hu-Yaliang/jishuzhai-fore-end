import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  id: 0,
  phoneNum: 0,
  createtime: '',
  author: '登录',
  bulletin: '欢迎访问技术宅后花园！',
  blogNum: 0,
  readNum: 0,
  visitNum: 0,
  blogNum: 0,
  role: '',
  isLogin: false,
  blogId: 0,
  time: 0
}

const mutations = {
  updateIdState(state, payload) {
    state.id = payload.id;
  },
  updatePhoneNumState(state, payload) {
    state.phoneNum = payload.phoneNum;
  },
  updateCreatetimeState(state, payload) {
    state.createtime = payload.createtime;
  },
  updateAuthorState(state, payload) {
    state.author = payload.author;
  },
  updateBlogNumState(state, payload) {
    state.blogNum = payload.blogNum;
  },
  updateReadNumState(state, payload) {
    state.readNum = payload.readNum;
  },
  updateVisitNumState(state, payload) {
    state.visitNum = payload.visitNum;
  },
  updateIsLoginState(state) {
    state.isLogin = !state.isLogin;
  },
  updateBlogIdState(state, payload) {
    state.blogId = payload.blogId;
  },
  updateRoleState(state, payload) {
    state.role = payload.role;
  },
  updateBulletinState(state, payload) {
    state.bulletin = payload.bulletin;
  },
  updateReadNumState(state, payload) {
    state.readNum = payload.readNum;
  },
  updateBlogNumState(state, payload) {
    state.blogNum = payload.blogNum;
  },
  updateTimeState(state, payload) {
    state.time = payload.time;
  },
  initAuthorState(state) {
    state.author = '登录';
  },
  initBlogNumState(state) {
    state.blogNum = 0;
  },
  initReadNumState(state) {
    state.readNum = 0;
  },
  initVisitNumState(state) {
    state.visitNum = 0;
  },
  initBulletinState(state) {
    state.bulletin = '欢迎访问技术宅后花园！';
  },
  initRoleState(state) {
    state.role = '';
  },
  addVisitNumState(state) {
    state.visitNum++;
  },
  addReadNumState(state) {
    state.readNum++;
  },
  initTimeState(state) {
    state.time = 0;
  },
  initIdState(state) {
    state.id = 0;
  }
}

export default new Vuex.Store({
  state,
  mutations
})