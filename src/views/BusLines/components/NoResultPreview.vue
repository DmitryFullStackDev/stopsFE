<template>
  <DashedBox :isReversed="isReversed">
    <div class="w-100 h-100 d-flex justify-content-center align-items-center">
      <p class="fs-7 m-0 text-custom-grey-500">
        <slot/>
      </p>
    </div>
  </DashedBox>
</template>

<script setup lang="ts">
import DashedBox from '@/components/DashedBox.vue';
import {defineProps} from 'vue'

interface Props {
  isReversed?: boolean
}

const props = defineProps<Props>()
</script>
