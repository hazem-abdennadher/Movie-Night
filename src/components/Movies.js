import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "./Movie"

const Movies = () => {
    const {filtered,fetechMoreMovies} = useContext(MoviesContext)
    return ( 
      <div>
        <div className="popular-movies">
            <AnimatePresence>$
              {filtered.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </AnimatePresence>
            
        </div>
        <div className="show-more">
          <button className="show-more-btn" onClick={fetechMoreMovies}><span className="text">Show More</span></button>
        </div>
      </div>
     );
}
 
export default Movies;