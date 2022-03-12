import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "./Filter";
import MoviesList from "./MoviesList";
import HeadLine from "./HeadLine";
const Section = ({type,link,length,enableFilter = false, enableSeeMore = false,enableShowMoreBtn=true}) => {
    const [filtered, setFiltered] = useState(null);
    const [activeGenre, setActiveGenre] = useState(0);
    const [movieData,setMovieData] = useState([])

    const {popularMovies,topMovies,upcomingMovies,nowMovies} = useContext(MoviesContext)
    const [title,setTitle] = useState("")
    useEffect(()=>{
        switch (type) {
            case "popular":
                setMovieData(popularMovies)
                setTitle("Popular Movies");
                break;
            case "now":
                setMovieData(nowMovies)
                setTitle("Now Playing Movies");
                break;
            case "top":
                setMovieData(topMovies)
                setTitle("Top Rated Movies");
                break;
            case "upcoming":
                setMovieData(upcomingMovies)
                setTitle("Upcoming Movies");
                break;
            default:
                break;
        }
    },[type,popularMovies,nowMovies,upcomingMovies,topMovies])
    return ( 
       
            <section className="section">
                    <HeadLine title={title} link={link} enableSeeMore ={enableSeeMore}/>
                    {enableFilter && <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={movieData} />}
                    <MoviesList length={length} movieData={filtered? filtered: movieData} enableSeeMore={enableSeeMore} />
                    {enableShowMoreBtn && <div className="show-more">
                                            <button className="show-more-btn"><span className="text">Show More</span></button>
                                          </div>}
            </section>
    );
}

export default Section;