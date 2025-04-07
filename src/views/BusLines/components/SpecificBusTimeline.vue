<template>
  <div class="position-relative  w-50 bg-white rounded-1 overflow-hidden">
    <h2 class="mt-4 px-4">Bus Stop: {{ activeBusStop }}</h2>
    <div class="mt-5 mb-4 px-4 d-flex gap-1 align-items-center box-19">
      <h3>Time</h3>
    </div>

    <AccessibleList isOverflowAuto :items="activeBusLine"/>
  </div>
</template>

<script setup lang="ts">
import AccessibleList from "@/components/AccessibleList";
import {useStore} from "vuex";
import {RootState} from "@/store";
import {computed} from "vue";
import {BusLines} from "@/helpers/mapBusTable";

const store = useStore<RootState>();

const activeBusStop = computed(() => store.getters['stops/activeBusStop']);
const activeBusLine = computed(() => {
  const busLines = store.getters['stops/busLines'] as BusLines
  const activeBusLine = store.getters['stops/activeBusLine']
  
  return busLines[activeBusLine][activeBusStop.value]
});
</script>
