import React from 'react'

 const AvengerMovies = props => {
    return (
        <ul>
            {props.avenger.movies.map(movie => <li key={movie}>{movie}</li>)}/</ul>
        )
}

export default AvengerMovies