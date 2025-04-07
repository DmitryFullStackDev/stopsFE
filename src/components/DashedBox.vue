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
          :stroke-dasharray="dashArray"
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

const x = 1
const y = 1
const w = computed(() => width.value - 3)
const h = computed(() => height - 2)
const r = computed(() => borderRadius)

const pathData = computed(() => {
  const right = x + w.value
  const bottom = y + h.value
  const radius = Math.min(r.value, w.value / 2, h.value / 2)

  if (props.isReversed) {
    return `
      M${right} ${y + offset.value}
      L${right} ${y + radius}
      A${radius} ${radius} 0 0 0 ${right - radius} ${y}
      L${x + radius} ${y}
      A${radius} ${radius} 0 0 0 ${x} ${y + radius}
      L${x} ${bottom - radius}
      A${radius} ${radius} 0 0 0 ${x + radius} ${bottom}
      L${right - radius} ${bottom}
      A${radius} ${radius} 0 0 0 ${right} ${bottom - radius}
      Z
    `.replace(/\s+/g, ' ').trim()
  }

  return `
    M${x} ${y + offset.value}
    L${x} ${y + radius}
    A${radius} ${radius} 0 0 1 ${x + radius} ${y}
    L${right - radius} ${y}
    A${radius} ${radius} 0 0 1 ${right} ${y + radius}
    L${right} ${bottom - radius}
    A${radius} ${radius} 0 0 1 ${right - radius} ${bottom}
    L${x + radius} ${bottom}
    A${radius} ${radius} 0 0 1 ${x} ${bottom - radius}
    Z
  `.replace(/\s+/g, ' ').trim()
})

const [dashArray, offset] = (() => {
  const computedDash = computed(() => {
    const r = borderRadius
    const w = width.value - 3
    const h = height - 2

    const arc = (Math.PI * r) / 2
    const horizontal = w - r
    const vertical = h - r
    const perimeter = 2 * (horizontal + vertical) + 4 * arc

    const dashCount = Math.floor(perimeter / 50);
    const dashLength = 20;
    const gapLength = (perimeter / dashCount) - dashLength;

    return {
      dashArray: `${dashLength} ${gapLength}`,
      offset: dashLength / 2
    }
  })

  return [
    computed(() => computedDash.value.dashArray),
    computed(() => computedDash.value.offset)
  ]
})()

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
