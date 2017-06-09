import React, { Component } from 'react';
import Moment from 'moment';
import ReactHighChart from 'react-highcharts';
const ReactHighstock = require('react-highcharts/ReactHighstock')

import stocksData from '../data/exampleData2.json';

class StockChart extends Component {
  render() {
    {/*Getting the name, closing stock price and dates of each stock in the json file*/}
    const stocksInfo = stocksData.techStocks.map((techStock) => {
      let techStockObj = {};

      techStockObj.companyName = techStock.companyName;

      techStockObj.tradingDates = techStock.results.map((tradeDate) => {
        let date = Moment(tradeDate.tradingDay, "YYYY/M/D");
        let formattedDate = Moment(date);
        return formattedDate._i;
      })

      techStockObj.closingPrices = techStock.results.map((closingPrice) => {
        return [closingPrice.close];
      })
      return techStockObj;
    });

    console.log(typeof stocksInfo[0].tradingDates)
    const tradesRef = stocksInfo[0].tradingDates;
    const formattedTradesRef = Array.from(tradesRef);
    console.log(typeof formattedTradesRef)

    const specialConfig = {
        title: {
            text: `${stocksInfo[0].companyName} Stock Prices`
        },
        xAxis: {
          categories: formattedTradesRef
        },
        // xAxis: {
        //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //   labels: {
        //     rotation: 45,
        //     x:-20,
        //   }
        // },
        tooltip: {
          formatter: function() {
            this.x = stocksInfo[0].tradingDates[this.x]
            return `At the date: <b> ${this.x} ${stocksInfo[0].companyName} </b> was <b> ${this.y} US$ </b>`;
          }
        },
        series: [{
            name: stocksInfo[0].companyName,
            data: stocksInfo[0].closingPrices,
            tooltip: {
                valueDecimals: 2
            }
        }]
    };

    console.log(stocksInfo[0])

    return(
      <ReactHighstock config={specialConfig}/>
    );
  }
}

export default StockChart;
