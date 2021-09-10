<template>
  <div class="h-0 line w-full border-gray-200 mt-2"></div>
  <section class="grid gap-2 grid-template place-items-center">
    <img class="h-64 w-64 object-fill" src="../assets/first.jpg" />
    <img class="h-64 w-64 object-fill" src="../assets/augie.jpg" />
    <img class="h-64 w-64 object-fill" src="../assets/second.jpg" />
    <img class="h-64 w-64 object-fill" src="../assets/third.jpg" />
  </section>
</template>

<script>
export default {};
</script>

<style>
.line {
  border: 1px solid;
}
.grid-template {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>