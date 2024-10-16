import { series } from './data.js';
import { Serie } from './Serie.js';

document.addEventListener("DOMContentLoaded", function () {
  const seriesTable = document.getElementById("series-list");
  const averageSeasonsElement = document.getElementById("average-seasons");




  function displaySeries(series: Serie[]): void {
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
      seriesTable?.appendChild(row); 
    });
  }

  


  function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
  }



  
  displaySeries(series);




  
  const averageSeasons = calculateAverageSeasons(series);
  averageSeasonsElement!.textContent += ` ${averageSeasons.toFixed(2)}`;
});