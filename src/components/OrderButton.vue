<template>
  <button @click="handleClickChangeOrder" class="btn btn-link p-0">
    <svg
        :style="{
              transform: isDescendingOrder ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.3s ease'
            }"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M10.6666 8.66665L7.99992 11.3333M7.99992 11.3333L5.33325 8.66665M7.99992 11.3333L7.99992 4.66665M6.66658 14.6666H9.33325C11.2001 14.6666 12.1335 14.6666 12.8466 14.3033C13.4738 13.9838 13.9837 13.4738 14.3033 12.8466C14.6666 12.1336 14.6666 11.2002 14.6666 9.33332V6.66665C14.6666 4.7998 14.6666 3.86638 14.3033 3.15334C13.9837 2.52614 13.4738 2.0162 12.8466 1.69662C12.1335 1.33331 11.2001 1.33331 9.33325 1.33331H6.66659C4.79974 1.33331 3.86632 1.33331 3.15328 1.69662C2.52608 2.0162 2.01614 2.52614 1.69656 3.15334C1.33325 3.86638 1.33325 4.7998 1.33325 6.66664V9.33331C1.33325 11.2002 1.33325 12.1336 1.69656 12.8466C2.01614 13.4738 2.52608 13.9838 3.15328 14.3033C3.86632 14.6666 4.79974 14.6666 6.66658 14.6666Z"
          stroke="#63666E" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  isDescendingOrder: boolean
  handleClickChangeOrder: () => void
}

const props = defineProps<Props>()
</script>
