import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "./Movie"

const PopularMovies = () => {
    const {filtered} = useContext(MoviesContext)
    return ( 
        <div className="popular-movies">
            <AnimatePresence>
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        
        </div>
     );
}
 
export default PopularMovies;