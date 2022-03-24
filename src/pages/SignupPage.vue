<template>
  <body class="bg-gray-700">
    <div class="flex min-h-screen items-center justify-center">
      <SignupCard />
    </div>
  </body>
</template>

<script>
import SignupCard from "@/components/signup/SignupCard.vue";

export default {
  name: "SignupPage",
  components: {
    SignupCard,
  },
};
</script>
