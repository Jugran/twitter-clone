<template>
  <body class="bg-gray-700">
    <div class="flex min-h-screen items-center justify-center">
      <LoginCard />
    </div>
  </body>
</template>

<script>
import LoginCard from "@/components/signup/LoginCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginCard,
  },
};
</script>
