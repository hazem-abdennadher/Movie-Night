import { AnimatePresence } from "framer-motion";
import Movie from "./Movie"

const Movies = ({length,movieData }) => {
    return ( 
      <div>
        <div className="popular-movies">
            <AnimatePresence>
              {movieData.slice(0,length).map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </AnimatePresence>
            
        </div>
      </div>
     );
}
 
export default Movies;