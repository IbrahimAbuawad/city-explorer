import axios from 'axios';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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

      const locationAPI = `https://us1.locationiq.com/v1/search.php?key=pk.d75d43b43c0dacdf9e557f8243d5faee&q=${this.state.locationName}&format=json`;

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
    if (this.state.show === false) {
      return (
        <div>
          <header>
            <h1>City Explorer</h1>
          </header>
          <main>
            <h3>Request failed with status code 400</h3>
            <h4>You didn't put correct value</h4>
            <Button onClick={this.goBack}>Press here to go back</Button>

          </main>
          <footer>
            <p>Ibrahim Abu-awad &copy;</p>
          </footer>
        </div>
      )
    }
    else {
      return (
        <div>
          {process.env.React_API_Key}
          <header>

            <h1>City Explorer</h1>
          </header>
          <main>
            <Form>
              <Form.Label>Location</Form.Label>
              <br />
              <Form.Control type="text" placeholder="Enter location" onChange={this.getLocation} />
              <Button variant="primary" type="submit" onClick={this.getData}>
                Explore
        </Button>
            </Form>
            {this.state.visi &&
              <>
                <p className={this.state.hidden ? 'hidden' : 'show'}>
                  {this.state.data.display_name} is located at {this.state.data.lat} by {this.state.data.lon}
                </p>


                <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d75d43b43c0dacdf9e557f8243d5faee&center=${this.state.data.lat},${this.state.data.lon}`}
                  alt='map' />
              </>}
          </main>
          <footer>
            <p>Ibrahim Abu-awad &copy;</p>
          </footer>
        </div>
      )



    }

  }
}

export default App
