<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
import Posts from "./components/Posts.vue";
</script>

<template>
  <Navbar />
  <main class="max-w-70 w-2/5 mx-auto">
    <Profile />
    <Posts />
  </main>
</template>

<style>
</style>
