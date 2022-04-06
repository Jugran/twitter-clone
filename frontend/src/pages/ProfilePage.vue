<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-row justify-center">
      <!-- Left -->
      <LeftNavBar />
      <!-- Center -->

        <div class="flex flex-col w-1/2">
            <!-- Back arrow -->

            <div class="flex justify-start absolute top-0 z-10 mx-auto">
                <div class="px-4 py-2 mx-2">
                <router-link
                    to="/feed"
                    exact
                    class="
                    text-2xl
                    font-medium
                    rounded-full
                    text-blue-400
                    hover:bg-gray-800 hover:text-blue-300
                    float-right
                    "
                >
                    <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <g>
                        <path
                        d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                        ></path>
                    </g>
                    </svg>
                </router-link>
                </div>
                <div class="mx-2">
                <h2 class="mb-0 text-xl font-bold text-white">{{ user.name }}</h2>
                <p class="mb-0 w-48 text-xs text-gray-400">
                    {{ tweets.length || 0 }} Tweets
                </p>
                </div>
            </div>
            <hr class="border-gray-800" />


            <UserBio :user="user" v-show="user" />
            <ProfileFeed :tweets="tweets" v-show="tweets.length" />

            <!-- Right -->
        </div>
            <RightNavBar />
    </div>
  </div>
</template>

<script>
import UserBio from "@/components/profile/UserBio.vue";
import LeftNavBar from "../components/layout/LeftSideBar.vue";
import RightNavBar from "../components/layout/RightSideBar.vue";
import ProfileFeed from "@/components/profile/ProfileFeed.vue";

export default {
  name: "ProfilePage",
  components: {
    LeftNavBar,
    RightNavBar,
    UserBio,
    ProfileFeed,
  },
  computed: {
    user() {
      return this.$store.state.profile.user;
    },
    tweets() {
      return this.$store.state.profile.tweets;
    },
  },
  mounted() {
    this.$store.dispatch("profile/getProfile");
  },
};
</script>
