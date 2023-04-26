var options = {
  type: "bar",
  data: {
    labels: ["10", "11", "12", "13", "14", "15", "16", "17", "18"],
    datasets: [
      {
        label: "Data",
        data: [13, 0, 11, 0, 12],
        backgroundColor: "#2d96ee",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "hi",
        data: [7, 0, 7, 0, 8],
        backgroundColor: "#3caa91",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  },
  options: {
    categoryPercentage: 0.6,
    barPercentage: 0.7,
    responsive: true,
    maintainAspectRatio: true,
  },
};

var ctx = document.getElementById("chartJSContainer").getContext("2d");
new Chart(ctx, options);
window.addEventListener("beforeprint", () => {
  myChart.resize(600, 600);
});
