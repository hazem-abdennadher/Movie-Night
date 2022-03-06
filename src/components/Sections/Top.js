import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "../Filter";
import Movies from "../Movies";
const Top = () => {
    const {topMovies} = useContext(MoviesContext)
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    return ( 
        <section className="section">
            <header className="headline">Top Rated Movies</header>
            <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={topMovies} />
            <Movies length={20} movieData={filtered? filtered: topMovies} />
        </section>
    );
}
 
export default Top;