import React, { Component } from 'react';
import Collapsible from '../../Collapsible';
import calculateClothesSize from '../../../helpers/calculateClothesSize';
import './styles.css';

class ClothingSizeCalculatorTight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tightValue: '',
    };
  }

  handleTightValueChanged = (e) => {
    this.setState({ tightValue: e.target.value });
  }

  handleCalculateSubmitted = () => {
    const { gender, onClothingSizeChanged } = this.props;
    const { tightValue } = this.state;
    
    const clothinSize = calculateClothesSize(gender, tightValue);
    if (clothinSize) onClothingSizeChanged({ target: { value: clothinSize }});
  }

  render() {
    const { tightValue } = this.state;

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
                <h6 className="my-auto col-sm-3">Tight circumference: </h6>
                <input
                  type="number"
                  name="tight"
                  placeholder='In centimeters'
                  className="form-control col-md-6"
                  value={tightValue}
                  onChange={this.handleTightValueChanged}
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

export default ClothingSizeCalculatorTight;
