import React, { Component } from 'react';
import closeIcon from '../img/close.png';
import '../styles/popup.css';

import StockChart from './StockChart.jsx';

class Popup extends Component {
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
        {
          this.props.status ? this.renderPopupContent() : null
        }
      </section>
    );
  }
}

export default Popup;
