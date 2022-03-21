<template>
        <!-- Middle -->
        <div class="w-full sm:w-600 h-screen">
          <!-- Header -->
          <div
            class="flex justify-between items-center border-b px-4 py-3 sticky top-0 bg-white dark:bg-dim-900 border-l border-r border-gray-200 dark:border-gray-700"
          >
            <!-- Title -->
            <h2 class=" dark:text-gray-100 font-bold font-sm">
              Home
            </h2>
            <!-- /Title -->
          </div>
          <!-- /Header -->

          <!-- Post Tweet -->
          <div
            class="border-b border-gray-200 dark:border-dim-200 pb-4 border-l border-r"
          >
            <div class="flex flex-shrink-0 p-4 pb-0">
              <div class="w-12 flex items-top">
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                  alt=""
                />
              </div>
              <div class="w-full p-2">
                <textarea
                  class="dark:text-white text-gray-900 placeholder-gray-400 w-full h-10 bg-transparent border-0 focus:outline-none resize-none"
                  placeholder="What's happening?"
                ></textarea>
              </div>
            </div>
            <div class="w-full flex items-top p-2 text-white pl-14">
              <a
                href="#"
                class="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
              >
                <font-awesome-icon icon="fa-regular fa-image" class="w-5 h-5" fill="currentColor" />
               
              </a>

              
              <a
                href="#"
                class="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
              >
              <font-awesome-icon icon="fa-solid fa-bars-progress" class="w-5 h-5" fill="currentColor"/>
              </a>

              <a
                href="#"
                class="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
              >
                <font-awesome-icon icon="fa-regular fa-face-smile" class="w-5 h-5" fill="currentColor" />
              </a>

              <a
                href="#"
                class="text-blue-400 hover:bg-blue-50 dark:hover:bg-dim-800 rounded-full p-2"
              >
                <font-awesome-icon icon="fa-regular fa-calendar" class="w-5 h-5" fill="currentColor" />
               
              </a>

              <a
                href="#"
                class="bg-blue-400 hover:bg-blue-500 text-white rounded-full py-1 px-4 ml-auto mr-1"
              >
                <span class="font-bold text-sm">Tweet</span>
              </a>
            </div>
          </div>


          <!-- Tweet -->
          <div
            class="border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out pb-4 border-l border-r mb-1"
          >
            <div class="flex flex-shrink-0 p-4 pb-0">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-top">
                  <div>
                    <img
                      class="inline-block h-9 w-9 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p
                      class="flex items-center text-base leading-6 font-medium  dark:text-white"
                    >
                      Joe Biden
                      <font-awesome-icon icon="fa-solid fa-badge-check" aria-label="Verified account"
                        fill="currentColor"
                        class="w-4 h-4 ml-1 text-blue-500 dark:text-white"/>
                    
                      <span
                        class="ml-1 text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150"
                      >
                        @JoeBiden . Nov 7
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="pl-16">
              <p
                class="text-base width-auto font-medium  dark:text-white flex-shrink"
              >
                America, I’m honored that you have chosen me to lead our great
                country.<br />
                <br />
                The work ahead of us will be hard, but I promise you this: I
                will be a
                <a href="#" class="text-blue-400 hover:underline">#President</a>
                for all Americans — whether you voted for me or not.<br />
                <br />
                I will keep the faith that you have placed in me.
              </p>

              <div class="flex my-3 mr-2 rounded-2xl border border-gray-600">
                <img
                  class="rounded-2xl"
                  src="https://pbs.twimg.com/media/EnTkhz-XYAEH2kY?format=jpg&name=small"
                  alt=""
                />
              </div>

              <div class="flex">
                <div class="w-full">
                  <div class="flex items-center">
                    <div
                      class="flex-1 flex items-center  dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition duration-350 ease-in-out"
                    >
                    <font-awesome-icon icon="fa-regular fa-comment" fill="currentColor"
                        class="w-5 h-5 mr-2" />
                      12.3 k
                    </div>
                    <div
                      class="flex-1 flex items-center  dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400 transition duration-350 ease-in-out"
                    >
                    <!-- <font-awesome-icon icon="fa-solid fa-repeat" /> -->
                    <font-awesome-icon icon="fa-solid fa-repeat"  
                        fill="currentColor"
                        class="w-5 h-5 mr-2"/>
                      14.1 k
                    </div>
                    <div
                      class="flex-1 flex items-center  dark:text-white text-xs text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition duration-350 ease-in-out"
                    >
                      <font-awesome-icon icon="fa-regular fa-heart"
                        fill="currentColor"
                        class="w-5 h-5 mr-2" />
                      14 k
                    </div>
                    <div
                      class="flex-1 flex items-center  dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition duration-350 ease-in-out"
                    >
                      <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" fill="currentColor"
                        class="w-5 h-5 mr-2"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Tweet -->

          <!-- Spinner -->
          <div
            class="flex items-center justify-center p-4 border-b border-l border-r border-gray-200 dark:border-gray-700"
          >
            <svg class="w-8 h-8 animate-spin-fast">
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="14"
                stroke-width="4"
                style="stroke: rgb(29, 161, 242); opacity: 0.2"
              ></circle>
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="14"
                stroke-width="4"
                style="
                  stroke: rgb(29, 161, 242);
                  stroke-dasharray: 80;
                  stroke-dashoffset: 60;
                "
              ></circle>
            </svg>
          </div>
          <!-- /Spinner -->

          <!-- /Timeline -->
        </div>
        <!-- /Middle -->
</template>

<script>
export default {
    name: 'FeedSection'
}
</script>
