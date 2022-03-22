<template>
  <!-- What’s happening -->

  <div class="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
    <h1
      class="
        text-gray-900
        dark:text-white
        text-md
        font-bold
        p-3
        border-b border-gray-200
        dark:border-dim-200
      "
    >
      What's happening
    </h1>

    <!-- Trending Topics -->
    <div v-for="trend in trends" :key="trend.hashtag">
      <trend-item :count="trend.tweetsCount" :hashtag="trend.hashTag" />
    </div>

    <div
      v-show="loading"
      class="
        flex
        items-center
        justify-center
        text-blue-400 text-sm
        font-normal
        p-3
        border-b border-gray-200
        dark:border-dim-200
        hover:bg-gray-100
        dark:hover:bg-dim-300
        cursor-pointer
        transition
        duration-350
        ease-in-out
      "
    >
      <svg class="w-6 h-6 animate-spin-fast">
        <circle
          cx="12"
          cy="12"
          fill="none"
          r="8"
          stroke-width="4"
          style="stroke: rgb(29, 161, 242); opacity: 0.2"
        ></circle>
        <circle
          cx="12"
          cy="12"
          fill="none"
          r="8"
          stroke-width="4"
          style="
            stroke: rgb(29, 161, 242);
            stroke-dasharray: 80;
            stroke-dashoffset: 60;
          "
        ></circle>
      </svg>
    </div>

    <div
      class="
        text-blue-400 text-sm
        font-normal
        p-3
        hover:bg-gray-100
        dark:hover:bg-dim-300
        cursor-pointer
        transition
        duration-350
        ease-in-out
      "
    >
      Show more
    </div>
  </div>
</template>

<script>
import { fetchTrending } from "../../services/trendingService";
import TrendItem from "./TrendItem.vue";
import { wait } from "../../helpers/wait";

export default {
  data() {
    return {
      trends: [],
      loading: false,
    };
  },
  components: {
    TrendItem,
  },
  methods: {
    async fetchTrends() {
      this.loading = true;
      await wait(2000);
      // const {data} = await fetchTrending();
      this.trends = fetchTrending().data;
      console.log("🚀 ~  this.trends", this.trends);
      this.loading = false;
    },
  },
  mounted() {
    this.fetchTrends();
  },
};
</script>
