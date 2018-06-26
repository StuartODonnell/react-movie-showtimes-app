import React, {Component} from 'react';
import Movie from './Movie.js'

class MovieList extends Component {
  render(){
    const listNodes = this.props.data.map(movie => {
      return (<Movie movie_name={movie.movie_name} key={movie.id}>{movie.text}</Movie>)

    });

    return(
      <div className="movie-list">
      <ul> {listNodes}</ul> 
      </div>


    )
  }
}

export default MovieList;
