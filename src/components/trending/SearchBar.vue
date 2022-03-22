<template>
  <div class="relative m-2">
    <div
      class="
        absolute
        text-gray-600
        flex
        items-center
        pl-4
        h-full
        cursor-pointer
      "
      @click="onSearch()"
    >
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="icon icon-tabler icon-tabler-mail"
        fill="none"
      />
    </div>
    <input
      class="
        w-full
        bg-gray-200
        dark:bg-dim-400
        border-gray-200
        dark:border-dim-400
        text-gray-100
        focus:bg-gray-100
        dark:focus:bg-dim-900
        focus:outline-none focus:border focus:border-blue-200
        font-normal
        h-9
        flex
        items-center
        pl-12
        text-sm
        rounded-full
        border
        shadow
      "
      placeholder="Search Twitter" 
      v-model="search"
      v-on:keyup.enter="onSearch()"

    />
      <!-- @blur="search = ''" -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        };
    },
    methods: {
        onSearch() {
            this.$emit("search", this.search);
            console.log("🚀 onSearch ", this.search)
        }
    }
};
</script>

<style>
</style>