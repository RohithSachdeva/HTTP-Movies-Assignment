import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = props => {
    const [movie, setMovie] = useState({
        id:'',
        title: '',
        director: '',
        metascore: '',
        stars:[]
    });

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then( res => {
            console.log(res)
            setMovie(res.data);
        })
    }, [props.match.params.id])
    
    const handleChange = e => {
        setMovie({ ...movie, [e.target.name]: e.target.value})
    } 

    const handleSubmit = e => {
        e.preventDefault();
        axios 
        .put(`http:localhost:5000/api/movies/${movie.id}`, movie)
        .then (res => { 
            props.history.push(`/movies/${movie.id}`);
        })
        .catch(err => {
            console.log('error', err)
        })
    }
return( 
<div>
    <h1>Update Movie</h1>
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        id='title'
        name='title'
        value={movie.title}
        onChange={handleChange}
        />
        <input
        type='text'
        id='director'
        name='director'
        value={movie.director}
        onChange={handleChange}
        />
        <input
        type='text'
        id='metascore'
        name='metascore'
        value={movie.metascore}
        onChange={handleChange}
        />
        <input
        type='text'
        id='stars'
        name='stars'
        value={movie.stars}
        onChange={handleChange}
        />
        <button type='submit'>Update Movie</button>
    </form>
</div>
)
}

export default UpdateMovie;








// {
//     id: 5,
//     title: 'Tombstone',
//     director: 'George P. Cosmatos',
//     metascore: 89,
//     stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
//   }

// Add a route at the path /update-movie/:id
// Create a component with a form to update the chosen movie
// Add a button in the movie component that routes you to your new route with the movies's id as the URL param
// The form should make a PUT request to the server when submitted
// When the call comes back successfully, reset your form state and route the user to /movies where they will see the updated movie in the list