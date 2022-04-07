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
      transition
      duration-350
      ease-in-out
    "
  >
    <div class="flex flex-row justify-between p-2">
      <div class="flex flex-row">
        <img
          class="w-10 h-10 rounded-full"
          :src="require('@/assets/avatars/' + avatar + '.png')"
          :alt="username"
        />
        <div class="flex flex-col ml-2">
          <h1 class="text-gray-900 dark:text-white font-bold text-sm">
            {{name}}
          </h1>
          <p class="text-gray-400 text-sm">@{{username}}</p>
        </div>
      </div>
      <div class="">
        <div class="flex items-center h-full text-gray-800 dark:text-white">
          <button
            href="#"
            class="
              text-xs
              font-bold
              text-blue-400
              px-4
              py-1
              rounded-full
              border-2 border-blue-400
            "
            @click.prevent="follow()"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        id: {
          type: Number
        },
        name: {
            name: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        follow() {
            this.$emit('follow', this.id);
        }
    }
};
</script>