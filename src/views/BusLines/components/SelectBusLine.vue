<template>
  <section class="rounded-1 bg-white p-4 my-3">
    <h2>Select Bus Line</h2>

    <div class="bus-number-grid gap-2 d-grid">
      <button class="btn btn-primary" type="submit">103</button>
      <button class="btn btn-primary" type="submit">103</button>
    </div>
  </section>
</template>


<style scoped>
.bus-number-grid {
  margin: 32px 0 0 0;
  grid-template-columns: repeat(auto-fill, 54px);
}
</style>
