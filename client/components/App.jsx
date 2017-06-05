import React, { Component } from 'react';
import PieChart from './PieChart.jsx';

class App extends Component {
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <PieChart />
      </div>
    );
  }
}

export default App;
