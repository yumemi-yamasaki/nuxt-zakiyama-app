import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         auth: {},
         todoList: {
            todo: [{text: 'tetete'},{text: 'tetete'}],
            wip: [{text: 'tetete'},{text: 'tetete'}],
            done: [{text: 'tetete'},{text: 'tetete'}]
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
         updateTodoList(store, payload) {
            store.commit('updateTodoList', payload);
         }
      }
   })
}

export default createStore;