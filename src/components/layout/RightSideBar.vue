<template>
   <!-- Right -->
    <div class="hidden md:block w-290 lg:w-350 h-screen">
      <div
        class="flex flex-col fixed overflow-y-auto w-290 lg:w-350 h-screen"
      >
        <!-- search bar -->
        <search-bar />

        <!-- What’s happening -->

        <trending-topics />

        <!-- Who to follow -->
        <profile-suggestions />

        <footer>
          <ul class="text-xs text-gray-500 my-4 mx-2">
            <li class="inline-block mx-2">
              <a class="hover:underline" href="#">Terms of Service</a>
            </li>
            <li class="inline-block mx-2">
              <a class="hover:underline" href="#">Privacy Policy</a>
            </li>
            <li class="inline-block mx-2">
              <a class="hover:underline" href="#">Cookie Policy</a>
            </li>
            <li class="inline-block mx-2">
              <a class="hover:underline" href="#">Ads info</a>
            </li>
            <li class="inline-block mx-2">
              <a class="hover:underline" href="#">More</a>
            </li>
            <li class="inline-block mx-2">© 2020 Twitter, Inc.</li>
          </ul>
        </footer>
      </div>
    </div>
</template>

<script>
import ProfileSuggestions from '../trending/ProfileSuggestions.vue';
import SearchBar from '../trending/SearchBar.vue';
import TrendingTopics from '../trending/TrendingTopics.vue';

export default {
    name: 'RightNavBar',
    components: {
        SearchBar,
        TrendingTopics,
        ProfileSuggestions
    }
}
</script>