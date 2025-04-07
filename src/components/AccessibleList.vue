<template>
  <div
      class=" rounded-1"
      :class="[
      {'overflow-auto': isOverflowAuto}
      ]"
  >
    <ul class="list-group" role="list">
      <li
          v-for="(item, index) in items"
          :key="index"
          class="list-group-item border-0 border-top fs-8 rounded-0"
          :class="[
          { 'list-group-item-action': isClickable },
          { active: selectedItem === item }
          ]"
          :="isClickable ? interactiveAttrs(item) : {}"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue'

interface Props {
  isClickable?: boolean
  isOverflowAuto?: boolean
}

const props = defineProps<Props>()

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 1', 'Item 2', 'Item 3', 'Item 4'])
const selectedItem = ref(null)

function handleClick(item: any) {
  selectedItem.value = item
  alert(`You clicked on: ${item}`)
}

function interactiveAttrs(item: any) {
  return {
    role: 'button',
    tabindex: 0,
    'aria-pressed': false,
    'aria-label': 'Click to select ' + item,
    onClick: () => handleClick(item),
    onKeydownEnter: () => handleClick(item),
    onKeydownSpace: () => handleClick(item),
  }
}
</script>

<style scoped>
.overflow-auto {
  height: 277px;
}

.list-group-item {
  padding: 20px 24px;
}
</style>
