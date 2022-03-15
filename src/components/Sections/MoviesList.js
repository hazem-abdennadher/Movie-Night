import { AnimatePresence } from "framer-motion";
import Movie from "./Movie"

const Movies = ({length,movieData}) => {
  
    return ( 
      <div>
        <div className="movies-list">
            <AnimatePresence>
              {movieData.slice(0,length).filter( movie => movie.backdrop_path).map((movie,index) => {
                return <Movie key={movie.id+index} movie={movie} />;
              })}
            </AnimatePresence>
            
        </div>
      </div>
     );
}
 
export default Movies;