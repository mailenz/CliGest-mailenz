import { api } from 'boot/axios'
// State : données du magasin
const state = {
  clients: []
}
/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  setClients (state, clients) {
    state.clients = clients
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  getClientsApi ({ commit }) {
    api.get('/?results=100&nat=CH')
      .then(function (response) {
        commit('setClients', response.data.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  // Prend le state comme 1er paramètre
  clients: (state) => {
    return state.clients
  }
}
/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.
namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
