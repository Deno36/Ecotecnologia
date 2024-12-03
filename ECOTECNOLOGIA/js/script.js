document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

function calcularPaneles() {
    // Obtener los valores ingresados por el usuario
    const consumo = parseFloat(document.getElementById("consumo").value);
    const horasPicoD = parseFloat(document.getElementById("horasPico").value);
    const potencia = parseFloat(document.getElementById("potencia").value);

    // Validar que los valores sean números positivos
    if (isNaN(consumo) || isNaN(horasPicoD) || isNaN(potencia) || consumo <= 0 || horasPicoD <= 0 || potencia <= 0) {
      document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos y positivos.";
      return;
    }

    // Aplicar la fórmula para calcular el número de paneles solares
    const horasPico = horasPicoD * 30;
    const sistemaSolar = (consumo / horasPico);
    const numeroPaneles = (consumo / horasPico) / potencia;

    // Mostrar el resultado redondeado
    document.getElementById("resultado").textContent = ` Sistema solar de: ${Math.ceil(sistemaSolar)} kW y Número de paneles necesarios: ${Math.ceil(numeroPaneles)} (aproximadamente).`;
  }