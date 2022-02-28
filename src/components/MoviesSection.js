
import { MovieProvider } from "../context/MoviesContext";
import Filter from "./Filter";
import PopularMovies from "./PopularMovies";
const MovieSection = ({type}) => {
    return ( 
        <MovieProvider type={type} >
            <section className="section">
                <header className="headline">{type} Movies</header>
                <Filter/>
                <PopularMovies/>
            </section>
        </MovieProvider>
     );
}
 
export default MovieSection;