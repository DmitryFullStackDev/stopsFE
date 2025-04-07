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
      </ul>
    </nav>

    <slot/>
  </main>
</template>
