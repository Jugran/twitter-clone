<template>
  <!-- Left -->
  <div class="w-68 xs:w-88 xl:w-275 h-screen">
    <div
      class="
        flex flex-col
        h-screen
        xl:pr-3
        fixed
        overflow-y-auto
        w-68
        xs:w-88
        xl:w-275
      "
    >
      <!-- Logo -->
      <a class="flex my-2 justify-center xl:justify-start" href="#">
        <font-awesome-icon
          icon="fa-brands fa-twitter"
          class="w-8 h-8 text-blue-400 dark:text-white"
          fill="currentColor"
        />
      </a>
      <!-- /Logo -->

      <!-- Nav -->
      <nav-bar />

      <!-- User Menu -->
      <user-menu
        v-if="!loading"
        :name="user.name"
        :avatar="user.avatar"
        :username="user.username"
      />
      <user-menu v-else :name="''" :avatar="'blank'" :username="'@'" />

      <div
        class="
          mx-auto
          mb-5
          rounded-full
          hover:bg-blue-50
          dark:hover:bg-dim-800
          p-2
        "
      >
        <div class="block xl:hidden" v-if="user.name">
          <div
            class="
              flex
              items-center
              text-gray-800
              dark:text-white
              cursor-pointer
            "
            @click="signOut"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import UserMenu from "./UserMenu.vue";
import { wait } from "@/helpers/wait";

export default {
  name: "LeftNavBar",
  components: {
    NavBar,
    UserMenu,
  },
  data() {
    return {
      user: {
        username: "",
        avatar: "",
        name: "",
      },
      loading: true,
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("auth/logout");
    },
    async fetchUser() {
      await wait(500);
      this.loading = true;
      const { user } = this.$store.state.profile;
      this.user = user;
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>
