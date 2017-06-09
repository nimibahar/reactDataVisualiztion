import React, { Component} from 'react';
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
      popUpStatus: true,
      activeTechCompany: null
    }

    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  showPopUp() {
    return this.setState({popUpStatus: true});
  };

  hidePopup() {
    return this.setState({popUpStatus: false});
  };

  updateActiveTechCompany(id) {
    let string_id = id;
    let number_id = parseInt(string_id);
    return this.setState({activeTechCompany: number_id})
  };

  renderLogo(companyLogo) {
    return (
        <a href="#"><img className="logo-medium" src={companyLogo}/></a>
    );
  }

  componentDidMount() {
    console.log(this.state.activeTechCompany)
  }

  render() {
    return(
      <section>
        <section className="grid2x2">
          <div onClick={event => this.updateActiveTechCompany(0)}>{this.renderLogo(ibmLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(1)}>{this.renderLogo(teslaLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(2)}>{this.renderLogo(appleLogo)}</div>
          <div onClick={event => this.updateActiveTechCompany(3)}>{this.renderLogo(googleLogo)}</div>
        </section>
      </section>
    );
  }
}

export default ToggleGrid;
