<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">School Registration</RouterLink>
      </nav>
    </div>
  </header>
  </main>
  <RouterView />
</template>

<style scoped>
header {
  background: #f1f1f1;
  padding: 8px;
  border-radius: 0.5rem;
  margin: 1rem 0;
}
.main {
  background: #f1f1f1;
}
nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
a {
  text-decoration: none;
}

</style>
