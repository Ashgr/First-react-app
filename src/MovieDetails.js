import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
    const {id} =  useParams();
    const {  data:movies, isLoading, error} = useFetch("http://localhost:8000/movies/" + id);
    const history = useHistory();
    const [Loading , setLoading] = useState(false);
    const handleSubmit = () =>{
        setLoading(true);
        fetch('http://localhost:8000/movies/' + movies.id,{
            method : "DELETE"
        }).then(()=>{
            setLoading(false);
            history.push('/');
        })
    }
    // console.log(movies)
    return ( 
        <div className="movie-details">
            { error && <div>{ error }</div> }
            {isLoading && <div className = "loading">Loading....</div>}
            {movies && (
                <article>
                    <h2>{movies.name}</h2>
                    <p>Directed by: {movies.director}</p>
                    <p>Category : {movies.category}</p>
                    <div>{movies.snippet}</div>
                    {!Loading && <button onClick = {handleSubmit}>Delete</button>}
                    {Loading && <button disabled>Deleting Movie....</button>}
                </article>
            )}
        </div>
     );
}
 
export default MovieDetails;