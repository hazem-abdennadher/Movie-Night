import { useState,useEffect } from "react";
import { MovieProvider } from "../context/MoviesContext";
import Filter from "./Filter";
import PopularMovies from "./PopularMovies";
const MovieSection = ({type}) => {

    const [title, setTitle] = useState("")

    useEffect(() => {
      if(type==="popular"){
          setTitle("Popular")
      }
      else if(type === "top_rated" ){
          setTitle("Top Rated")
      }
      else if(type ==="upcoming"){
          setTitle("Upcoming")
      }
      else if(type ==="now_playing"){
          setTitle("Now Playing")
      }
    }, [type])
        
    return ( 
        <MovieProvider type={type} >
            <section className="section">
                <header className="headline">{title} Movies</header>
                <Filter/>
                <PopularMovies/>
            </section>
        </MovieProvider>
     );
     
}
 
export default MovieSection;