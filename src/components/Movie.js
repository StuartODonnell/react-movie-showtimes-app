import React, {Component} from 'react';

class Movie extends Component{
  render(){
    return(
      <div className="movie">
        <button>+</button>
        <ul className="movie-name">{this.props.movie_name}</ul>
        <a href="http://www.imdb.com">showtimes</a>

      </div>
    )
  }
}

export default Movie;
