// Definimos la interfaz para un grupo musical
interface GrupoMusical {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
  }

  var poprock = "🎵 Pop Rock";
  var rock = "🎸 Rock";
  var hardrock = "🤘 Hard Rock";
  var clasica = "🎼Clásica";

  const grupo1 : GrupoMusical = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: false,
    genero: poprock
  }

  const grupo2 : GrupoMusical = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock
  }

  const grupo3 : GrupoMusical = {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true,
    genero: hardrock
  }

  const grupo4 : GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica
  }

  const grupo5 : GrupoMusical = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock
  }

  console.log(`%c${grupo1.nombre}%c / ${grupo1.añoFundacion} / Activo: ${grupo1.activo ? 'Sí' : 'No'} / ${grupo1.genero}`, 'font-weight: bold; font-size: 20px; background-color: green;', '');
  console.log(`%c${grupo2.nombre}%c / ${grupo2.añoFundacion} / Activo: ${grupo2.activo ? 'Sí' : 'No'} / ${grupo2.genero}`, 'font-weight: bold; font-size: 20px; background-color: green;', '');
  console.log(`%c${grupo3.nombre}%c / ${grupo3.añoFundacion} / Activo: ${grupo3.activo ? 'Sí' : 'No'} / ${grupo3.genero}`, 'font-weight: bold; font-size: 20px; background-color: green;', '');
  console.log(`%c${grupo4.nombre}%c / ${grupo2.añoFundacion} / Activo: ${grupo4.activo ? 'Sí' : 'No'} / ${grupo4.genero}`, 'font-weight: bold; font-size: 20px; background-color: green;', '');
  console.log(`%c${grupo5.nombre}%c / ${grupo2.añoFundacion} / Activo: ${grupo5.activo ? 'Sí' : 'No'} / ${grupo5.genero}`, 'font-weight: bold; font-size: 20px; background-color: green;', '');