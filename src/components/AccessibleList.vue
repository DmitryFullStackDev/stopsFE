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
          class="list-group-item border-0 border-top fs-8 rounded-0 m-0"
          :class="[
          { 'list-group-item-action': isClickable },
          { active: isClickable ? selectedItem === item.id : false }
          ]"
          :="isClickable ? interactiveAttrs(item) : {}"
      >
        {{ getItem(item) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue'

type Items = Record<string, string | number>

interface Props {
  isClickable?: boolean
  isOverflowAuto?: boolean
  items: Items[] | string[]
  itemKey?: string
  selectedItem?: number
}

const props = defineProps<Props>()
const emit = defineEmits(['handleClick'])
console.log(props.selectedItem)
const getItem = (item: Items | string) => {
  if (typeof item === "object" && props.itemKey) {
    return item[props.itemKey];
  } else {
    return item;
  }
};

const handleSafeClick = (item: Items | string) => {
  emit('handleClick', item);
}

function interactiveAttrs(item: Items | string) {
  return {
    role: 'button',
    tabindex: 0,
    'aria-pressed': false,
    'aria-label': 'Click to select ' + item,
    onClick: () => handleSafeClick(item),
    onKeydown: (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSafeClick(item);
      }
    }
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
