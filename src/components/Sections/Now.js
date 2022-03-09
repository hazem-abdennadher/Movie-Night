import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import MoviesList from "../MoviesList";
const Now = () => {
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const {nowMovies} = useContext(MoviesContext)
    return ( 
        <section className="section">
            <header className="headline">
                <h2>Now Playing Movies</h2>
                <Link to='./Popular'><h4>See more <span>&#8883;</span></h4></Link>
            </header>

            <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={nowMovies} />
            <MoviesList length={20} movieData={filtered? filtered: nowMovies} />
        </section>
    );
}
 
export default Now;