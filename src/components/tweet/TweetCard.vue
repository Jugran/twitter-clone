<template>
  <div
    class="
      border-b border-gray-200
      dark:border-dim-200
      hover:bg-gray-100
      dark:hover:bg-dim-300
      cursor-pointer
      transition
      duration-350
      ease-in-out
      pb-4
      border-l border-r
      mb-1
    "
  >
    <!-- User profile -->
    <user-info
      :user="tweet.user.name"
      :avatar="tweet.user.avatar"
      :username="tweet.user.username"
      :verified="false"
      :timestamp="tweet.timestamp"
    />

    <div class="pl-16">
      <p class="pb-5 text-base width-auto font-medium dark:text-white flex-shrink">
        {{tweet.content}}
      </p>

      <!-- <div class="flex my-3 mr-2 rounded-2xl border border-gray-600">
        <img
          class="rounded-2xl"
          src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
          alt=""
        />
      </div> -->

      <options-bar :likes="'11k'" :retweets="'12.2k'" :replies="'14k'" />

    </div>
  </div>
  <!-- /Tweet -->
</template>

<script>
import UserInfo from "./UserInfo.vue";
import OptionsBar from './OptionsBar.vue';

export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  components: {
    UserInfo,
    OptionsBar,
  }
};
</script>

<style>
</style>