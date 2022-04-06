<template>
  <div class="w-full">

    <div v-for="tweet in tweets" :key="tweet.id">
      <tweet-card :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import TweetCard from "../tweet/TweetCard.vue";

export default {
  components: { TweetCard },
  props: {
    tweets: {
      type: Array,
      required: true
    }
  }
};
</script>