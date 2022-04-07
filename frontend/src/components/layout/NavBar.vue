<template>
          <nav class="mt-5">
            <router-link
            to="/feed" exact
            class="flex items-center justify-center xl:justify-start text-blue-400 mb-8 transition duration-350 ease-in-out">

                <font-awesome-icon icon="fa-solid fa-house" fill="currentColor" class="h-6 w-6"/>
                <span class="hidden xl:block ml-4 font-bold text-md">Home</span>
            </router-link>

            <div v-show="false">

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
                <font-awesome-icon icon="fa-solid fa-hashtag" fill="currentColor" class="h-6 w-6" />
                <span class="hidden xl:block ml-4 font-bold text-md"
                >Explore</span>
            </a>

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out">
                <font-awesome-icon icon="fa-regular fa-bell" fill="currentColor" class="h-6 w-6" />
                <span class="hidden xl:block ml-4 font-bold text-md"
                >Notifications</span>
            </a>

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >

                <font-awesome-icon icon="fa-regular fa-envelope" fill="currentColor" class="h-6 w-6" />
                <span class="hidden xl:block ml-4 font-bold text-md"
                    >Messages</span>
            </a>

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
                <font-awesome-icon icon="fa-regular fa-bookmark" fill="currentColor" class="h-6 w-6" />
                <span class="hidden xl:block ml-4 font-bold text-md"
                    >Bookmarks</span>
            </a>

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >
                <font-awesome-icon icon="fa-solid fa-bars" fill="currentColor" class="h-6 w-6" />
                <span class="hidden xl:block ml-4 font-bold text-md">
                    Lists
                </span>
            </a>

            </div>


            <router-link to="/profile" exact
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >

            <font-awesome-icon icon="fa-regular fa-user" fill="currentColor" class="h-6 w-6" />
            <span class="hidden xl:block ml-4 font-bold text-md"
                >Profile</span>
            </router-link>


            <!-- <a
            href="#"
            class="mx-auto w-11 h-11 xl:w-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10"
            >
            <font-awesome-icon icon="fa-solid fa-pen" fill="currentColor" class="block xl:hidden h-6 w-6"/>
            <span class="hidden xl:block font-bold text-md">Tweet</span>
            </a> -->
        </nav> 
</template>

<script>
export default {
    name: "NavBar"
}
</script>
