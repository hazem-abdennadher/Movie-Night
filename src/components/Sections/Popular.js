import { useContext, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "../Filter";
import MoviesList from "../MoviesList";
import HeadLine from "./HeadLine";
const Popular = ({title,type,length,enableFilter, enableSeeMore =false}) => {
    const [filtered, setFiltered] = useState(null);
    const [activeGenre, setActiveGenre] = useState(0);
    switch (type) {
        case "Popular": 
            const {type:popularMovies} = useContext(MoviesContext)
            break;
        case "top": 
            const {type:topMovies} = useContext(MoviesContext)
            break;
        case "upcoming": 
            const {type:upcomingMovies} = useContext(MoviesContext)
            break;
            
        default:
            const {type:nowMovies} = useContext(MoviesContext)
            break;
    }

    return ( 
        <section className="section">
            <HeadLine title={title} link="./Popular" enableSeeMore ={enableSeeMore}/>
            {enableFilter && <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={type} />}
            <MoviesList length={length} movieData={filtered? filtered: type} />
        </section>
    );
}

export default Popular;