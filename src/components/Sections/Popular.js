import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "../Filter";
import Movies from "../Movies";
const Popular = ({length,enableFilter}) => {
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const {popularMovies} = useContext(MoviesContext)
    return ( 
        <section className="section">
            <header className="headline">Popular Movies</header>
            {enableFilter && <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={popularMovies} />}
            <Movies length={length} movieData={filtered? filtered: popularMovies} />
        </section>
    );
}

export default Popular;