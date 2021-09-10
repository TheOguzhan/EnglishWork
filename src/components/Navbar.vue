<template>
  <nav class="md:grid-cols-5 sm:grid-cols-2 grid navbar-shadow h-14">
    <div
      class="
        flex
        items-center
        md:justify-between
        xl:justify-between
        2xl:justify-between
        md:col-start-2 md:col-span-3
        sm:col-span-2
        sm:justify-evenly
        justify-evenly
      "
    >
      <img
        src="../assets/Instagram.svg"
        class="
          bg-white
          h-12
          w-auto
          float-right
          hidden
          xl:block
          2xl:block
          md:block
          sm:hidden
        "
      />
      <input
        class="outline-none bg-gray-100 text-center border-2 p-0.5"
        placeholder="search"
      />
      <div class="flex justify-between items-center min-w-max">
        <button class="bg-blue-500 px-3 py-1 text-white rounded">Log In</button>
        <button class="text-blue-500 px-3 py-1 bg-white rounded">
          Sign Up
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style>
.navbar-shadow {
  border-bottom: 1px solid #00000055;
}
</style>