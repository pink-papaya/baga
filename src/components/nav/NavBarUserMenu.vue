<template>
  <div>
    <v-btn v-if="!isUserLoggedIn" text to="/login">Login</v-btn>
    <v-menu
      v-if="isUserLoggedIn"
      v-model="isMenuOpen"
      :close-on-content-click="false"
      :nudge-bottom="5"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar v-if="networkOnLine" size="40">
            <v-img :src="user.photoURL" />
          </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar v-if="networkOnLine">
              <v-img :src="user.photoURL" :alt="user.displayName" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.displayName }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="logout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'NavBarUserMenu',
  data() {
    return { isMenuOpen: false };
  },
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine']),
    title() {
      return this.$vuetify.breakpoint.smAndDown
        ? this.appShortTitle
        : this.appTitle;
    },
  },
  methods: {
    async logout() {
      this.isMenuOpen = false;
      await firebase.auth().signOut();
    },
  },
};
</script>

<style lang="scss" scoped></style>
