import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Weather extends Component {

    render() {
        return (
            <div id='centerDiv'>

                <>
                    <Table striped bordered hover responsive className="w-50 tableDate">

                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                    </Table>
                    {this.props.weatherD.map(element => {
                        return <>
                            <Table striped bordered hover responsive className='w-50 tableDate tableData'  >

                                <tbody>
                                    <tr>
                                        <td>{element.date}</td>
                                        <td>{element.description}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </>
                    })}
                </>
            </div>
        )
    }
}

export default Weather
