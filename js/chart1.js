const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar", // Tipe chart
  data: {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July"], 
    datasets: [
      {
        label: "Data Penjualan",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "#85F657",
          "#E9FF97"
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
