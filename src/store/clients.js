import { api } from 'boot/axios'
// State : données du magasin
const state = {
  clients: [],
  loadedClients: false
}
/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  setClients (state, clients) { // TODO écrire en majuscules SET_CLIENTS
    state.clients = clients
  },
  setLoadedClients (state) { // TODO écrire en majuscules
    state.loadedClients = true // TODO doit pouvoir être false
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  getClientsApi ({ commit }) {
    // TODO laoded a false
    api.get('/?results=100&nat=CH')
      .then(function (response) {
        commit('setClients', response.data.results)
        commit('setLoadedClients') // TODO laoded a true
      })
      .catch(function (error) {
        console.log(error) // TODO Remplacer par Q-Dialog https://quasar.dev/quasar-plugins/dialog
        // TODO laoded a false
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
    // TODO trier les données par nom et prénom AZ
    return state.clients
  },
  isLoadedClients: (state) => {
    return state.loadedClients
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
