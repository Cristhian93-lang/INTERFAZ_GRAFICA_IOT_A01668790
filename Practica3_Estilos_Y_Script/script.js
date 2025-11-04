function cambiarPersonaje(nombre) {
  const personaje = document.getElementById("personaje");
  const body = document.body;

  body.className = "";

  switch (nombre) {
    case "beru":
      personaje.src = "img3/beru.jpg";
      body.classList.add("beru");
      aplicarEfecto("#00ffcc", "Beru - Insecto del Hormiguero");
      break;

    case "igris":
      personaje.src = "img3/igris.webp";
      body.classList.add("igris");
      aplicarEfecto("#ff3300", "Igris - Caballero Rojo");
      break;

    case "bellion":
      personaje.src = "img3/bellion.webp";
      body.classList.add("bellion");
      aplicarEfecto("#3399ff", "Bellion - Comandante Dragón");
      break;

    case "monarch":
      personaje.src = "img3/monarca.jpeg";
      body.classList.add("monarch");
      aplicarEfecto("#9900ff", "Sung Jin-Woo - Monarca de las Sombras");
      break;

    default:
      volverInicio(); 
      break;
  }
}

function volverInicio() {
  const personaje = document.getElementById("personaje");
  const body = document.body;

  body.className = "";
  personaje.src = "img3/basesung.jpg";
  personaje.style.filter = "drop-shadow(0 0 40px rgba(140, 0, 255, 0.8))";
  personaje.style.transform = "scale(1)";

  aplicarEfecto("#6f00ff", "Sung Jin-Woo");
}

function aplicarEfecto(color, nombre) {
  const personaje = document.getElementById("personaje");
  personaje.style.filter = `drop-shadow(0 0 40px ${color})`;
  personaje.style.transform = "scale(1.05)";
  setTimeout(() => {
    personaje.style.transform = "scale(1)";
  }, 600);

  document.querySelectorAll(".nombre-forma").forEach(e => e.remove());

  const texto = document.createElement("div");
  texto.textContent = nombre;
  texto.className = "nombre-forma";
  document.body.appendChild(texto);
  setTimeout(() => texto.remove(), 1500);
}

const estilo = document.createElement("style");
estilo.textContent = `
  .nombre-forma {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    color: white;
    text-shadow: 0 0 20px #6f00ff;
    animation: fadeOut 1.5s ease-out forwards;
  }

  @keyframes fadeOut {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
  }
`;
document.head.appendChild(estilo);
