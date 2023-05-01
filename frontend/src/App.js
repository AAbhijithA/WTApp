import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      newitem: {
        city: "",
        temp: null,
        humidity: null,
        weather_desc: "",
      },
      newCity: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/tasks/")
      .then(res => this.setState({ detail: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(event) {
    this.setState({ newCity: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    var { detail, newItem, newCity } = this.state;
    newItem = {
      id: detail.length + 1,
      city: newCity,
      temp: null,
      humidity: null,
    };
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post("http://localhost:8000/api/tasks/", newItem).catch(err=>console.log(err))
      .then(res => this.refreshList()).catch(err=>console.log(err))
    return;
  }
  render() {
    const { detail, newItem, newCity } = this.state;
    return (
      <div align='center'>
          <h1> Weather Tracking Application </h1>
          {detail.length > 0 && (
          <div key={detail[detail.length-1].id}>
          <p>City is: {detail[detail.length-1].city}</p>
            <p>Current temperature is: {detail[detail.length-1].temp - 273.15}°C</p>
            <p>Current Humidity % is: {detail[detail.length-1].humidity}</p>
          </div>)}
        <form onSubmit={this.handleSubmit}>
          <label>
            For new city: 
            <input type="text" value={newCity} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
