document.addEventListener("DOMContentLoaded", () => {
  // Net Worth Line Chart
  const ctx1 = document.getElementById('netWorthTrend').getContext('2d');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Replace with dynamic dates
      datasets: [{
        label: 'Net Worth',
        data: [400000, 410000, 420000, 430000, 450000, 453265], // Replace with actual data
        borderColor: '#4a9eff',
        backgroundColor: 'rgba(74, 158, 255, 0.3)',
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { title: { display: true, text: 'Months' } },
        y: { title: { display: true, text: 'Value (USD)' } },
      }
    }
  });

  // Asset Breakdown Bar Chart
  const ctx2 = document.getElementById('assetBreakdown').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Cash', 'CPF', 'STI ETF', 'Crypto'],
      datasets: [{
        label: 'Asset Breakdown',
        data: [169250, 212198, 68906, 2911], // Replace with actual data
        backgroundColor: ['#4a9eff','#3ecf8e','#9b7cff','#ff5e5e'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { title: { display: true, text: 'Assets' } },
        y: { title: { display: true, text: 'Value (USD)' } },
      }
    }
  });
});