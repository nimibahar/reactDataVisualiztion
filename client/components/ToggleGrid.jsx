import React, { Component} from 'react';
import Popup from './Popup.jsx';
import StockChart from './StockChart.jsx';

import '../styles/toggle_grid.css';

import ibmLogo from '../img/IBM.png';
import appleLogo from '../img/APPLE.png';
import googleLogo from '../img/GOOGLE.png';
import teslaLogo from '../img/TESLA.png';

class ToggleGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popUpStatus: false,
      activeTechCompany: null
    }

  //   this.showPopUp = this.showPopUp.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  // showPopUp(id) {
  //
  //   return this.setState({popUpStatus: true});
  // };
  //
  hidePopup() {
    return this.setState({
      popUpStatus: false,
      activeTechCompany: null
    });
  };

  updateActiveTechCompany(id) {
    return this.setState({
      activeTechCompany: id,
      popUpStatus: true
    })
  };

  renderLogo(companyLogo) {
    return (
        <a href="#"><img className="logo-medium" src={companyLogo}/></a>
    );
  }

  render() {
    return(
      <section>
        { this.state.popUpStatus
          ?
          <section><Popup status={this.state.popUpStatus} hidePopup={this.hidePopup} activeTechCompany={this.state.activeTechCompany}/></section>
          :
          null
        }
        <section className="grid2x2">
          <div onClick={event => this.updateActiveTechCompany(0)}>{this.renderLogo(ibmLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(1)}>{this.renderLogo(teslaLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(2)}>{this.renderLogo(appleLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(3)}>{this.renderLogo(googleLogo)}</div>
        </section>
        {console.log(this.state)}
      </section>
    );
  }
}

export default ToggleGrid;
