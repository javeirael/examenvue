<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
      <nav class="navbar">
        <RouterLink to="/task">Tarea</RouterLink>
      </nav>
      <div class="router-view-wrapper">
        <RouterView />
    </div>
    </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #353f40; 
  color: white; /* Cambia el color del texto según tus preferencias */
  padding: 1rem;
  text-align: end;
  z-index: 99999999;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 1rem;
}

.navbar a:hover {
  background-color: #33a177; 
  border-radius: 10px;
}

.router-view-wrapper {
  margin-top: 2rem; 
}</style>
