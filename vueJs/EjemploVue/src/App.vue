<script setup>
import { useRouter } from 'vue-router'
import { onMounted, computed, ref } from 'vue'
import axios from 'axios'
const router = useRouter()

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <main class="flex-1 w-full">
      <router-view>
        
      </router-view>

    </main>
</template>

<style scoped></style>
