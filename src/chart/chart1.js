import React, { Component } from "react";
import Chart from "react-apexcharts";
import moment from "moment";
import { messages } from "../constants/constant";
import { StatsTable, MessageTable } from "./containers/index";

const countEmailsByMonth = data => {
  const dates = data.map(datum =>
    moment(datum.date, ["DD-MM-YYYY"]).format("MMMM")
  );
  // getting our dates from your message json
  const months = moment.months();
  // getting 12 months arr from moment.js
  const mergedMonths = [...months, ...dates];
  // merging months and dates together
  const sortedMonths = mergedMonths.sort(
    (a, b) => months.indexOf(a) - months.indexOf(b)
  );
  //sorting months
  const chartData = {};
  //counting duplicates
  sortedMonths.map(val => (chartData[val] = chartData[val] + 1 || 0));
  return chartData;
};

class Donut extends Component {
  state = {
    index: 0,
    percentage: [],
    flag: false,
    options: {
      plotOptions: {
        pie: {
          donut: {
            labels: "show"
          }
        }
      },
      chart: {
        height: 350,
        type: "bar",
        events: {
          dataPointSelection: (e, ctxt, config) => {
            const total = messages.length;
            const value = config.w.config.series[config.dataPointIndex];
            const month = config.w.config.labels[config.dataPointIndex];
            const percentage = Math.round((value / total) * 100 * 10) / 10;
            const selectedMessages = [];

            messages.forEach(msg => {
              const messageMonth = moment(msg.date, ["DD-MM-YYYY"]).format(
                "MMMM"
              );
              //picking msgs by month
              if (messageMonth === month) {
                selectedMessages.push(msg);
              }
            });

            this.setState({
              selectedMonth: {
                month,
                value,
                percentage,
                selectedMessages
              }
            });
          }
        }
      }
    },
    series: []
  };

  componentDidMount() {
    const normalizedData = countEmailsByMonth(messages);
    this.setState({
      options: {
        labels: Object.keys(normalizedData)
      },
      series: Object.values(normalizedData)
    });
  }

  render() {
    const { options, series, selectedMonth } = this.state;
    console.log(selectedMonth);
    return (
      <div className="donut">
        <Chart options={options} series={series} type="donut" width="380" />

        {selectedMonth && (
          <div>
            <StatsTable selectedMonth={selectedMonth} />
            <MessageTable selectedMonth={selectedMonth} />
          </div>
        )}
      </div>
    );
  }
}

export default Donut;
