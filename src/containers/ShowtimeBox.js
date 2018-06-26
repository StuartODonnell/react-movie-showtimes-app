import React, {Component} from 'react';
import MovieList from '../components/MovieList.js'

class ShowtimeBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[{id: 1, movie_name: "Movie 1", showtimes: "times"},
      {id: 2, movie_name: "Movie 2", showtimes: "times"},
      {id: 3, movie_name: "Movie 3", showtimes: "times"},
    ]

  };
}

render(){
  return(
    <div className="showtime-box">
      <h2>UK Opening This Week</h2>
      <MovieList data={this.state.data}/>
            <a rel="stylesheet" href="">See more opening this week</a>
      <button onClick={this.movie}>Get Showtimes>></button>

    </div>
  )
}

}

export default ShowtimeBox;
