<template>
  <main class="container my-5">
    <h1>Timetable</h1>

    <nav class="rounded-1 bg-white px-4 mt-4 mb-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </nav>

    <div v-if="false">
      <section class="rounded-1 bg-white p-4 my-3">
        <h2>Select Bus Line</h2>

        <div class="bus-number-grid gap-2 d-grid">
          <button class="btn btn-primary" type="submit">103</button>
          <button class="btn btn-primary" type="submit">103</button>
        </div>
      </section>

      <section class="stops-and-time d-flex gap-2">

        <DashedBox v-if="false" isReversed>
          <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <p class="fs-7 m-0 text-custom-grey-500">Please select the bus line first</p>
          </div>
        </DashedBox>

        <div class="position-relative  w-50 bg-white rounded-1 overflow-hidden">
          <h2 class="mt-4 px-4">Bus Line: 104</h2>
          <div class="mt-5 mb-4 px-4 d-flex gap-1 align-items-center box-19">
            <h3>Bus Stops</h3>
            <button class="btn btn-link p-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.6666 8.66665L7.99992 11.3333M7.99992 11.3333L5.33325 8.66665M7.99992 11.3333L7.99992 4.66665M6.66658 14.6666H9.33325C11.2001 14.6666 12.1335 14.6666 12.8466 14.3033C13.4738 13.9838 13.9837 13.4738 14.3033 12.8466C14.6666 12.1336 14.6666 11.2002 14.6666 9.33332V6.66665C14.6666 4.7998 14.6666 3.86638 14.3033 3.15334C13.9837 2.52614 13.4738 2.0162 12.8466 1.69662C12.1335 1.33331 11.2001 1.33331 9.33325 1.33331H6.66659C4.79974 1.33331 3.86632 1.33331 3.15328 1.69662C2.52608 2.0162 2.01614 2.52614 1.69656 3.15334C1.33325 3.86638 1.33325 4.7998 1.33325 6.66664V9.33331C1.33325 11.2002 1.33325 12.1336 1.69656 12.8466C2.01614 13.4738 2.52608 13.9838 3.15328 14.3033C3.86632 14.6666 4.79974 14.6666 6.66658 14.6666Z"
                    stroke="#63666E" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <AccessibleList isClickable isOverflowAuto/>
        </div>

        <DashedBox v-if="false">
          <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <p class="fs-7 m-0 text-custom-grey-500">Please select the bus line first</p>
          </div>
        </DashedBox>

        <div class="position-relative  w-50 bg-white rounded-1 overflow-hidden">
          <h2 class="mt-4 px-4">Bus Stop: Rondo Czyżyńskie 10</h2>
          <div class="mt-5 mb-4 px-4 d-flex gap-1 align-items-center box-19">
            <h3>Time</h3>
          </div>

          <AccessibleList isOverflowAuto/>
        </div>

      </section>
    </div>

    <section class="rounded-1 bg-white mt-3 pt-2 overflow-hidden">
      <CustomInput/>

      <div class="mt-5 mb-4 px-4 d-flex gap-1 align-items-center box-19">
        <h3>Bus Stops</h3>
        <button class="btn btn-link p-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.6666 8.66665L7.99992 11.3333M7.99992 11.3333L5.33325 8.66665M7.99992 11.3333L7.99992 4.66665M6.66658 14.6666H9.33325C11.2001 14.6666 12.1335 14.6666 12.8466 14.3033C13.4738 13.9838 13.9837 13.4738 14.3033 12.8466C14.6666 12.1336 14.6666 11.2002 14.6666 9.33332V6.66665C14.6666 4.7998 14.6666 3.86638 14.3033 3.15334C13.9837 2.52614 13.4738 2.0162 12.8466 1.69662C12.1335 1.33331 11.2001 1.33331 9.33325 1.33331H6.66659C4.79974 1.33331 3.86632 1.33331 3.15328 1.69662C2.52608 2.0162 2.01614 2.52614 1.69656 3.15334C1.33325 3.86638 1.33325 4.7998 1.33325 6.66664V9.33331C1.33325 11.2002 1.33325 12.1336 1.69656 12.8466C2.01614 13.4738 2.52608 13.9838 3.15328 14.3033C3.86632 14.6666 4.79974 14.6666 6.66658 14.6666Z"
                stroke="#63666E" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <AccessibleList/>
    </section>
  </main>
</template>

<script>
import DashedBox from '@/components/DashedBox.vue';
import AccessibleList from "@/components/AccessibleList";
import CustomInput from "@/components/CustomInput";


export default {
  name: 'HomeView',
  components: {
    DashedBox,
    AccessibleList,
    CustomInput,
  },
};
</script>


<style scoped>
.bus-number-grid {
  margin: 32px 0 0 0;
  grid-template-columns: repeat(auto-fill, 54px);
}

.box-19 {
  height: 19px;
}
</style>
