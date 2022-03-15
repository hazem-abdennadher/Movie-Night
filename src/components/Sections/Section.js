import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Filter from "./Filter";
import MoviesList from "./MoviesList";
import HeadLine from "./HeadLine";
import SearchBar from "../Carousel/SearchBar";
import notFound from "../../Images/not-found.png"
const Section = ({type,link,length ,enableFilter = false, enableSeeMore=false, enableShowMoreBtn=false, enableSearch=false}) => {
    const [filtered, setFiltered] = useState(null);
    const [activeGenre, setActiveGenre] = useState(0);
    const [movieData,setMovieData] = useState([])
    const {searchedMovies,popularMovies,topMovies,upcomingMovies,nowMovies,fetechMoreMovies} = useContext(MoviesContext)

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
            case "search" : 
                setMovieData(searchedMovies)
                setTitle("");
                break
            default:

                break;
        }
    },[type,popularMovies,nowMovies,upcomingMovies,topMovies,searchedMovies])
    return ( 
        <div>
            {enableSearch && <SearchBar enableStyle id="section-search"/>}
            {movieData.length>0 && <section className="section">
                    <HeadLine className="headline" title={title} link={link} enableSeeMore ={enableSeeMore}/>
                    {enableFilter && <Filter setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movieData={movieData} />}
                    <MoviesList length={length}  movieData={filtered? filtered: movieData} enableSeeMore={enableSeeMore} />
                    {enableShowMoreBtn && <div className="show-more">
                                            <button className="show-more-btn" onClick={()=> fetechMoreMovies(type)}><span className="text">Show More</span></button>
                                          </div>}  
            </section>}
            {!movieData.length>0 && <section className="error-section" >
                <img id="not-found"src={notFound} alt="not found" />
                <h1 className=" error">Sorry We Can't Find Any Movies</h1>
                </section> }
        </div>
            
    );
}

export default Section;