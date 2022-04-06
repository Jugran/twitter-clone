<template>
  <div class="flex">
    <div class="w-full">
      <div class="flex items-center">
        <div
          class="
            flex-1 flex
            items-center
            dark:text-white
            text-xs text-gray-400
            hover:text-blue-400
            dark:hover:text-blue-400
            transition
            duration-350
            ease-in-out
            cursor-pointer
          "
        >
          <font-awesome-icon
            icon="fa-regular fa-comment"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          />
          {{ replies }}
        </div>
        <div
          class="
            flex-1 flex
            items-center
            dark:text-white
            text-xs text-gray-400
            hover:text-green-400
            dark:hover:text-green-400
            transition
            duration-350
            cursor-pointer
            ease-in-out
          "
        >
          <!-- <font-awesome-icon icon="fa-solid fa-repeat" /> -->
          <font-awesome-icon
            icon="fa-solid fa-repeat"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          />
          {{ retweets }}
        </div>
        <div
          class="
            flex-1 flex
            items-center
            dark:text-white
            text-xs text-gray-400
            hover:text-red-600
            dark:hover:text-red-600
            transition
            duration-350
            cursor-pointer
            ease-in-out
          "
        >
          <font-awesome-icon
            icon="fa-regular fa-heart"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          />
          {{ likes }}
        </div>
        <div
          class="
            flex-1 flex
            items-center
            dark:text-white
            text-xs text-gray-400
            hover:text-blue-400
            dark:hover:text-blue-400
            transition
            duration-350
            cursor-pointer
            ease-in-out
          "
        >
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-from-bracket"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    retweets: String,
    likes: String,
    replies: String,
  },
};
</script>