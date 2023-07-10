// Obtiene los elementos span por su ID
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var numero3 = document.getElementById("numero3");
var numero4 = document.getElementById("numero4");

// Configura los valores iniciales de los números
var valorInicial = 0;
var duracion = 500; // 3 segundos

// Función para animar el valor de un número
function animarNumero(numero, inicio, fin, duracion) {
  var diferencia = fin - inicio;
  var incremento = diferencia / duracion * 100;
  var tiempo = 0;
  function actualizarNumero() {
    tiempo += 10;
    var nuevoValor = inicio + incremento * tiempo / 100;
    numero.innerHTML = Math.round(nuevoValor);
    if (tiempo < duracion) {
      setTimeout(actualizarNumero, 10);
    } else {
      numero.innerHTML = fin;
    }
  }
  actualizarNumero();
}

// Animar los tres números ...animarNumero(numerooo2, valorInicial, valorFinal, duracion);

animarNumero(numero1,valorInicial , 33, duracion);
animarNumero(numero2, valorInicial, 389, duracion);
animarNumero(numero3, valorInicial, 500, duracion);
animarNumero(numero4, valorInicial, 10, duracion);


function scrollToSection() {
  var section = document.querySelector('.section-4');
  section.scrollIntoView({ behavior: 'smooth' });
}


function toggleFaqContent() {
  var faqContent = document.querySelector('.faq-content');
  faqContent.style.display = faqContent.style.display === 'none' ? 'block' : 'none';
}