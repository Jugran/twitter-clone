<template>
  <div class="flex flex-shrink-0 p-4 pb-0">
    <a href="#" class="flex-shrink-0 group block">
      <div class="flex items-top">
        <div>
          <img
            class="inline-block h-9 w-9 rounded-full"
            :src="require('@/assets/avatars/' + avatar + '.png')"
            alt=""
          />
        </div>
        <div class="ml-3">
          <p
            class="
              flex
              items-center
              text-base
              leading-6
              font-medium
              dark:text-white
            "
          >
            {{user}}
            <font-awesome-icon :v-show="verified"
              icon="fa-solid fa-circle-check"
              aria-label="Verified account"
              fill="currentColor"
              class="w-4 h-4 ml-1 text-blue-500 dark:text-white"
            />

            <span
              class="
                ml-1
                text-sm
                leading-5
                font-medium
                text-gray-400
                group-hover:text-gray-300
                transition
                ease-in-out
                duration-150
              "
            >
              {{username}} . {{timestamp}}
            </span>
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
    props: {
        user: {
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
        timestamp: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>
