import React, { Component } from 'react';
import stocksData from '../data/exampleData2.json';

import _ from 'underscore';

class PlayGround extends Component {
  render() {
    const stockPluckedInfo = stocksData.techStocks.map((techStock) => {
      //Creating a reference to the result to array:
      const resultsArr = techStock.results;
      let techStockObj = {};
      //Assinging a company name property on techStockObj:
      techStockObj.companyName = techStock.companyName;
      //Plucking into our object the relevent properties we need for our chart using underscore:
      const tradingDates = _.pluck(resultsArr, 'tradingDay');
      techStockObj.tradingDates = tradingDates;
      //Transforming our plucked dates into unix format
      const unixDates = tradingDates.map((date) => {
        return Math.round(new Date(date).getTime())
      })
      const clossingPrices = _.pluck(resultsArr, 'close');
      //Creating an array property to store prices and unix dates
      techStockObj.clossingPriceAndUnixTime = [];
      //zipping our 2 arrays
      let zippedArr = _.zip(unixDates, clossingPrices);
      techStockObj.clossingPriceAndUnixTime.push(zippedArr);
      return techStockObj;
      // console.log(techStockObj)
    })

    // const stocksInfo = stocksData.techStocks.map((techStock) => {
    //   let techStockObj = {};
    //
    //   techStockObj.companyName = techStock.companyName;
    //
    //   techStockObj.tradingDates = techStock.results.map((tradeDate) => {
    //     let date = Moment(tradeDate.tradingDay, "YYYY/M/D");
    //     let formattedDate = Moment(date);
    //     return formattedDate._i;
    //   })
    //
    //   techStockObj.closingPrices = techStock.results.map((closingPrice) => {
    //     // console.log(typeof epochTime.symbol)
    //     return [closingPrice.close];
    //   })
    //
    //   techStockObj.unixTimes = techStock.results.map((unixTime) => {
    //     let unix = Math.round(new Date(unixTime.tradingDay).getTime()/1000)
    //     console.log(unix)
    //   })
    //
    //   return techStockObj;
    // });
    return (
      <section>

      </section>
    );
  }
}

export default PlayGround;
