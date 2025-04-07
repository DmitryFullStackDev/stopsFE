<template>
  <SelectBusLine/>

  <section class="d-flex gap-2">
    <NoResultPreview v-if="false" isReversed>
      Please select the bus line first
    </NoResultPreview>

    <SpecificBusLine/>

    <NoResultPreview v-if="false">
      Please select the bus line first
    </NoResultPreview>

    <SpecificBusTimeline/>

  </section>

</template>

<script setup lang="ts">
import SelectBusLine from "@/views/BusLines/components/SelectBusLine";
import NoResultPreview from "@/views/BusLines/components/NoResultPreview";
import SpecificBusLine from "@/views/BusLines/components/SpecificBusLine";
import SpecificBusTimeline from "@/views/BusLines/components/SpecificBusTimeline";</script>
