import Vue from 'vue'
import Vuex from 'vuex'

// axios
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Titulos:'',
    Titulo:'',
  },
  mutations: {
    DELETE_ALL(state, Titulos){
      state.Titulos = Titulos
    },
    OBTENER_TITULOS(state,Titulos){
      state.Titulos = Titulos
    },
    MODIFICAR(state, Titulo){
      state.Titulo = Titulo
    }
  },
  actions: {
    // Eliminar Todos
    DeleteAll({commit}){
      axios.delete("https://rayentutorialtestapp.azurewebsites.net/deletetutorials").then((respuesta) => {
        console.log(respuesta.data);
        commit("DELETE_ALL", respuesta.data);
      });
    },
    // Obtener Titulos
    ObtenerTitulos({ commit }) {
      axios.get("https://rayentutorialtestapp.azurewebsites.net/tutorials").then((respuesta) => {
        console.log(respuesta.data);
        commit("OBTENER_TITULOS", respuesta.data);
      });
    },
    // Detalles
    Detalles({commit}, payload){
      commit('MODIFICAR', payload.item)
    },
  
}})
