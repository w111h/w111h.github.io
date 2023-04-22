function getApexChart() {
  var options = {
    series: [
      {
        name: "Cases",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Workers",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return options;
}

function getPieChart() {
  //Chart for second section

  var pie_chart_options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Construction",
      "Process",
      "Marine",
      "Manufacturing, Service and Stevedoring",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return pie_chart_options;
}

function firstSection() {
  let trigger = document.querySelector("#first_section_chart");
  trigger.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("show");
    parentHtml.classList.add("hidden");
    let dummyHtml = document.querySelector("#testing");
    dummyHtml.classList.remove("hidden");
    dummyHtml.classList.add("show");
  });

  let hideDummy = document.querySelector("#hiddenBtn");
  hideDummy.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("hidden");
    parentHtml.classList.add("show");
    let dummyHtml = document.querySelector("#testing");
    dummyHtml.classList.remove("show");
    dummyHtml.classList.add("hidden");
  });
}

async function loadData(csvFileName) {
  const response = await axios.get(csvFileName);
  const json = await csv().fromString(response.data);
  return json;
}

window.document.addEventListener("DOMContentLoaded", async function () {
  let data = await loadData("Datasheet.csv");
  console.log("What is data : ", data);
  // For the first section
  firstSection();

  // For the second section
  let secondSection = document.querySelector("#second_section_chart");
  secondSection.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("show");
    parentHtml.classList.add("hidden");
    let dummyHtml = document.querySelector("#testing2");
    dummyHtml.classList.remove("hidden");
    dummyHtml.classList.add("show");
  });

  let hideSecondDummy = document.querySelector("#secondbtn");
  hideSecondDummy.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("hidden");
    parentHtml.classList.add("show");
    let dummyHtml = document.querySelector("#testing2");
    dummyHtml.classList.remove("show");
    dummyHtml.classList.add("hidden");
  });

  //Chart for first section

  const options = getApexChart();

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  //get pie chart for second section

  const pie_chart_options = getPieChart();
  var pieChart = new ApexCharts(
    document.querySelector("#pie_chart"),
    pie_chart_options
  );
  pieChart.render();
});
