import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 10

        }
    }

updateSize = (e)=>{
    e.preventDefault();
   let sizeValue =  Number(e.target.value);

   this.setState({
       size:sizeValue
   })
}
    render() {
        return (
            <>

                <Form>
                    <Form.Label>Location</Form.Label>
                    <br />
                    <Form.Control type="text" placeholder="Enter location" onChange={this.props.getlocation} />
                    <Button variant="primary" type="submit" onClick={this.props.getdata}>Explore</Button>
                </Form>
                {this.props.visi &&
                    <>
                        <p>
                            {this.props.data.display_name} is located at {this.props.data.lat} by {this.props.data.lon}
                        </p>
                        
                        <Form>
                            <Form.Label>Change the map size</Form.Label>
                            <Form.Control type='number' min='0' max='18'  onChange={this.updateSize}/>
                        </Form>
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d75d43b43c0dacdf9e557f8243d5faee&center=${this.props.data.lat},${this.props.data.lon}&zoom=${this.state.size}`}
                            alt='map' />
                    </>
                }
            </>
        )
    }
}

export default Map
