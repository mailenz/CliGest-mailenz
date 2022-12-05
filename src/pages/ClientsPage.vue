<template>
  <q-page padding>
    <h3>Liste des clients</h3>
    <q-list
      bordered
      class="rounded-borders"
      separator
    >
      <!-- Un élément de liste, un client -->
      <!-- TODO tester si liste vide et afficher message -->
      <!-- TODO afficher loader durant chargement -->
      <client
        v-for="client in clients"
        :key="client.id"
        :client="client"
      >
      </client>
    </q-list>
  </q-page>
</template>

<script>
// importation des fonctions utilitaires
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ClientsPage',
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('clients', ['clients']) // TODO importer isLoadedClients
  },
  methods: {
    ...mapActions('clients', ['getClientsApi']),
    refresh (done) { // TODO inutile, supprimer la méthode refresh
      this.getClientsApi()
      done()
    }
  },
  mounted () {
    // TODO Simplifier :  if (!this.isLoadedClients) {
    if (!this.$store.getters.isLoadedClients) {
      this.getClientsApi()
    }
  },
  components: {
    client: require('components/client').default
  }
}
</script>

<style scoped>

</style>
