import { motion } from "framer-motion";
const Movie = ({movie}) => {
    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout className="movie">
            <div className="content">
                <h2 className="title">{movie.title}</h2>
                <p className="date">{movie.release_date}</p>
                
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="img"/>
        </motion.div>
    );
}
 
export default Movie;