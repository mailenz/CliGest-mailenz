<template>
  <q-page padding>
    <h3>Liste des clients</h3>
    <q-list
      bordered
      class="rounded-borders"
      separator
    >
      <!-- Un élément de liste, un client -->
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
    ...mapGetters('clients', ['clients'])
  },
  methods: {
    ...mapActions('clients', ['getClientsApi']),
    refresh (done) {
      this.getClientsApi()
      done()
    }
  },
  mounted () {
    this.getClientsApi()
  },
  components: {
    client: require('components/client').default
  }
}
</script>

<style scoped>

</style>
