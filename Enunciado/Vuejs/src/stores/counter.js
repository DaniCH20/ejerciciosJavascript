import { defineStore } from 'pinia'

/**
 * Store de ejemplo - Los alumnos deberán crear su propio store
 * para gestionar la lista de vehículos en revisión
 */
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2
  },
  
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
