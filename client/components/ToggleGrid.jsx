import React, { Component} from 'react';
import Popup from './Popup.jsx';

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

    this.hidePopup = this.hidePopup.bind(this);
  }
  //a method to reset the state properties and unmount the Popup component
  hidePopup() {
    return this.setState({
      popUpStatus: false,
      activeTechCompany: null
    });
  };

  //a method to reset the state properties and mount the Popup component
  //we will also read the activeTechCompany property from here and according
  //to it, we will "tell" our StockChart component which data to render in the
  //chart
  updateActiveTechCompany(id) {
    // console.log(e)
    return this.setState({
      activeTechCompany: id,
      popUpStatus: true
    })
  };

  //a helper method to render an image logo
  renderLogo(companyLogo) {
    return (
        <img className="logo-medium" src={companyLogo}/>
    );
  }

  render() {
    return(
      <section>
      {/* read from the state object the value of the popUpStatus property and
        according to that, decide whether to render it (on top of the grid2x2
        section) and pass in status and the hidePopup as props, or to do nothing */}
        { this.state.popUpStatus
          ?
          <section><Popup status={this.state.popUpStatus} hidePopup={this.hidePopup} activeTechCompany={this.state.activeTechCompany}/></section>
          :
          null
        }
        {/* Each div is assigned with a corresponding logo
          and a click event which pass the corresponding results array
          position to update the state property: activeTechCompany */}
        <section className="grid2x2">
          <div onClick={() => this.updateActiveTechCompany(0)}>{this.renderLogo(ibmLogo)}</div>
          <div onClick={() => this.updateActiveTechCompany(1)}>{this.renderLogo(teslaLogo)}</div>
          <div onClick={() => this.updateActiveTechCompany(2)}>{this.renderLogo(appleLogo)}</div>
          <div onClick={() => this.updateActiveTechCompany(3)}>{this.renderLogo(googleLogo)}</div>
        </section>
      </section>
    );
  }
}

export default ToggleGrid;
