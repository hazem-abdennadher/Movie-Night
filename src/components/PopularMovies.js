import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Movie from "./Movie"

const PopularMovies = () => {
    const {filtered,fetechMoreMovies} = useContext(MoviesContext)
    console.log(filtered)
    return ( 
        <div className="popular-movies">
            <AnimatePresence>$
              {filtered.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </AnimatePresence>
            <button onClick={()=>fetechMoreMovies()}>Show More</button>
        </div>
     );
}
 
export default PopularMovies;