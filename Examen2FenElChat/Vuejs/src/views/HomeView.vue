<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Txurdinaga Fly</h1>
        <p class="subtitle">Explora el mundo con la mejor gestión de vuelos.</p>
        <div class="cta-group">
          <RouterLink to="/vuelos" class="boton primario">Ver vuelos</RouterLink>
          <RouterLink to="/consulta" class="boton secundario">Consultar reserva</RouterLink>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <div class="icon">✈️</div>
        <h3>Destinos increíbles</h3>
        <p>Conectamos con las ciudades más importantes y exóticas.</p>
      </div>
      <div class="feature-card">
        <div class="icon">📅</div>
        <h3>Prerreserva fácil</h3>
        <p>Proceso de reserva rápido, sencillo y sin complicaciones.</p>
      </div>
      <div class="feature-card">
        <div class="icon">🔍</div>
        <h3>Gestión transparente</h3>
        <p>Consulta el estado de tus reservas en cualquier momento.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0288d1 0%, #26c6da 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  font-weight: 300;
}

.cta-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.boton {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.boton:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.boton.primario {
  background-color: white;
  color: #0288d1;
}

.boton.secundario {
  background-color: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
}
.boton.secundario:hover {
  background-color: white;
  color: #0288d1;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #eee;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #b3e5fc;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
}
</style>
