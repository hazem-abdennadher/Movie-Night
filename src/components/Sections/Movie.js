import { motion } from "framer-motion";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import viewMore from "../../Images/view-more.png"
const Movie = ({movie}) => {
    const {setMovieInfo,setTrigger} = useContext(MoviesContext)
    

    const showPopup = ()=>{
        setMovieInfo(movie)
        setTrigger(true)
    }
    return ( 
        <motion.div onClick={()=>showPopup()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout className="movie" >
            <img className="movie-img"  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
            <div className="view-more">
                <img src={viewMore} alt="show more" />
                <h4>View More</h4>
            </div>
            <div className="content">
                <p className="date">{movie.release_date}</p>
                <h4 className="title">{movie.title}</h4>
            </div>
           
            
        </motion.div>
    );
}
 
export default Movie;