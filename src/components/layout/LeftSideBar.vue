<template>
    <!-- Left -->
    <div class="w-68 xs:w-88 xl:w-275 h-screen">
        <div
        class="flex flex-col h-screen xl:pr-3 fixed overflow-y-auto w-68 xs:w-88 xl:w-275"
        >
        <!-- Logo -->
        <a class="flex my-2 justify-center xl:justify-start" href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" class="w-8 h-8 text-blue-400 dark:text-white" fill="currentColor" />
        </a>
        <!-- /Logo -->

        <!-- Nav -->
        <nav class="mt-5">
            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-blue-400 mb-8 transition duration-350 ease-in-out">

                <font-awesome-icon icon="fa-solid fa-house" fill="currentColor" class="h-6 w-6"/>
                <span class="hidden xl:block ml-4 font-bold text-md">Home</span>
            </a>

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

            <a
            href="#"
            class="flex items-center justify-center xl:justify-start text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 mb-8 transition duration-350 ease-in-out"
            >

            <font-awesome-icon icon="fa-regular fa-user" fill="currentColor" class="h-6 w-6" />
            <span class="hidden xl:block ml-4 font-bold text-md"
                >Profile</span>
            </a>


            <a
            href="#"
            class="mx-auto w-11 h-11 xl:w-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 rounded-full text-white font-bold font-sm transition duration-350 ease-in-out mb-10"
            >
            <font-awesome-icon icon="fa-solid fa-pen" fill="currentColor" class="block xl:hidden h-6 w-6"/>
            <span class="hidden xl:block font-bold text-md">Tweet</span>
            </a>
        </nav> 

        <!-- User Menu -->
        <div
            class="w-14 xl:w-full mx-auto mt-auto flex flex-row justify-between mb-5 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 p-2 cursor-pointer transition duration-350 ease-in-out"
        >
            <div class="flex flex-row">
            <img
                class="w-10 h-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                alt="Joe Biden"
            />
            <div class="hidden xl:block flex-col ml-2">
                <h1 class="text-gray-800 dark:text-white font-bold text-sm">
                Joe Biden
                </h1>
                <p class="text-gray-400 text-sm">@JoeBiden</p>
            </div>
            </div>
            <div class="hidden xl:block">
            <div
                class="flex items-center h-full text-gray-800 dark:text-white"
            >
                <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4 mr-2"
                >
                <g>
                    <path
                    d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
                    ></path>
                </g>
                </svg>
            </div>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftNavBar'
}
</script>
