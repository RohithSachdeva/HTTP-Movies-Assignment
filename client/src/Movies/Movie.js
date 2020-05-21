import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res =>
        this.setState({ movie: res.data }))
      .catch(err =>
        console.log('Error', err.response))
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
      .then(res => {
        this.props.history.push('/')
      })
  }
  render() {
    if (!this.state.movie) {
      return <div>Loading Movie</div>
    }
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />

        <div className="save-button" onClick={this.saveMovie}>
          Save
          </div>
        <div>
          <button>
          <Link to={`/update-movie/${this.state.movie.id}`}>Edit Movie</Link>
          </button>
          <button onClick={this.handleDelete}>Delete Movie</button>
          </div>
        </div>
  )
}
}



// const deleteItem = e => {
//   e.preventDefault();
//   axios
//     .delete(`http://localhost:3333/items/${item.id}`)
//     .then(res => {
//       // res.data
//       props.setItems(res.data);
//       push('/item-list');
//       // res.data ==> just the id
//       // const newItems = props.items.filter(v => `${v.id}` !== res.data)
//       // props.setItems(newItems)
//     })
//     .catch(err => console.log(err));
// };



// function Movie({ addToSavedList }) {
//   const [movie, setMovie] = useState(null);
//   const params = useParams();

//   const fetchMovie = (id) => {
//     axios
//       .get(`http://localhost:5000/api/movies/${id}`)
//       .then((res) => setMovie(res.data))
//       .catch((err) => console.log(err.response));
//   };

//   const saveMovie = () => {
//     addToSavedList(movie);
//   };

//   useEffect(() => {
//     fetchMovie(params.id);
//   }, [params.id]);

//   if (!movie) {
//     return <div>Loading movie information...</div>;
//   }

//   return (
//     <div className="save-wrapper">
//       <MovieCard movie={movie} />

//       <div className="save-button" onClick={saveMovie}>
//         Save
//       </div>
//     </div>
//   );
// }







// if (req.body.title !== undefined) {

//addToSavedList

// Add a delete button in the movie component that makes a DELETE request
// When the call comes back successfully, route the user to /movies where they will see the updated movie list without the deleted movie
// Part 3 (Stretch) - 

//function route? ... 

//Class route ... component did mount -->  receive props -> fetchmovie --> save to added/saved list -->  handle delete?   => Then basically the same during the render -> link to update movie ... button w this.handleDelete 