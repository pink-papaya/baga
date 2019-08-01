<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      />

      <router-link to="/home">
        <img src="@/assets/img/blueberry.svg" class="h-8 mr-4" />
      </router-link>

      <v-toolbar-title class="hidden-sm-and-down">
        {{ appTitle }}
      </v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-up">
        {{ appShortTitle }}
      </v-toolbar-title>

      <v-spacer />

      <nav-bar-user-menu />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list nav>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item to="/products">
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters, mapState } from 'vuex';
import NavBarUserMenu from '@/components/nav/NavBarUserMenu.vue';

export default {
  name: 'NavBar',

  components: { NavBarUserMenu },

  data() {
    return {
      drawer: null,
    };
  },

  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle']),
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss" scoped></style>
