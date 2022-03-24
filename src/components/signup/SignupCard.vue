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
      <input
        class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
        placeholder="confirm password"
        type="password"
        name="confirmPassword"
        required
        v-model="confirmPassword"
      />
      <button
        class="
          w-full
          p-2
          bg-gray-50
          rounded-full
          font-bold
          text-gray-900
          border border-gray-700
        "
        name="submit"
        @click="handleSubmit"
      >
        Submit
      </button>

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


export default {
  name: "SignupCard",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("submit", this.username, this.password, this.confirmPassword);

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        this.confirmPassword = "";
      } 
      else {
        router.push({
          name: "login",
        });
      }
    },
  },
};
</script>

