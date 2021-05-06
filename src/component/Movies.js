import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export class Movies extends Component {
    render() {
        return (
            this.props.moviesD.map(element => {
                return (
                    <div className='movieDiv'>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${element.poster}`} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text id='discOfMovie'>
                                    {element.overview}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span id='blue' >Vote Count : {element.vote_count}</span>
                                <span id='red' >Release Date : {element.release_date}</span>

                            </Card.Footer>
                        </Card>
                    </div>
                )
            })
        )
    }
}



export default Movies
