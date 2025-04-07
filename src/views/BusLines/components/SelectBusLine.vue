<template>
  <section class="rounded-1 bg-white p-4 my-3">
    <h2>Select Bus Line</h2>

    <div class="bus-number-grid gap-2 d-grid">
      <button
          v-for="item in busLines"
          class="btn btn-primary"
          :class="[
              {active: item === activeBusLine}
          ]"
          type="button"
          :key="item"
          @click="handleClickChooseNumber(item)"
      >{{ item }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useStore} from 'vuex'
import type {RootState} from '@/store'
import {StopsState} from "@/store/modules/stops";

const store = useStore<RootState>()

const busLines = computed(() => {
  const busLines = store.getters['stops/busLines'] as StopsState["busLines"]

  if (busLines) {
    return Object.keys(busLines)

  }

  return []
})

const activeBusLine = computed(() => store.getters['stops/activeBusLine'] as StopsState["busLines"])

const handleClickChooseNumber = (busLine: number) => {
  store.dispatch('stops/setActiveBusLine', busLine)
}
</script>


<style scoped>
.bus-number-grid {
  margin: 32px 0 0 0;
  grid-template-columns: repeat(auto-fill, 54px);
}
</style>
