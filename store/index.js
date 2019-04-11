import Vuex from 'vuex'
import firebase from '~/utils/firebase';

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {},
         todoList: {
            todo: [],
            wip: [],
            done: []
         }
      }),
      mutations: {
        setAuth(state, payload) {
             state.auth = {
                 uid: payload.uid,
                 userName: payload.userName
             }
        },
        updateTodoList(state, payload) {
           state.todoList = payload;
        }
      },
      actions: {
         setAuth(store, payload) {
             store.commit('setAuth', payload);
         },
         // TODOリストを更新する
         async updateTodoList(store, payload) {
            store.commit('updateTodoList', payload);
            await firebase.app().functions('asia-northeast1').httpsCallable('setData')(payload);
         }
      }
   })
}

export default createStore;