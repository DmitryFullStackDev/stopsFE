<template>
  <SelectBusLine/>

  <section class="d-flex gap-2">
    <NoResultPreview v-if="!shouldShowBusLine" isReversed>
      Please select the bus line first
    </NoResultPreview>

    <SpecificBusLine v-if="shouldShowBusLine"/>

    <NoResultPreview v-if="!shouldShowBusTime">
      Please select the bus line first
    </NoResultPreview>

    <SpecificBusTimeline v-if="shouldShowBusTime"/>

  </section>

</template>

<script setup lang="ts">
import SelectBusLine from "@/views/BusLines/components/SelectBusLine";
import NoResultPreview from "@/views/BusLines/components/NoResultPreview";
import SpecificBusLine from "@/views/BusLines/components/SpecificBusLine";
import SpecificBusTimeline from "@/views/BusLines/components/SpecificBusTimeline";
import {useStore} from "vuex";
import {RootState} from "@/store";
import {computed} from "vue";

const store = useStore<RootState>()

const shouldShowBusLine = computed(() => store.getters['stops/activeBusLine'] > -1)
const shouldShowBusTime = computed(() => store.getters['stops/activeBusStop'])
</script>
