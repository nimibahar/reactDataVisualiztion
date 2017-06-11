import React, { Component } from 'react';
// import PieChart from './PieChart.jsx';
// import StockChart from './StockChart.jsx';

import ToggleGrid from './ToggleGrid.jsx';
import PlayGround from './PlayGround.jsx';

class App extends Component {
  render() {
    return(
      <div>
        {/*<PieChart />*/}
        {/*<hr/>*/}
        {/*<StockChart />*/}
        {/*<hr/>*/}
        <ToggleGrid />
        {/*<PlayGround/>*/}
      </div>
    );
  }
}

export default App;
