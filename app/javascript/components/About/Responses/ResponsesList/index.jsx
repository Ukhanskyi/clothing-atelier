import React from 'react'
import Img from 'react-image'
import './styles.css'

export default class Home extends React.Component {
  constructor(responses) {
    super(responses);
    this.state = {
      responses: [],
    };
  }

  componentDidMount() {
    fetch('/responses.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ responses: data }) });
  }

  render() {
    var responses = this.state.responses.map((response) => {
      return (
        <div key={response.id}>
          <hr></hr>
          <div className="alert alert-light">
            <h3> {response.name}  {response.surname}</h3>
            <br></br>
            <p> {response.body} </p>
            {/* <Img src={'file:////' + response.nested_files}/> */}
            {/* <img className="rounded nestedImg">{ response.nested_files }</img> */}
            {/* <Img src="/uploads/response/nested_files/15/mem.jpg" className="rounded nestedImg" /> */}
            {/* <Img src={response.nested_files[1]} className="rounded nestedImg" /> */}

            <br />

          </div>
        </div>
      )
    })
    return (
      <div className="contant">
        <div className="container">
          {responses}
        </div>
      </div>
    )
  }
}
