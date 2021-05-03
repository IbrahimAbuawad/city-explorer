import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Error extends Component {
    render() {
        return (
            <>
                <div>
                    <h3>Request failed with status code 400</h3>
                    <h4>You didn't put correct value</h4>
                    <Button onClick={this.props.goback}>Press here to go back</Button>
                </div>
                
            </>
        )
    }
}

export default Error
