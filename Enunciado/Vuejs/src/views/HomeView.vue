<template>
  <div class="home">
    <div class="header-section">
      <div class="company-info">
        <h1>Txurdinaga Tech</h1>
        <p class="subtitle">Portal de Gestión de Vehículos Corporativos</p>
      </div>
    </div>

    <div class="content-grid">
      <div class="main-info">
        <h2>Sistema de Reservas</h2>
        <p>Accede a la flota de vehículos eléctricos de la empresa. Este sistema permite a los empleados consultar, reservar y gestionar vehículos según su perfil y necesidades profesionales.</p>
        
        <div class="quick-stats">
          <div class="stat">
            <span class="number">20</span>
            <span class="label">Vehículos</span>
          </div>
          <div class="stat">
            <span class="number">4</span>
            <span class="label">Categorías</span>
          </div>
          <div class="stat">
            <span class="number">100%</span>
            <span class="label">Eléctrico</span>
          </div>
        </div>
      </div>

      <div class="features">
        <h3>Funcionalidades</h3>
        <ul>
          <li><span class="icon">📋</span> Catálogo completo de vehículos</li>
          <li><span class="icon">🔍</span> Búsqueda y filtrado avanzado</li>
          <li><span class="icon">📅</span> Reserva según disponibilidad</li>
          <li><span class="icon">👤</span> Gestión personal de reservas</li>
        </ul>
      </div>
    </div>

    <div class="info-banner">
      <p>Movilidad sostenible • Gestión eficiente • Compromiso ambiental</p>
    </div>
  </div>
</template>

<script setup>
// Vista de inicio - Portal corporativo de Txurdinaga Tech
</script>

<style scoped>
.home {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Header Section */
.header-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e4e8;
}

.company-info h1 {
  font-size: 2.2rem;
  color: #1e3c72;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  color: #5a6c7d;
  margin: 0;
  font-weight: 400;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.main-info h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.main-info p {
  color: #5a6c7d;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Quick Stats */
.quick-stats {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat .number {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3c72;
  line-height: 1;
}

.stat .label {
  font-size: 0.85rem;
  color: #5a6c7d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

/* Features */
.features {
  background: #f8fafb;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #1e3c72;
}

.features h3 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0 0 1.5rem 0;
  font-weight: 600;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  color: #5a6c7d;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e4e8;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
}

.features li:last-child {
  border-bottom: none;
}

.features .icon {
  font-size: 1.2rem;
  opacity: 0.8;
}

/* Info Banner */
.info-banner {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 8px;
  text-align: center;
}

.info-banner p {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 400;
  opacity: 0.95;
}

/* Responsive */
@media (max-width: 768px) {
  .home {
    padding: 2rem 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .company-info h1 {
    font-size: 1.75rem;
  }
  
  .quick-stats {
    gap: 1.5rem;
  }
}
</style>
