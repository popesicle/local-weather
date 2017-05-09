import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    }
  }


  componentDidMount() {
    axios.get('https://api.darksky.net/forecast/057470c3fbde84644bd0fdad110dc863/30.267153,-97.743061')
    .then(data => {
      console.log(data.data)
      const weather = data.data.currently;
      this.setState({ weather });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>And Now... the Weather</h1>
        {this.state.weather.humidity}
      </div>
    );
  }
}

export default App;
