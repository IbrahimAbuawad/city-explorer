import axios from 'axios';
import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locationName: '',
      data: '',
      show: true,
      visi: false,
      weatherD: []


    }
  }

  getLocation = (e) => {
    e.preventDefault();
    let value = e.target.value;

    this.setState({
      locationName: value
    })
  }

  getData = async (e) => {
    try {
      e.preventDefault();
      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API}&q=${this.state.locationName}&format=json`;

      const myAPI = `${process.env.REACT_APP_HOST}/weather`;
      const showAPI = await axios.get(myAPI);

      const req = await axios.get(locationAPI);
      this.setState({
        data: req.data[0]
      })



      this.setState({
        visi: true,
        weatherD: showAPI.data
      })
    }


    catch (err) {

      console.log('iam false', err);
      this.setState({
        show: false
      })

    }


  }
  goBack = () => window.location.reload();


  render() {

    return (
      <>
        <Header />
        <Main
          getlocation={this.getLocation}
          getdata={this.getData}
          visi={this.state.visi}
          data={this.state.data}
          show={this.state.show}
          goback={this.goBack}
          size={this.state.size}
          weatherD={this.state.weatherD} />
        <Footer />
      </>
    )
  }
}

export default App
