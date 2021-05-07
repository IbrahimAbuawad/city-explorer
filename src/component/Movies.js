import React, { Component } from 'react';
import Movie from './Movie';


export class Movies extends Component {
    render() {
        return (
            this.props.moviesD.map(element => {
                return (
                    <Movie
                    title={element.title}
                    poster={element.poster}
                    overview={element.overview}
                    vote_count={element.vote_count}
                    release_date={element.release_date}/>
                )
            })
        )
    }
}



export default Movies
