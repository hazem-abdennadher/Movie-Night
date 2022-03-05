import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "../Filter";
import Movies from "../Movies";
const Now = () => {
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const {nowMovies} = useContext(MoviesContext)
    return ( 
        <section className="section">
            <header className="headline">Now Playing Movies</header>
            <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={nowMovies} />
            <Movies length={20} movieData={filtered? filtered: nowMovies} />
        </section>
    );
}
 
export default Now;