import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isLoading, data: movies } = useFetch("http://localhost:8000/movies");
  // console.log(movies)
  return (
    <div>
      { error && <div>{ error }</div> }
      {isLoading && <div className = "loading">Loading....</div>}
      {movies && <MovieList movies = {movies} />}
    </div>
    
  );
}
 
export default Home;