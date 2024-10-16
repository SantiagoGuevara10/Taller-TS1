import { series } from './data.js';
document.addEventListener("DOMContentLoaded", function () {
    const seriesTable = document.getElementById("series-list");
    const averageSeasonsElement = document.getElementById("average-seasons");
    // Función para mostrar las series en la tabla
    function displaySeries(series) {
        series.forEach((serie) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${serie.id}</td>
        <td><img src="${serie.imageUrl}" alt="${serie.name}" width="100" /></td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        <td><a href="${serie.link}" target="_blank">Más información</a></td>
        <td>${serie.description}</td>
      `;
            seriesTable === null || seriesTable === void 0 ? void 0 : seriesTable.appendChild(row); // Inyectar la fila en el tbody
        });
    }
    // Función para calcular el promedio de temporadas
    function calculateAverageSeasons(series) {
        const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
        return totalSeasons / series.length;
    }
    // Mostrar series en la tabla
    displaySeries(series);
    // Mostrar el promedio de temporadas
    const averageSeasons = calculateAverageSeasons(series);
    averageSeasonsElement.textContent += ` ${averageSeasons.toFixed(2)}`;
});
