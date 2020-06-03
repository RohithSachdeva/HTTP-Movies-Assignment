import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

componentDidMount() {
  axios
  .get(`http://localhost:5000/api/movies`)
  .then(res =>
    this.setState({ movies: res.data }))
    .catch(err => 
      console.log('error', err.response));
}

render() {
  return (
    <div className='movie-list'>
      {this.state.movies.map(movie => (
        <Movies2 key={movie.id} movie={movie} />
      ))}
    </div>
  )
}


}

function Movies2({movie}) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  )
}


// function MovieList({ movies }) {
//   return (
//     <div className="movie-list">
//       {
//         movies.map(movie => (
//           <Link key={movie.id} to={`/movies/${movie.id}`}>
//             <MovieCard movie={movie} />
//           </Link>
//         ))
//       }
//     </div>
//   );
// }

// export default MovieList;
