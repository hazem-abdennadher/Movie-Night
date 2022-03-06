import { useState,useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "../Filter";
import Movies from "../Movies";
const Upcoming = () => {
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    
    const {upcomingMovies} = useContext(MoviesContext)
    return ( 
        <section className="section">
            <header className="headline">Upcoming Movies</header>
            <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={upcomingMovies} />
            <Movies length={20} movieData={filtered ? filtered:upcomingMovies } />
        </section>
    );
}
 
export default Upcoming;