<template>
  <!-- Who to follow -->

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
      Who to follow
    </h1>

    <!-- Twitter Accounts -->

    <div v-for="profile in profiles" :key="profile.id">
        <profile-card
          :name="profile.user.name"
          :avatar="profile.user.avatar"
          :username="profile.user.username"
          />
    </div>

    <!-- Loader -->
    <div
      class="
        border-b border-gray-200
        dark:border-dim-200
        p-4
        max-w-sm
        w-full
        mx-auto
      "
      v-show="loading"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-gray-400 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-400 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-400 rounded"></div>
            <div class="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Loader -->

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
import { fetchProfiles } from "../../services/trendingService";
import { wait } from "../../helpers/wait";
import ProfileCard from './ProfileCard.vue';

export default {
  components: { ProfileCard },
  data() {
    return {
      profiles: [],
      loading: true,
    };
  },
  methods: {
    async fetchSuggestedProfiles() {
      this.loading = true;
      await wait(2000);
      const { data } = fetchProfiles();
      this.profiles = data;
      this.loading = false;
    },
  },
  created() {
    this.fetchSuggestedProfiles();
  },
};
</script>
