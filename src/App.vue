<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
import Posts from "./components/Posts.vue";
</script>

<template>
  <Navbar />
  <main class="md:w-2/5 sm:w-4/5 mx-auto overflow-x-hidden">
    <Profile />
    <Posts />
  </main>

  <footer class="text-center my-6 w-full">
    <a href="https://github.com/TheOguzhan/EnglishWork">Github</a>
  </footer>
</template>

<style>
</style>
