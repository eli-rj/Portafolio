let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500) /* Nos da una pausa de 2.5s */
  .typeString('Desarrollo sitios web y realizo ciencia de datos.') /* Escribir una cadena de texto */
  .pauseFor(200) 
  .deleteChars(10) /* Borra los elementos antes escritos */
  .start(); /* Comienza a escribir */