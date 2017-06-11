import React, { Component } from 'react';
// import Moment from 'moment';
import ReactHighChart from 'react-highcharts';
const ReactHighstock = require('react-highcharts/ReactHighstock');
import _ from 'underscore';

import stocksData from '../data/exampleData2.json';

class StockChart extends Component {
  render() {
    let activeCompany = this.props.activeTechCompany;
    {/*Getting the name, closing stock price and dates of each stock in the json file*/}

    const stocksInfo = stocksData.techStocks.map((techStock) => {
      //creating a refernce to the results array of objects which
      //from those, we will pluck properties
      const resultsArr = techStock.results;
      //creating a temp object to store all the info we will pluck
      //from the JSON file
      let techStockObj = {};
      //Assign properties
      techStockObj.companyName = techStock.companyName;

      techStockObj.tradingDates = _.pluck(resultsArr, 'tradingDay');

      techStockObj.closingPrices = _.pluck(resultsArr, 'close');
      //Transforming dates to unix ** This part was experimental which didn't work
      //but was a good lesson **
      techStockObj.closingPriceAndUnixTime = [];
      techStockObj.unixDates = techStockObj.tradingDates.map((date) => {
        return Math.round(new Date(date).getTime())
      })
      //zipping 2 arrays together
      let zippedArr = _.zip(techStockObj.unixDates, techStockObj.closingPrices);
      techStockObj.closingPriceAndUnixTime.push(zippedArr);

      return techStockObj
    });

    console.log(stocksInfo[activeCompany].closingPriceAndUnixTime)

    const specialConfig = {
        title: {
            text: `${stocksInfo[activeCompany].companyName} Stock Prices`
        },
        categories: [stocksInfo[activeCompany].tradingDates],
        xAxis: {
          type: "category",
          labels: {
            rotation: 45,
            x:-20
          }
        },
        tooltip: {
          formatter: function() {
            //assigning the
            this.x = stocksInfo[activeCompany].tradingDates[this.x]
            return `At the date: <b> ${this.x} ${stocksInfo[activeCompany].companyName} </b> was <b> ${this.y} US$ </b>`;
          }
        },
        series: [{
            name: stocksInfo[activeCompany].companyName,
            data: stocksInfo[activeCompany].closingPrices,
            tooltip: {
                valueDecimals: 2
            },
            showInNavigator: true
        }]
    };

    return(
      <ReactHighstock config={specialConfig}/>
    );
  }
}

export default StockChart;
