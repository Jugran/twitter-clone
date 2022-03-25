<template>
  <div class="w-full sm:w-600 h-screen">
    <!-- Header -->
    <div
      class="
        flex
        justify-between
        items-center
        border-b
        px-4
        py-3
        sticky
        top-0
        bg-white
        dark:bg-dim-900
        border-l border-r border-gray-200
        dark:border-gray-700
      "
    >
      <!-- Title -->
      <h2 class="dark:text-gray-100 font-bold font-sm">Home</h2>
    </div>

    <!-- Post Tweet -->
    <new-post :userProfile="userProfile" v-on:post-tweet="postTweet($event)" />
    <!-- Post tweet spinner -->
    <div
      class="
        flex
        items-center
        justify-center
        p-1
        border-b border-l border-r border-gray-200
        dark:border-gray-700
      "
    >
      <load-spinner v-show="postingTweet" :size="6" />
    </div>

    <div v-for="tweet in tweets" :key="tweet.id">
      <tweet-card :tweet="tweet" />
    </div>

    <!-- Spinner -->
    <div
      v-show="loading"
      class="
        flex
        items-center
        justify-center
        p-1
        border-b border-l border-r border-gray-200
        dark:border-gray-700
      "
    >
      <load-spinner v-show="loading" :size="8" />
    </div>
  </div>
</template>

<script>
import NewPost from "../tweet/NewPost.vue";
import TweetCard from "../tweet/TweetCard.vue";

import LoadSpinner from "../elements/LoadSpinner.vue";
import { mapActions } from 'vuex';

export default {
  name: "FeedSection",
  components: {
    NewPost,
    TweetCard,
    LoadSpinner,
  },
  data() {
    return {
      loading: true,
      postingTweet: false,
    };
  },
  methods: {
    ...mapActions('feed', ["fetchFeed", "addTweet"]),

    async postTweet(text) {
      this.postingTweet = true;
      console.log('adding tweet')
      await this.addTweet(text);
      this.postingTweet = false;
    },

    async fetchTweets() {
      this.loading = true;
      await this.fetchFeed();
      this.loading = false;
    },
  },
  computed: {
    userProfile() {
      return this.$store.state.profile.user.avatar;
    },
    tweets() {
      return this.$store.getters["feed/getFeed"];
    }
  },
  created() {
    this.fetchTweets();
  },
};
</script>
