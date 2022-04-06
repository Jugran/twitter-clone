<template>
  <div
    class="
      w-14
      xl:w-full
      mx-auto
      mt-auto
      flex flex-row
      justify-between
      mb-2
      rounded-full
      hover:bg-blue-50
      dark:hover:bg-dim-800
      p-2
      transition
      duration-350
      ease-in-out
    "
  >
    <div class="flex flex-row">
      <img
        class="w-10 h-10 rounded-full"
        :src="require('@/assets/avatars/' + avatar + '.png')"
        :alt="name"
      />
      <div class="hidden xl:block flex-col ml-2">
        <h1 class="text-gray-800 dark:text-white font-bold text-sm">
          {{ name }}
        </h1>
        <p class="text-gray-400 text-sm">
          {{ username }}
        </p>
      </div>
    </div>
    <div class="hidden xl:block" v-if="name">
      <div
        class="
          flex
          items-center
          h-full
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
</template>

<script>
export default {
  name: "UserMenu",
  props: {
    name: {
      name: String,
      required: true,
    },
    avatar: {
      name: String,
      required: true,
    },
    username: {
      name: String,
      required: true,
    },
    verified: {
      name: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    async signOut() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>