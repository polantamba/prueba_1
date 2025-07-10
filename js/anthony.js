const estudiantes = [{nombre: "anthony", promedio: 8}, {nombre: "Luis", promedio: 9}, {nombre: "monica", promedio: 7}];

const sumaPromedios = estudiantes.reduce((acc, est) => acc + est.promedio, 0);
const promedioGeneral = estudiantes.length > 0 ? sumaPromedios / estudiantes.length : 0;

const mejorEstudiante = estudiantes.reduce((prev, current) => (prev.promedio > current.promedio) ? prev : current);

console.log(`Promedio Gral: ${promedioGeneral.toFixed(2)}`);
console.log(`Mejor Estudiante: ${mejorEstudiante.nombre} (${mejorEstudiante.promedio.toFixed(2)})`);