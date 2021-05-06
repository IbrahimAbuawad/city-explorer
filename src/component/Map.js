import React, { Component } from 'react';
import { Form, Button, Image, Col } from 'react-bootstrap';

export class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: 15

        }
    }

    updateSize = (e) => {
        e.preventDefault();
        let sizeValue = Number(e.target.value);

        this.setState({
            size: sizeValue
        })
    }
    render() {
        return (
            
                <>

                    <Form>
                        <Form.Label className='p-2 m-2 lable' >Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter location" onChange={this.props.getlocation} className='w-25 p-2 m-2' />
                        <Button variant="primary" type="submit" onClick={this.props.getdata} className='w-25 p-2 m-2'>Explore</Button>
                    </Form>
                    {this.props.visi &&
                        <>
                            <p className='w-100 p-2 m-2'>
                                {this.props.data.display_name} is located at {this.props.data.lat} by {this.props.data.lon}
                            </p>
                            <Form>
                                <Form.Label className='p-2 m-2 size lable' >Change the map size</Form.Label>
                                <Form.Control type='number' min='0' max='18' value={this.state.size} onChange={this.updateSize} className='w-25 p-2 m-2 size' />
                            </Form>

                            <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API}&center=${this.props.data.lat},${this.props.data.lon}&zoom=${this.state.size}`}
                                alt='map' thumbnail className='mapImage' />
                        </>
                    }
                </>
            
        )
    }
}

export default Map
