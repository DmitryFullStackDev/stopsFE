<template>
  <div ref="boxRef" class="position-relative  w-50">
    <svg
        :width="width"
        :height="height"
        :viewBox="`0 0 ${width} ${height}`"
        preserveAspectRatio="none"
    >
      <path
          :d="pathData"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
      />
      <path
          :d="pathTopLine"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          :stroke-dasharray="dashArray"
      />
      <path
          :d="pathData2"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
      />
      <path
          :d="pathRightLine"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          :stroke-dasharray="dashVerticalArray"
      />
      <path
          :d="pathData3"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
      />
      <path
          :d="pathBottomLine"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          :stroke-dasharray="dashArray"
      />
      <path
          :d="pathData4"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
      />
      <path
          :d="pathLeftLine"
          fill="none"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          :stroke-dasharray="dashVerticalArray"
      />
    </svg>

    <div class="position-absolute top-0 right-0 w-100 h-100">
      <slot/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {computed, defineProps, onBeforeUnmount, onMounted, ref} from 'vue'

interface Props {
  isReversed: boolean
}

const props = defineProps<Props>()
const boxRef = ref<HTMLDivElement>()
const width = ref(0)

const height = 400
const strokeColor = '#9A9DA4'
const strokeWidth = 2
const borderRadius = 4
const offset = 20
const x = 1
const y = 1

const w = computed(() => width.value - 2)
const h = computed(() => height - 2)
const radius = computed(() => Math.min(borderRadius, w.value / 2, h.value / 2))
const right = computed(() => x + w.value)
const indentation = computed(() => 2 * offset)
const bottom = computed(() => y + h.value)

const dashArray = `${offset} ${offset}`
const dashVerticalArray = `${offset} ${offset + 2}`

const pathData = computed(() => `
    M${x} ${y + offset}
    L${x} ${y + radius.value}
    A${radius.value} ${radius.value} 0 0 1 ${x + radius.value} ${y}
    L${x + offset} ${y}
  `)

const pathTopLine = computed(() => `
    M${x + indentation.value} ${y}
    L${right.value - indentation.value} ${y}
  `)

const pathBottomLine = computed(() => `
    M${x + indentation.value} ${bottom.value}
    L${right.value - indentation.value} ${bottom.value}
  `)

const pathLeftLine = computed(() => `
    M${x} ${y + indentation.value}
    L${x} ${bottom.value - indentation.value}
  `)

const pathRightLine = computed(() => `
    M${right.value} ${y + indentation.value}
    L${right.value} ${bottom.value - indentation.value}
  `)

const pathData2 = computed(() => `
  M${x} ${bottom.value - offset}
  L${x} ${bottom.value - radius.value}
  A${radius.value} ${radius.value} 0 0 0 ${x + radius.value} ${bottom.value}
  L${x + offset} ${bottom.value}
  `)

const pathData3 = computed(() => `
  M${right.value - offset} ${y}
  L${right.value - radius.value} ${y}
  A${radius.value} ${radius.value} 0 0 1 ${right.value} ${y + radius.value}
  L${right.value} ${y + offset}
  `)

const pathData4 = computed(() => `
  M${right.value} ${bottom.value - offset}
  L${right.value} ${bottom.value - radius.value}
  A${radius.value} ${radius.value} 0 0 1 ${right.value - radius.value} ${bottom.value}
  L${right.value - offset} ${bottom.value}
  `)

function updateSize() {
  if (boxRef.value) {
    width.value = +boxRef.value.clientWidth
  }
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize)
})
</script>
