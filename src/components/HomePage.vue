<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-row justify-center">
        <!-- Left -->
        <LeftNavBar />
        <!-- Center -->
        <FeedSection />

        <!-- Right -->
        <RightNavBar />

    </div>
  </div>
</template>

<script>
import LeftNavBar from "./layout/LeftSideBar.vue";
import FeedSection from "./feed/FeedSection.vue";
import RightNavBar from "./layout/RightSideBar.vue";

export default {
  name: "HomePage",
  components: {
    LeftNavBar,
    FeedSection,
    RightNavBar
  },
};
</script>

<style>
</style>