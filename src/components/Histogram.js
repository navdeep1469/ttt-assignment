import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Histogram = () => {
  const [histo, setHisto] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [],
      },
    ],
    dataLabels: {
      style: {
        colors: ["white"],
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://www.terriblytinytales.com/test.txt");
      const strArr = res.data.split(" ");
      const map = {};
      strArr.forEach((word) => {
        if (map.hasOwnProperty(word)) {
          map[word]++;
        } else {
          map[word] = 1;
        }
      });
      let frequencyArr = Object.keys(map).map((key) => [key, map[key]]);
      frequencyArr.sort((a, b) => b[1] - a[1]);
      frequencyArr = frequencyArr.slice(0, 20);
      console.log(frequencyArr[0][0] + "->" + frequencyArr[0][1]);
      let labels = [];
      for (var i = 0; i < 20; i++) labels[i] = frequencyArr[i][0];

      let data = [];
      for (var i = 0; i < 20; i++) data[i] = frequencyArr[i][1];

      setHisto({
        options: {
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: labels,
          },
        },
        series: [
          {
            name: "series-1",
            data: data,
          },
        ],
      });
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex  flex-column" style={{ background: "black" }}>
      <div style={{ marginTop: "10px" }}>
        <p style={{ color: "white" }}>
          Below is a Histogram representing the frequency of 20 most occuring words.
        </p>
      </div>
      <div style={{ margin: "auto", marginTop: "100px", paddingBottom: "300px" }}>
        <Chart options={histo.options} series={histo.series} type="bar" width={800} height={320} />
      </div>
    </div>
  );
};

export default Histogram;
