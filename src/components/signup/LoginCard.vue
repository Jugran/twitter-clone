<!-- component -->
<template>
  <div class="min-h-1/2 bg-gray-900 border border-gray-900 rounded-2xl">
    <div
      class="
        sm:mx-24
        md:mx-34
        lg:mx-56
        mx-auto
        flex
        items-center
        space-y-4
        py-16
        font-semibold
        text-gray-500
        flex-col
      "
    >
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="w-12 h-12 text-blue-400 dark:text-white"
        fill="currentColor"
      />

      <h1 class="text-white text-2xl">Sign in to Twitter</h1>
      <input
        class="
          w-full
          p-2
          bg-gray-900
          rounded-md
          border border-gray-700
          focus:border-blue-700
        "
        placeholder="username"
        type="email"
        name="username"
        required
        v-model="username"
      />
      <input
        class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
        placeholder="password"
        type="password"
        name="password"
        required
        v-model="password"
      />

      <div class="w-full bg-gray-50 rounded-full border border-gray-700">
        <button
          class="w-full bg-gray-50 p-2 rounded-full font-bold text-gray-900"
          name="submit"
          @click="handleSubmit"
          v-if="!loading"
        >
          Submit
        </button>

        <load-spinner v-else />
      </div>

      <p>
        Don't have an account?
        <router-link to="/signup" exact class="font-semibold text-sky-700"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { wait } from "@/helpers/wait";
import LoadSpinner from "../elements/LoadSpinner.vue";

export default {
  components: { LoadSpinner },
  name: "LoginCard",
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      console.log("submit", this.username, this.password);

      await wait(1000);
      this.loading = false;
      router.push({
        name: "feed"
      });
    }
  }
};
</script>

