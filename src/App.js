import axios from 'axios';
import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locationName: '',
      data: '',
      show: true,
      visi: false

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
      console.log(process.env.REACT_APP_LOCATION_API);

      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API}&q=${this.state.locationName}&format=json`;
      const myAPI = `${process.env.REACT_APP_HOST}/about`;
      const showAPI = await axios.get(myAPI);
      console.log(showAPI.data);
      const req = await axios.get(locationAPI);
      this.setState({
        data: req.data[0]
      })



      this.setState({
        visi: true
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
        size={this.state.size}/>
        <Footer  />
      </>
    )
  }
}

export default App
