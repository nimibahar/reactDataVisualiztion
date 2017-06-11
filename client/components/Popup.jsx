import React, { Component } from 'react';
import closeIcon from '../img/close.png';
import '../styles/popup.css';

import StockChart from './StockChart.jsx';

class Popup extends Component {
  // a method that will render the StockChart component and
  // pass it with relevent props
  renderPopupContent() {
    return (
      <section className="popup">
        <section className="popup-wrapup">
          <img src={closeIcon} onClick={this.props.hidePopup} />
        </section>
        <section className="popup-content">
          <StockChart activeTechCompany={this.props.activeTechCompany}/>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
      {/* check to see what is the status props (which reads from the state
      property: popUpStatus in the state object in the ToggleGrid component ) 
        of the of the Popup component. */}
        {
          this.props.status ? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

export default Popup;
