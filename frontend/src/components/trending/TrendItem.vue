<template>
  <div
    class="
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
    <h2 class="font-bold text-md text-gray-800 dark:text-white">
      {{hashtag}}
    </h2>
    <p class="text-xs text-gray-400">{{count}} Tweets</p>
  </div>
</template>

<script>
export default {
    props: {
        hashtag: {
            type: String,
            required: true,
        },
        count: {
            type: String,
            required: true,
        },
    },
};
</script>