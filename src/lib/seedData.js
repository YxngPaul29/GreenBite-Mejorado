/* ============================================================
   GreenBite — Datos Demo (Seed Data)
   ============================================================
   Idempotente: solo se inicializa UNA vez. No duplica al recargar.
   ============================================================ */

import { KEYS } from './storage.js';

function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || null;
  } catch {
    return null;
  }
}

function writeStore(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function daysAgo(n) {
  return new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();
}

export function initializeSeedData() {
  if (readStore(KEYS.APP_INIT)) return; // Already initialized

  // ── Plantillas ──
  const plantillas = [
    {
      id: 'pl-1', nombre: 'Déficit Sostenible', objetivo: 'peso',
      desc: 'Enfoque balanceado que no elimina ningún grupo alimenticio. Ideal para perder grasa corporal sin ansiedad.',
      prot: 30, carb: 40, gras: 30, calorias: 1800, duracion: 30, precio: 49.99, estado: 'activo',
    },
    {
      id: 'pl-2', nombre: 'Equilibrio Verde', objetivo: 'eco',
      desc: 'Plan 100% basado en plantas. Rico en antioxidantes y proteínas vegetales para un bienestar integral.',
      prot: 20, carb: 50, gras: 30, calorias: 2000, duracion: 30, precio: 39.99, estado: 'activo',
    },
    {
      id: 'pl-3', nombre: 'Keto Avanzado', objetivo: 'keto',
      desc: 'Alta ingesta de grasas saludables y muy baja en carbohidratos para activar la quema de grasa eficiente.',
      prot: 25, carb: 5, gras: 70, calorias: 1600, duracion: 30, precio: 59.99, estado: 'activo',
    },
    {
      id: 'pl-4', nombre: 'Masa Muscular Pro', objetivo: 'musculo',
      desc: 'Diseñado para maximizar ganancia muscular con alto contenido proteico y carbohidratos complejos.',
      prot: 40, carb: 40, gras: 20, calorias: 2800, duracion: 60, precio: 69.99, estado: 'activo',
    },
    {
      id: 'pl-5', nombre: 'Bienestar Integral', objetivo: 'sana',
      desc: 'Plan balanceado para quienes buscan mantener un estilo de vida saludable sin restricciones extremas.',
      prot: 25, carb: 45, gras: 30, calorias: 2200, duracion: 30, precio: 34.99, estado: 'activo',
    },
    {
      id: 'pl-6', nombre: 'Detox Express', objetivo: 'peso',
      desc: 'Plan corto de 14 días enfocado en alimentos depurativos, frutas y vegetales de alto contenido hídrico.',
      prot: 20, carb: 55, gras: 25, calorias: 1500, duracion: 14, precio: 29.99, estado: 'activo',
    },
  ];

  // ── Pacientes demo ──
  const pacientes = [
    {
      id: 'pac-1', nombre: 'Carlos Mendoza', email: 'carlos@demo.com', password: 'demo1234',
      edad: 28, sexo: 'M', peso: 82, altura: 175, objetivo: 'bajar', nivelActividad: 'moderado',
      estado: 'Activo', rol: 'paciente', fechaRegistro: daysAgo(60), mustChangePassword: false,
    },
    {
      id: 'pac-2', nombre: 'María González', email: 'maria@demo.com', password: 'demo1234',
      edad: 34, sexo: 'F', peso: 65, altura: 162, objetivo: 'sana', nivelActividad: 'activo',
      estado: 'Activo', rol: 'paciente', fechaRegistro: daysAgo(45), mustChangePassword: false,
    },
    {
      id: 'pac-3', nombre: 'Roberto López', email: 'roberto@demo.com', password: 'demo1234',
      edad: 42, sexo: 'M', peso: 95, altura: 180, objetivo: 'bajar', nivelActividad: 'sedentario',
      estado: 'Activo', rol: 'paciente', fechaRegistro: daysAgo(30), mustChangePassword: false,
    },
    {
      id: 'pac-4', nombre: 'Ana Castillo', email: 'ana@demo.com', password: 'demo1234',
      edad: 25, sexo: 'F', peso: 58, altura: 168, objetivo: 'musculo', nivelActividad: 'activo',
      estado: 'Activo', rol: 'paciente', fechaRegistro: daysAgo(15), mustChangePassword: false,
    },
  ];

  // ── Planes (dietas asignadas) ──
  const mealTemplate = (tipo) => {
    const meals = {
      bajar: {
        desayuno: '2 Huevos revueltos, 1 rebanada de pan integral, café negro',
        media: '1 Manzana verde y 10 almendras',
        almuerzo: '150g Pechuga de pollo, 1/2 taza de arroz, ensalada verde',
        merienda: '1 Yogur griego natural sin azúcar',
        cena: '150g Pescado blanco al horno, vegetales al vapor',
      },
      musculo: {
        desayuno: 'Avena con leche, scoop de proteína, plátano y crema de maní',
        media: 'Lata de atún en agua y galletas de arroz',
        almuerzo: '200g Carne magra, 1 taza de arroz, aguacate',
        merienda: 'Batido de proteínas y un puñado de nueces',
        cena: '200g Pechuga de pollo, papa asada, ensalada mixta',
      },
      sana: {
        desayuno: 'Tostada integral con aguacate y huevo pochado',
        media: 'Frutas mixtas con granola',
        almuerzo: 'Ensalada mediterránea con pollo y quinoa',
        merienda: 'Hummus con bastones de zanahoria',
        cena: 'Salmón al horno con vegetales asados',
      },
    };
    return meals[tipo] || meals.sana;
  };

  const buildWeek = (tipo) => {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const semana = {};
    dias.forEach(dia => { semana[dia] = { ...mealTemplate(tipo) }; });
    return semana;
  };

  const planes = [
    {
      id: 'plan-1', pacienteId: 'pac-1', nombre: 'Déficit Sostenible - Mes 1',
      plantillaId: 'pl-1', estado: 'Activo', fecha: daysAgo(15), fechaFin: null,
      semana: buildWeek('bajar'),
    },
    {
      id: 'plan-2', pacienteId: 'pac-2', nombre: 'Bienestar Integral',
      plantillaId: 'pl-5', estado: 'Activo', fecha: daysAgo(10), fechaFin: null,
      semana: buildWeek('sana'),
    },
  ];

  // ── Cotizaciones ──
  const cotizaciones = [
    {
      id: 'cot-1', pacienteId: 'pac-1', plantillaId: 'pl-1', planNombre: 'Déficit Sostenible',
      precio: 49.99, fecha: daysAgo(20), fechaExpiracion: daysAgo(13), estado: 'Pagada',
    },
    {
      id: 'cot-2', pacienteId: 'pac-2', plantillaId: 'pl-5', planNombre: 'Bienestar Integral',
      precio: 34.99, fecha: daysAgo(12), fechaExpiracion: daysAgo(5), estado: 'Pagada',
    },
    {
      id: 'cot-3', pacienteId: 'pac-3', plantillaId: 'pl-3', planNombre: 'Keto Avanzado',
      precio: 59.99, fecha: daysAgo(5), fechaExpiracion: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      estado: 'Pendiente',
    },
    {
      id: 'cot-4', pacienteId: 'pac-4', plantillaId: 'pl-4', planNombre: 'Masa Muscular Pro',
      precio: 69.99, fecha: daysAgo(3), fechaExpiracion: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      estado: 'Pendiente',
    },
  ];

  // ── Pagos ──
  const pagos = [
    {
      id: 'pago-1', cotizacionId: 'cot-1', pacienteId: 'pac-1', planNombre: 'Déficit Sostenible',
      monto: 49.99, metodo: 'Tarjeta', tarjetaUltimos4: '4242', referencia: 'GB-DEMO-A1B2',
      fecha: daysAgo(18), estado: 'Pagado',
    },
    {
      id: 'pago-2', cotizacionId: 'cot-2', pacienteId: 'pac-2', planNombre: 'Bienestar Integral',
      monto: 34.99, metodo: 'Tarjeta', tarjetaUltimos4: '5544', referencia: 'GB-DEMO-C3D4',
      fecha: daysAgo(10), estado: 'Pagado',
    },
  ];

  // ── Notificaciones ──
  const notificaciones = [
    {
      id: 'notif-1', tipo: 'solicitud', mensaje: 'Carlos Mendoza ha solicitado el plan "Déficit Sostenible".',
      pacienteId: null, fecha: daysAgo(25), leida: true,
    },
    {
      id: 'notif-2', tipo: 'plan_asignado', mensaje: 'Se ha asignado el plan "Déficit Sostenible - Mes 1".',
      pacienteId: 'pac-1', fecha: daysAgo(15), leida: true,
    },
    {
      id: 'notif-3', tipo: 'pago_aprobado', mensaje: 'Pago aprobado por $49.99 — Plan Déficit Sostenible.',
      pacienteId: 'pac-1', fecha: daysAgo(18), leida: true,
    },
    {
      id: 'notif-4', tipo: 'solicitud', mensaje: 'Roberto López ha solicitado el plan "Keto Avanzado".',
      pacienteId: null, fecha: daysAgo(5), leida: false,
    },
    {
      id: 'notif-5', tipo: 'cotizacion_creada', mensaje: 'Nueva cotización para "Masa Muscular Pro" por $69.99.',
      pacienteId: 'pac-4', fecha: daysAgo(3), leida: false,
    },
  ];

  // ── Peso historial ──
  const pesoHistorial = {
    'pac-1': [
      { peso: 88, fecha: daysAgo(60) },
      { peso: 86, fecha: daysAgo(45) },
      { peso: 84, fecha: daysAgo(30) },
      { peso: 83, fecha: daysAgo(15) },
      { peso: 82, fecha: daysAgo(1) },
    ],
    'pac-2': [
      { peso: 67, fecha: daysAgo(45) },
      { peso: 66, fecha: daysAgo(30) },
      { peso: 65, fecha: daysAgo(10) },
    ],
  };

  // ── Write everything ──
  writeStore(KEYS.PLANTILLAS, plantillas);
  writeStore(KEYS.PACIENTES, pacientes);
  writeStore(KEYS.PLANES, planes);
  writeStore(KEYS.COTIZACIONES, cotizaciones);
  writeStore(KEYS.PAGOS, pagos);
  writeStore(KEYS.NOTIFICACIONES, notificaciones);
  writeStore(KEYS.PESO_HISTORIAL, pesoHistorial);
  writeStore(KEYS.APP_INIT, true);
}
