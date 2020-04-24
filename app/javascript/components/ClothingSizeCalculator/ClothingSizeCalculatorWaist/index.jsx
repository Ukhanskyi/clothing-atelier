import React, { Component } from 'react';
import Collapsible from '../../Collapsible';
import calculateClothesSize from '../../../helpers/calculateClothesSize';
import './styles.css';

class ClothingSizeCalculatorWaist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waistValue: '',
    };
  }

  handleWaistValueChanged = (e) => {
    this.setState({ waistValue: e.target.value });
  }

  handleCalculateSubmitted = () => {
    const { gender, onClothingSizeChanged } = this.props;
    const { waistValue } = this.state;
    
    const clothinSize = calculateClothesSize(gender, waistValue);
    if (clothinSize) onClothingSizeChanged({ target: { value: clothinSize }});
  }

  render() {
    const { waistValue } = this.state;

    return (
      <div>
        <br />
        <Collapsible button={
          <div>
            <button className="menu btn btn-light"> Calculate my size </button>
          </div>
        }>
          <div className="container col-sm-9">
            <br />
            <h4 className="row justify-content-center"> You can calculate your size here </h4>
            <br/>
            <div>
              <div className=" row group mt-1">
                <h6 className="my-auto col-sm-3">Waist circumference: </h6>
                <input
                  type="number"
                  name="waist"
                  placeholder='In centimeters'
                  className="form-control col-md-6"
                  value={waistValue}
                  onChange={this.handleWaistValueChanged}
                />
              </div>
    
              <div>
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={this.handleCalculateSubmitted}
                >
                  Calculate
                </button>
              </div>
    
            </div>
            <br/>
          </div>
        </Collapsible>
      </div>
    );
  }
}

export default ClothingSizeCalculatorWaist;
