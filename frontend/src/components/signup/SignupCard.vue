<!-- component -->
<template>
  <div class="min-h-1/2 bg-gray-900 border border-gray-900 rounded-2xl">
    <div
      class="
        xs:mx-24
        md:mx-34
        lg:mx-56
        mx-14
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
      <input
        class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
        placeholder="confirm password"
        type="password"
        name="confirmPassword"
        required
        v-model="confirmPassword"
      />
      <div class="w-full bg-gray-50 rounded-full border border-gray-700">
        <button
          class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900"
          name="submit"
          @click="handleSubmit"
          v-if="!loading"
        >
          Submit
        </button>

        <load-spinner v-else />
      </div>

      <p>
        Already have an account?
        <router-link to="/" exact class="font-semibold text-sky-700"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import LoadSpinner from "../elements/LoadSpinner.vue";
import { mapActions } from "vuex";

export default {
  name: "SignupCard",
  components: { LoadSpinner },
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async handleSubmit() {
      if (!this.username || !this.password) {
        return;
      }

      this.loading = true;
      console.log("submit", this.username, this.password, this.confirmPassword);

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        this.confirmPassword = "";
        this.loading = false;
        return;
      }

      const { success, error, errors } = await this.register({
        username: this.username,
        password: this.password,
      });

      this.loading = false;

      if (!success) {
        alert(error ?? errors[0]);
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
      } else {
        router.push({
          name: "feed",
        });
      }
    },
  },
};
</script>

