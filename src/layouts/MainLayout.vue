<template>
  <main class="container my-5">
    <h1>Timetable</h1>

    <nav class="rounded-1 bg-white px-4 mt-4 mb-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </nav>
    
    <slot/>
  </main>
</template>
