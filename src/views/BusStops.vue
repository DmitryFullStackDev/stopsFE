<template>
  <section class="rounded-1 bg-white mt-3 pt-2 overflow-hidden">
    <CustomInput @handleSearchChange="handleSearchChange"/>

    <TitleBox>
      <h3>Bus Stops</h3>
      <OrderButton :isDescendingOrder="isDescendingOrder" :handleClickChangeOrder="handleClickChangeOrder"/>
    </TitleBox>

    <AccessibleList :items="allStops"/>
  </section>
</template>

<script setup lang="ts">
import AccessibleList from "@/components/AccessibleList";
import CustomInput from "@/components/CustomInput";
import TitleBox from "@/components/TitleBox";
import OrderButton from '@/components/OrderButton.vue'
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
