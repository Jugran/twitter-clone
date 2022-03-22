<template>
  <div
    class="border-b border-gray-200 dark:border-dim-200 pb-4 border-l border-r"
  >
    <div class="flex flex-shrink-0 p-4">
      <div class="w-12 flex items-top">
        <img
          class="inline-block h-10 w-10 rounded-full"
          :src="require('@/assets/avatars/' + userProfile + '.png')"
          alt=""
        />
      </div>
      <div class="w-full p-2">
        <textarea
          class="
            dark:text-white
            text-gray-900
            placeholder-gray-400
            w-full
            h-15
            bg-transparent
            border-0
            focus:outline-none
            resize-none
          "
          v-model="text" required
          placeholder="What's happening?"
        ></textarea>
      </div>
    </div>
    <div class="w-full flex items-top p-2 text-white pl-14">
      <a
        href="#"
        class="
          text-blue-400
          hover:bg-blue-50
          dark:hover:bg-dim-800
          rounded-full
          p-2
        "
      >
        <font-awesome-icon
          icon="fa-regular fa-image"
          class="w-5 h-5"
          fill="currentColor"
        />
      </a>

      <a
        href="#"
        class="
          text-blue-400
          hover:bg-blue-50
          dark:hover:bg-dim-800
          rounded-full
          p-2
        "
      >
        <font-awesome-icon
          icon="fa-solid fa-bars-progress"
          class="w-5 h-5"
          fill="currentColor"
        />
      </a>

      <a
        href="#"
        class="
          text-blue-400
          hover:bg-blue-50
          dark:hover:bg-dim-800
          rounded-full
          p-2
        "
      >
        <font-awesome-icon
          icon="fa-regular fa-face-smile"
          class="w-5 h-5"
          fill="currentColor"
        />
      </a>

      <a
        href="#"
        class="
          text-blue-400
          hover:bg-blue-50
          dark:hover:bg-dim-800
          rounded-full
          p-2
        "
      >
        <font-awesome-icon
          icon="fa-regular fa-calendar"
          class="w-5 h-5"
          fill="currentColor"
        />
      </a>

      <button
        href="#"
        class="
          bg-blue-400
          hover:bg-blue-500
          text-white
          rounded-full
          py-1
          px-4
          ml-auto
          mr-1
        "
        @click.prevent="submit()"
      >
        <span class="font-bold text-sm">Tweet</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        userProfile: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        submit() {
            this.$emit('tweet', this.text);
            this.text = '';
        }
    }
};
</script>
