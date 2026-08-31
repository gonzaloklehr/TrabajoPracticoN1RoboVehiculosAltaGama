// Registros de robo de vehiculos cargados para el mapa y los graficos.
const registros = [
  {
    id: 1,
    fecha: "18/04/2026",
    hora: "22:35",
    barrio: "Palermo",
    lugar: "Av. del Libertador 4200",
    tipo: "SUV",
    marca: "Toyota",
    modelo: "SW4",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    lat: -34.573,
    lng: -58.437,
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No"
  },
  {
    id: 2,
    fecha: "23/04/2026",
    hora: "23:50",
    barrio: "Palermo",
    lugar: "Av. Figueroa Alcorta 5100",
    tipo: "SUV",
    marca: "Volkswagen",
    modelo: "Taos Highline",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Villa Lugano",
    lat: -34.565,
    lng: -58.425
  },
  {
    id: 3,
    fecha: "29/04/2026",
    hora: "01:15",
    barrio: "Recoleta",
    lugar: "Av. del Libertador 1500",
    tipo: "Sedán",
    marca: "Mercedes-Benz",
    modelo: "Clase C",
    anio: 2022,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.589,
    lng: -58.392
  },
  {
    id: 4,
    fecha: "04/05/2026",
    hora: "21:40",
    barrio: "Belgrano",
    lugar: "Av. del Libertador 6100",
    tipo: "SUV",
    marca: "Audi",
    modelo: "Q5",
    anio: 2023,
    situacion: "Ingreso a cochera particular",
    modus_operandi: "Intercepción al conductor",
    recuperado: "Sí, Vicente López",
    lat: -34.561,
    lng: -58.448
  },
  {
    id: 5,
    fecha: "09/05/2026",
    hora: "00:25",
    barrio: "Palermo",
    lugar: "Av. Cerviño 3900",
    tipo: "SUV",
    marca: "Jeep",
    modelo: "Compass Limited",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.582,
    lng: -58.418
  },
  {
    id: 6,
    fecha: "14/05/2026",
    hora: "23:10",
    barrio: "Recoleta",
    lugar: "Av. Figueroa Alcorta 3000",
    tipo: "SUV",
    marca: "BMW",
    modelo: "X3",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, San Martín",
    lat: -34.583,
    lng: -58.402
  },
  {
    id: 7,
    fecha: "20/05/2026",
    hora: "02:05",
    barrio: "Belgrano",
    lugar: "Av. Cabildo 1900",
    tipo: "SUV",
    marca: "Volkswagen",
    modelo: "Tiguan Allspace",
    anio: 2022,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.562,
    lng: -58.456
  },
  {
    id: 8,
    fecha: "25/05/2026",
    hora: "22:20",
    barrio: "Palermo",
    lugar: "Av. del Libertador 3800",
    tipo: "Pick-up",
    marca: "Ford",
    modelo: "Ranger Limited",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, La Matanza",
    lat: -34.574,
    lng: -58.429
  },
  {
    id: 9,
    fecha: "31/05/2026",
    hora: "00:45",
    barrio: "Recoleta",
    lugar: "Posadas 1500",
    tipo: "Sedán",
    marca: "Audi",
    modelo: "A4",
    anio: 2023,
    situacion: "Egreso de cochera",
    modus_operandi: "Intercepción al conductor",
    recuperado: "No",
    lat: -34.589,
    lng: -58.392
  },
  {
    id: 10,
    fecha: "05/06/2026",
    hora: "23:35",
    barrio: "Belgrano",
    lugar: "Av. del Libertador 6500",
    tipo: "SUV",
    marca: "Toyota",
    modelo: "SW4",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Tres de Febrero",
    lat: -34.559,
    lng: -58.452
  },
  {
    id: 11,
    fecha: "11/06/2026",
    hora: "01:30",
    barrio: "Palermo",
    lugar: "Av. Figueroa Alcorta 4600",
    tipo: "SUV",
    marca: "Mercedes-Benz",
    modelo: "GLC",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.567,
    lng: -58.423
  },
  {
    id: 12,
    fecha: "16/06/2026",
    hora: "22:55",
    barrio: "Recoleta",
    lugar: "Av. del Libertador 1100",
    tipo: "SUV",
    marca: "Jeep",
    modelo: "Compass Limited",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Avellaneda",
    lat: -34.591,
    lng: -58.388
  },
  {
    id: 13,
    fecha: "22/06/2026",
    hora: "00:10",
    barrio: "Belgrano",
    lugar: "Av. Figueroa Alcorta 6800",
    tipo: "SUV",
    marca: "BMW",
    modelo: "X5",
    anio: 2022,
    situacion: "Ingreso a cochera particular",
    modus_operandi: "Intercepción al conductor",
    recuperado: "No",
    lat: -34.558,
    lng: -58.454
  },
  {
    id: 14,
    fecha: "27/06/2026",
    hora: "23:45",
    barrio: "Palermo",
    lugar: "Av. Cerviño 4700",
    tipo: "SUV",
    marca: "Audi",
    modelo: "Q5",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Lanús",
    lat: -34.579,
    lng: -58.421
  },
  {
    id: 15,
    fecha: "03/07/2026",
    hora: "01:55",
    barrio: "Recoleta",
    lugar: "Av. Pueyrredón 1900",
    tipo: "SUV",
    marca: "Volkswagen",
    modelo: "Taos Highline",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.589,
    lng: -58.400
  },
  {
    id: 16,
    fecha: "09/07/2026",
    hora: "22:40",
    barrio: "Belgrano",
    lugar: "Av. del Libertador 5700",
    tipo: "Pick-up",
    marca: "Toyota",
    modelo: "Hilux SRX",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Morón",
    lat: -34.561,
    lng: -58.445
  },
  {
    id: 17,
    fecha: "15/07/2026",
    hora: "00:35",
    barrio: "Palermo",
    lugar: "Av. del Libertador 4500",
    tipo: "SUV",
    marca: "Mercedes-Benz",
    modelo: "GLC",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.571,
    lng: -58.432
  },
  {
    id: 18,
    fecha: "21/07/2026",
    hora: "23:20",
    barrio: "Recoleta",
    lugar: "Av. Figueroa Alcorta 2200",
    tipo: "Sedán",
    marca: "BMW",
    modelo: "Serie 3",
    anio: 2023,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "Sí, Quilmes",
    lat: -34.586,
    lng: -58.397
  },
  {
    id: 19,
    fecha: "27/07/2026",
    hora: "01:05",
    barrio: "Belgrano",
    lugar: "Av. Cabildo 800",
    tipo: "SUV",
    marca: "Jeep",
    modelo: "Commander",
    anio: 2024,
    situacion: "Estacionado en vía pública",
    modus_operandi: "Sustracción sin violencia visible",
    recuperado: "No",
    lat: -34.562,
    lng: -58.456
  },
  {
    id: 20,
    fecha: "02/08/2026",
    hora: "22:15",
    barrio: "Palermo",
    lugar: "Av. Figueroa Alcorta 3500",
    tipo: "SUV",
    marca: "Audi",
    modelo: "Q5",
    anio: 2023,
    situacion: "Egreso de estacionamiento",
    modus_operandi: "Intercepción al conductor",
    recuperado: "Sí, Lomas de Zamora",
    lat: -34.567,
    lng: -58.423
  }
];

// Inicializar mapa
var map = L.map('map').setView([-34.6037, -58.3816], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

var markersGroup = L.layerGroup().addTo(map);

// Función para dibujar marcadores
function actualizarMapa(barrioFiltro) {
  markersGroup.clearLayers();
  registros.forEach(reg => {
    if (barrioFiltro === "todos" || reg.barrio === barrioFiltro) {
      L.marker([reg.lat, reg.lng]).addTo(markersGroup)
        .bindPopup(`
          <b>${reg.marca} ${reg.modelo} (${reg.anio})</b><br>
          <b>Barrio:</b> ${reg.barrio}<br>
          <b>Lugar:</b> ${reg.lugar}<br>
          <b>Fecha y hora:</b> ${reg.fecha} ${reg.hora}<br>
          <b>Situación:</b> ${reg.situacion}<br>
          <b>Modalidad:</b> ${reg.modus_operandi}<br>
          <b>Recuperado:</b> ${reg.recuperado}
        `);
    }
  });
}
actualizarMapa("todos");

// Filtro
document.getElementById("filtroBarrio").addEventListener("change", function() {
  actualizarMapa(this.value);
  actualizarGraficos(this.value);
});

const barrios = ['Palermo', 'Recoleta', 'Belgrano'];
const franjasHorarias = [
  '20:00 - 21:59',
  '22:00 - 23:59',
  '00:00 - 01:59',
  '02:00 - 03:59'
];

function obtenerRegistrosFiltrados(barrioFiltro) {
  return registros.filter(registro =>
    barrioFiltro === 'todos' || registro.barrio === barrioFiltro
  );
}

function obtenerIndiceFranja(hora) {
  const horaNumerica = Number(hora.split(':')[0]);

  if (horaNumerica >= 20 && horaNumerica < 22) return 0;
  if (horaNumerica >= 22) return 1;
  if (horaNumerica < 2) return 2;
  return 3;
}

function contarPorPropiedad(registrosFiltrados, propiedad) {
  return registrosFiltrados.reduce((conteo, registro) => {
    conteo[registro[propiedad]] = (conteo[registro[propiedad]] || 0) + 1;
    return conteo;
  }, {});
}

function contarHechosPorHorario(registrosFiltrados) {
  const cantidades = franjasHorarias.map(() => 0);

  registrosFiltrados.forEach(registro => {
    const indiceFranja = obtenerIndiceFranja(registro.hora);
    if (indiceFranja >= 0 && indiceFranja < cantidades.length) {
      cantidades[indiceFranja]++;
    }
  });

  return cantidades;
}

function crearOpcionesGrafico() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700 },
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 }
      }
    }
  };
}

const coloresGraficos = ['#1769aa', '#2b8a78', '#e0a11a', '#c65353', '#7553a6', '#3f8fbc', '#d06b32'];

// Gráfico de barrios
const graficoBarrios = new Chart(document.getElementById('graficoBarrios'), {
  type: 'bar',
  data: {
    labels: barrios,
    datasets: [{
      label: 'Cantidad de hechos',
      data: [],
      backgroundColor: coloresGraficos.slice(0, 3),
      borderRadius: 6
    }]
  },
  options: crearOpcionesGrafico()
});

// Gráfico de horarios
const graficoHorarios = new Chart(document.getElementById('graficoHorarios'), {
  type: 'bar',
  data: {
    labels: franjasHorarias,
    datasets: [{
      label: 'Cantidad de hechos',
      data: [],
      backgroundColor: '#2b8a78',
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700 },
    plugins: { legend: { display: false } },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { precision: 0 }
      }
    }
  }
});

// Gráfico de marcas
const graficoMarcas = new Chart(document.getElementById('graficoMarcas'), {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: 'Cantidad de hechos',
      data: [],
      backgroundColor: coloresGraficos,
      borderWidth: 2,
      borderColor: '#fbfcfd'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 700 },
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  }
});

// Actualiza todos los gráficos según el barrio seleccionado.
function actualizarGraficos(barrioFiltro) {
  const registrosFiltrados = obtenerRegistrosFiltrados(barrioFiltro);
  const conteoBarrios = contarPorPropiedad(registrosFiltrados, 'barrio');
  const conteoMarcas = contarPorPropiedad(registrosFiltrados, 'marca');
  const marcasOrdenadas = Object.entries(conteoMarcas).sort((a, b) => b[1] - a[1]);

  graficoBarrios.data.datasets[0].data = barrios.map(barrio => conteoBarrios[barrio] || 0);
  graficoHorarios.data.datasets[0].data = contarHechosPorHorario(registrosFiltrados);
  graficoMarcas.data.labels = marcasOrdenadas.map(([marca]) => marca);
  graficoMarcas.data.datasets[0].data = marcasOrdenadas.map(([, cantidad]) => cantidad);

  graficoBarrios.update();
  graficoHorarios.update();
  graficoMarcas.update();
}

actualizarGraficos('todos');
