import React, {Component} from 'react';

class Movie extends Component{
  render(){
    return(
      <div className="movie">
        <button>+</button>
        <h4 className="movie-name">{this.props.movie_name}</h4>
        <a href="http://www.imdb.com">showtimes</a>

      </div>
    )
  }
}

export default Movie;
