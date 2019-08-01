<template>
  <div id="app">
    <v-app>
      <nav-bar></nav-bar>
      <v-content>
        <div class="main-wrapper">
          <router-view />
        </div>

        <new-content-available-toastr
          v-if="newContentAvailable"
          class="new-content-available-toastr"
          :refreshing-app="refreshingApp"
          @refresh="serviceWorkerSkipWaiting"
        ></new-content-available-toastr>
        <apple-add-to-home-screen-modal
          v-if="showAddToHomeScreenModalForApple"
          class="apple-add-to-home-screen-modal"
          @close="closeAddToHomeScreenModalForApple(false)"
        >
        </apple-add-to-home-screen-modal>
      </v-content>

      <v-footer app color="purple lighten-4">
        <div class="flex justify-center">
          <div class="flex flex-col items-center">
            &copy; Baga 2019
            <div>
              Logo Icon made by
              <a
                rel="noopener"
                target="_blank"
                href="https://www.flaticon.com/authors/monkik"
              >
                monkik
              </a>
              from
              <a rel="noopener" target="_blank" href="https://www.flaticon.com">
                www.flaticon.com
              </a>
            </div>
          </div>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import NavBar from '@/components/NavBar2.vue';
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr.vue';
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal.vue';

export default {
  components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp']),
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting',
  ]),
};
</script>

<style lang="scss">
body {
  margin: 0;

  a {
    font-weight: 500;
    text-decoration: none;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .main-wrapper {
      margin-top: 3.6rem;
      padding: 20px;

      .page-wrapper {
        width: 60%;
        margin: auto;

        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
