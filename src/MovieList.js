import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
    // console.log(movies);
    return (  
        <div className="home">
        <h2>Home Page</h2>
        <br></br>
            <div className="container">
            {movies.map((movie)=>(
                <Link to = {'/movies/'+movie.id}>
                    <div className="movie-card" key ={movie.id}>
                        <h2>{movie.name}</h2>
                        <br></br>
                        <div className="movie-about">About: {movie.snippet}</div>
                        <div className="movie-info">
                            Category: {movie.category}
                            <br></br>
                            Directed By: {movie.director}
                        </div>
                    </div>
                </Link>
                    
                ))}
            </div>
        </div>
    );
}
 
export default MovieList;