<template>
  <main class="container my-5">
    <h1>Timetable</h1>

    <nav class="rounded-1 bg-white px-4 mt-4 mb-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Bus Lines</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/stops">Stops</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About me</RouterLink>
        </li>
      </ul>
    </nav>

    <slot v-if="shouldShowContent"/>

    <div v-if="loading" class="d-flex justify-content-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger d-flex justify-content-between align-items-center">
      <div>{{ error }}</div>
      <button class="btn btn-outline-light btn-sm" @click="handleClickReload">Reload</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import type {RootState} from '@/store'
import {StopsState} from "@/store/modules/stops";
import {useRoute} from 'vue-router'

const store = useStore<RootState>()
const route = useRoute()

const needsStopsData = computed(() => route.path === '/' || route.path === '/stops')

const loading = computed(() =>
    needsStopsData.value ? store.getters['stops/loading'] as StopsState['loading'] : false
)
const error = computed(() =>
    needsStopsData.value ? store.getters['stops/error'] as StopsState['error'] : null
)
const shouldShowContent = computed(() => !loading.value && !error.value)

const handleClickReload = () => {
  if (needsStopsData.value) {
    store.dispatch('stops/fetchStops')
  }
}

onMounted(() => {
  if (needsStopsData.value) {
    store.dispatch('stops/fetchStops')
  }
})
</script>
