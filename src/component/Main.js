import React, { Component } from 'react';
import Error from './Error';
import Map from './Map';
import Weather from './Weather';
import Movies from './Movies';
import CardGroup from 'react-bootstrap/CardGroup';


export class Main extends Component {
    render() {
        return (
            <>
                {this.props.show === false &&

                    <Error goback={this.props.goback} />
                }
                {this.props.show === true &&
                    <>
                        <Map
                            getlocation={this.props.getlocation}
                            getdata={this.props.getdata}
                            data={this.props.data}
                            visi={this.props.visi}
                            size={this.props.size} />
                        <Weather weatherD={this.props.weatherD} />
                        <CardGroup><Movies moviesD={this.props.moviesD}/></CardGroup>
                         
                    </>
                }
            </>
        )
    }
}

export default Main
