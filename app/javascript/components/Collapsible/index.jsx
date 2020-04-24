import React from 'react';
import './styles';

export default class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  togglePanel = () => {
    this.setState((state) => (
      {open: !state.open}
    ));
  }

  render() {
    return (
      <div>
        <div onClick={() => this.togglePanel()} className='menu'>
          {this.props.button}
        </div>
        {this.state.open ? (
          <div className='content'>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}