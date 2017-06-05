import React, { Component } from 'react';
import exampleData from '../data/example.json';

import '../styles/pie_chart.css';

class PieChart extends Component {
  render() {
    const items = exampleData.map((item) =>
    <li key={item.cdn}>
      {item.platform} traffic percentage:  {item.trafficPercentage}
    </li>
    );
    return(
      <div>
        <h2>One Day I will be a PieChart component</h2>
        <div>
          {console.log(exampleData)}
        </div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default PieChart;
