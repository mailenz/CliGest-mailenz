<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Menu de navigation
          </q-item-label>
          <q-item clickable to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section >
              <q-item-label>Accueil</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/clients" exact>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Clients</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
