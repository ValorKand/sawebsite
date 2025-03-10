$(document).ready(function () {
    // menús dropdown
    $(".ui.dropdown").dropdown();
    // acordeones
    $(".ui.accordion").accordion();
    // popups
    $(".ver.mas").popup();
    $(".ui.sticky").sticky({
        context: "#submenusticky",
        pushing: true,
    });

    // Definir las opciones para cada sección
    const secciones = {
        preescolar: ["1ro", "2do", "3ro"],
        primaria: ["1ro", "2do", "3ro", "4to", "5to", "6to"],
        secundaria: ["1ro", "2do", "3ro"],
        bachillerato: ["1ro", "2do", "3ro", "4to", "5to", "6to"],
    };

    // Obtener los select
    const seccionSelect = document.getElementById("seccion");
    const gradoSelect = document.getElementById("grado");

    // Escuchar cambios en el primer select
    seccionSelect.addEventListener("change", function () {
        let seccionSeleccionada = this.value;

        // Limpiar las opciones anteriores del segundo select
        gradoSelect.innerHTML =
            '<option value="nulo">Selecciona un grado</option>';

        // Habilitar o deshabilitar el select según la opción seleccionada
        if (secciones[seccionSeleccionada]) {
            gradoSelect.disabled = false; // Habilita el select
            secciones[seccionSeleccionada].forEach((grado) => {
                let option = document.createElement("option");
                option.value = grado.toLowerCase();
                option.textContent = grado;
                gradoSelect.appendChild(option);
            });
        } else {
            gradoSelect.disabled = true; // Deshabilita si no hay opción válida
        }
    });
});
