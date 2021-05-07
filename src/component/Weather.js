import React, { Component } from 'react';
import WeatherDay from './WeatherDay';
import Table from 'react-bootstrap/Table';


export class Weather extends Component {

    render() {
        return (
            <>
                <Table striped bordered hover responsive className="w-50 tableDate">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {this.props.weatherD.map(element => {
                        return (

                            <WeatherDay
                                date={element.date}
                                description={element.description} />
                        )
                    })}

                </Table>
            </>

        )
    }

}


export default Weather
