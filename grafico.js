const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Comida',
            data: [500, 520, 510, 530, 550, 560, 570, 580, 590, 600, 620, 630],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
          },
          {
            label: 'Gasolina',
            data: [300, 310, 320, 330, 340, 350, 340, 330, 320, 310, 300, 290],
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
          },
          {
            label: 'Aluguel',
            data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            backgroundColor: 'rgba(255, 206, 86, 0.8)'
          },
          {
            label: 'Lazer',
            data: [200, 150, 180, 220, 210, 190, 200, 230, 240, 250, 220, 210],
            backgroundColor: 'rgba(75, 192, 192, 0.8)'
          },
          {
            label: 'Outros',
            data: [150, 180, 160, 140, 170, 160, 150, 160, 170, 180, 190, 200],
            backgroundColor: 'rgba(153, 102, 255, 0.8)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Distribuição de Gastos por Categoria - 2025'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true,
            title: {
              display: true,
              text: 'R$ (Reais)'
            }
          }
        }
      }
    });

  
new Chart(ctx2, {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
          'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        datasets: [
          {
            label: 'Ganhos (R$)',
            data: [3000, 3200, 2900, 3500, 3400, 3700, 3600, 3900, 4000, 4200, 4300, 4500],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            fill: false
          },
          {
            label: 'Perdas (R$)',
            data: [1000, 1200, 900, 1100, 1050, 1300, 1200, 1100, 1250, 1150, 1100, 1000],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparativo de Ganhos e Perdas - 12 Meses'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'R$ (Reais)'
            }
          }
        }
      }
    });