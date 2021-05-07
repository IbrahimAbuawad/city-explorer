import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



export class Movie extends Component {
    render() {
        return (
            <div className='movieDiv'>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${this.props.poster}`} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text id='discOfMovie'>
                        {this.props.overview}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <span id='blue' >Vote Count : {this.props.vote_count}</span>
                    <span id='red' >Release Date : {this.props.release_date}</span>

                </Card.Footer>
            </Card>
        </div>
        )
    }
}

export default Movie
