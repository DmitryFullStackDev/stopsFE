<template>
  <main class="container">
    <h1>Timetable</h1>

    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </nav>

    <section class="bus-number-selection">
      <h2>Select Bus Line</h2>

      <div class="bus-number-grid">
        <button class="btn btn-primary" type="submit">103</button>
        <button class="btn btn-primary" type="submit">103</button>
      </div>
    </section>

    <section class="stops-and-time">

      <DashedBox>
        <div class="p-4">
          <h2 class="text-xl font-bold">Dashed Box Title</h2>
          <p>Some content inside the box.</p>
        </div>
      </DashedBox>

      <DashedBox>
        <div class="p-4">
          <h2 class="text-xl font-bold">Dashed Box Title</h2>
          <p>Some content inside the box.</p>
        </div>
      </DashedBox>

    </section>


  </main>
</template>

<script>
import DashedBox from '@/components/DashedBox.vue';

export default {
  name: 'HomeView',
  components: {
    DashedBox,
  },
};
</script>


<style scoped>
.container {
  margin: 40px auto;
}

nav {
  background: white;
  padding: 0 24px;
  border-radius: 4px;
  margin: 24px 0 16px 0;
}

.bus-number-selection {
  background: white;
  padding: 24px;
  border-radius: 4px;
  margin: 16px 0;
}

.bus-number-grid {
  margin: 32px 0 0 0;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, 54px);
}

.stops-and-time {
  display: flex;
  gap: 8px;
}

.stops, .time {
  height: 444px;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  width: 100%;
  position: relative;

}

.time svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.dashed-box-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;


}

.hello {
  width: 50px;
}

.custom-dashed-box {
  height: 100px; /* Set height for the box */
  width: 100%; /* Dynamic width */
  background: repeating-linear-gradient(
      90deg, /* Horizontal line */ #000, /* Dash color */ #000 15px, /* Dash length */ transparent 15px, /* Space after dash */ transparent 30px /* Space length */
  );
  border-radius: 20px; /* Round corners */
  box-sizing: border-box; /* Ensure padding/border does not affect width */
  margin: 10px 0; /* Optional margin */
}

</style>
