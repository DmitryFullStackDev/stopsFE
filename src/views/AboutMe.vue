<template>
  <section class="rounded-1 bg-white mt-3 p-3 d-flex flex-column gap-2">
    <div class="d-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/dmitry-yushkevich-a1576a219" target="_blank" class="link-secondary fs-7">Linkedin</a>
    </div>
    <div class="d-flex gap-2 align-items-center">
      <a href="https://github.com/DmitryFullStackDev" target="_blank" class="link-secondary fs-7">Github</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {RootState} from "@/store";
import {computed, ref} from "vue";
import {useOrderButton} from "@/hooks/useOrderButton";
import {StopsState} from "@/store/modules/stops";

const {isDescendingOrder, handleClickChangeOrder} = useOrderButton()

const store = useStore<RootState>();
const search = ref('')

const allStops = computed(() => {
  const stops = store.getters['stops/allStops'] as StopsState["allStops"]
  const filtratedStops = stops.filter(item =>
      item.toLowerCase().includes(search.value.toLowerCase())
  )

  return isDescendingOrder.value ? filtratedStops.reverse() : filtratedStops
});

const handleSearchChange = (message: string) => {
  search.value = message
}
</script>
