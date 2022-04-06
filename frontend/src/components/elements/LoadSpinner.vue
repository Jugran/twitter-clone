<template>
  <div
    class="
      flex
      items-center
      p-2
      justify-center
      transition
      duration-350
      ease-in-out
    "
  >
    <svg v-bind:class="`w-${size} h-${size} animate-spin-fast`">
      <circle
        v-bind:cx="diameter"
        v-bind:cy="diameter"
        fill="none"
        v-bind:r="radius"
        stroke-width="4"
        style="stroke: rgb(29, 161, 242); opacity: 0.2"
      ></circle>
      <circle
        v-bind:cx="diameter"
        v-bind:cy="diameter"
        fill="none"
        v-bind:r="radius"
        stroke-width="4"
        style="
          stroke: rgb(29, 161, 242);
          stroke-dasharray: 80;
          stroke-dashoffset: 60;
        "
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LoadSpinner",
  props: {
    size: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    radius() {
      return Math.round(this.size * 1.5);
    },
    diameter() {
      return this.size * 2;
    },

  },
};
</script>
