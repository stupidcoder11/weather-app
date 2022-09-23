import { Column } from "@ant-design/plots";

function WeatherChart() {
  const data = [
    {
      type: "A",
      sales: 38,
    },
    {
      type: "B",
      sales: 52,
    },
    {
      type: "C",
      sales: 61,
    },
    {
      type: "D",
      sales: 145,
    },
    {
      type: "E",
      sales: 48,
    },
    {
      type: "F",
      sales: 38,
    },
    {
      type: "G",
      sales: 38,
    },
    {
      type: "H",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    // meta: {
    //   type: {
    //     alias: "Apple",
    //   },
    //   sales: {
    //     alias: "Banana",
    //   },
    // },
  };
  return <Column {...config} />;
}

export default WeatherChart;
