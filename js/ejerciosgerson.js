const estudiantes = [
    { nombre: "Ana", nota1: 8, nota2: 9, nota3: 2 },
    { nombre: "Luis", nota1: 9, nota2: 8, nota3: 9 },
    { nombre: "Carla", nota1: 7, nota2: 8, nota3: 8 },
    { nombre: "Miguel", nota1: 8, nota2: 9, nota3: 8 }
];


const calcularPromedio = e => (e.nota1 + e.nota2 + e.nota3) / 3;

let sumaGeneral = 0;


estudiantes.forEach(e => {
    sumaGeneral += calcularPromedio(e);
});

const promedioGeneral = sumaGeneral / estudiantes.length;


console.log(`El promedio con funcion flecha es: ${promedioGeneral.toFixed(2)}`)
