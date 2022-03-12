import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Movie = ({movie}) => {
    const [youtubeLink, setYoutubeLink] = useState("")
    // useEffect(()=>{
    //     getTrailerLink()
    // },[])
    // const getTrailerLink = async () =>{

    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US`)
    //     const res = await data.json();
    //     const link =res.results.filter(vide => vide.type.includes("Trailer"))[0].key
    //     setYoutubeLink(`https://www.youtube.com/watch?v=${link}`)
    // }
    return ( 
        <a href={youtubeLink} >

        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout className="movie" >
            <div className="content">
                <h2 className="title">{movie.title}</h2>
                <p className="date">{movie.release_date}</p>
                
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
        </motion.div>
        </a>
    );
}
 
export default Movie;