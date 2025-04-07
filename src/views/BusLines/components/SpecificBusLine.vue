<template>
  <div class="position-relative  w-50 bg-white rounded-1 overflow-hidden">
    <h2 class="mt-4 px-4">Bus Line: {{ activeBusLine }}</h2>
    <div class="mt-5 mb-4 px-4 d-flex gap-1 align-items-center box-19">
      <h3>Bus Stops</h3>
      <OrderButton :isDescendingOrder="isDescendingOrder" :handleClickChangeOrder="handleClickChangeOrder"/>
    </div>
    <AccessibleList isClickable isOverflowAuto :items="specificBusStops" :handleClick="handleSelectStopClick"
                    itemKey="stop"/>
  </div>
</template>

<script setup lang="ts">
import AccessibleList from "@/components/AccessibleList";
import {useStore} from "vuex";
import {RootState} from "@/store";
import {computed} from "vue";
import OrderButton from "@/components/OrderButton.vue";
import {useOrderButton} from "@/hooks/useOrderButton";
import {StopsState} from "@/store/modules/stops";
import {Stop} from "@/types/common";

const {isDescendingOrder, handleClickChangeOrder} = useOrderButton()

const store = useStore<RootState>();

const activeBusLine = computed(() => store.getters['stops/activeBusLine'] as StopsState["activeBusLine"]);

const specificBusStops = computed(() => {
  const active = store.getters['stops/activeBusLine'] as StopsState["activeBusLine"]
  const busLines = store.getters['stops/busLines'] as StopsState["busLines"]
  let stops: Stop[] = []

  if (busLines) {
    stops = busLines[active].map((el, index) => ({
      stop: el.stop,
      id: index
    }))
  }

  return isDescendingOrder.value ? stops.reverse() : stops
});

const handleSelectStopClick = ({id}: Stop) => {
  store.dispatch('stops/setActiveBusStop', id)
}
</script>
