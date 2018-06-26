import React, {Component} from 'react';

class Movie extends Component{
  render(){
    return(
      <div className="movie">
        <h4 className="movie-name">{this.props.movie_name}</h4>
        <p>{this.props.children}</p>

      </div>
    )
  }
}

export default Movie;
