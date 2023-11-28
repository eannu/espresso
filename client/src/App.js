import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.prices }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/get_prices');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <table>
        <thead><th>Hour</th><th>Price</th></thead>
        {this.state.data && (this.state.data.map(x => <tr><td style={{paddingRight: 15, paddingLeft: 15}}>{x.startDate.replace("T"," ").slice(0,16)}</td><td style={{paddingRight: 15, paddingLeft: 15}}>{ x.price }</td></tr>))}
      </table>
    );
  }
}

export default App;