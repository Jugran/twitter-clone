<template>
  <div class="w-full mb-2">


    <div class="w-full bg-cover bg-no-repeat bg-center" style="height: 200px">
      <img
        class="opacity-0 w-full h-full"
        :src="require('@/assets/avatars/' + (user.avatar || 'blank') + '.png')"
        alt=""
      />
    </div>
    <div class="p-4">
      <div class="relative flex w-full">
        <!-- Avatar -->
        <div class="flex flex-1">
          <div style="margin-top: -6rem">
            <div
              style="height: 9rem; width: 9rem"
              class="md rounded-full relative avatar"
            >
              <img
                style="height: 9rem; width: 9rem"
                class="md rounded-full relative border-4 border-gray-900"
                :src="
                  require('@/assets/avatars/' +
                    (user.avatar || 'blank') +
                    '.png')
                "
                alt=""
              />
              <div class="absolute"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile info -->
      <div class="space-y-1 justify-center w-full mt-3 ml-3">
        <!-- User basic-->
        <div>
          <h2 class="text-xl leading-6 font-bold text-white">
            {{ user.name }}
          </h2>
          <p class="text-sm leading-5 font-medium text-gray-600">
            {{ user.username }}
          </p>
        </div>
        <!-- Description and others -->
        <div class="mt-3">
          <p class="text-white leading-tight mb-2">{{ user.bio }}</p>
          <div class="text-gray-600 flex">
            <span class="flex mr-2"
              ><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon">
                <g>
                  <path
                    d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
                  ></path>
                  <circle cx="7.032" cy="8.75" r="1.285"></circle>
                  <circle cx="7.032" cy="13.156" r="1.285"></circle>
                  <circle cx="16.968" cy="8.75" r="1.285"></circle>
                  <circle cx="16.968" cy="13.156" r="1.285"></circle>
                  <circle cx="12" cy="8.75" r="1.285"></circle>
                  <circle cx="12" cy="13.156" r="1.285"></circle>
                  <circle cx="7.032" cy="17.486" r="1.285"></circle>
                  <circle cx="12" cy="17.486" r="1.285"></circle>
                </g>
              </svg>
              <span class="leading-5 ml-1">{{ user.joined }}</span></span
            >
          </div>
        </div>
        <div
          class="
            pt-3
            flex
            justify-start
            items-start
            w-full
            divide-x divide-gray-800 divide-solid
          "
        >
          <div class="text-center pr-3">
            <span class="font-bold text-white">{{ user.following }}</span
            ><span class="text-gray-600"> Following</span>
          </div>
          <div class="text-center px-3">
            <span class="font-bold text-white">{{ user.followers }} </span
            ><span class="text-gray-600"> Followers</span>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-gray-800" />
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "UserBio",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>