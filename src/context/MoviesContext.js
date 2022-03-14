import { createContext, useState,useEffect } from "react";


export const MoviesContext = createContext();

export const MovieProvider = ({children}) => {

    const [trigger,setTrigger] = useState(false);
    const [movieInfo,setMovieInfo] = useState(null);

    const [searchKey,setSearchKey] = useState("")
    const [searchedMovies,setSearchedMovies] = useState([])
    const [searchedMoviesIndex , setsearchedMoviesIndex] = useState(1)

    const [popularMovies, setPopularMovies] = useState([]);
    const [popularMoviesIndex , setPopularMoviesIndex] = useState(1)

    const [topMovies, setTopMovies] = useState([]);
    const [topMoviesIndex , setTopMoviesIndex] = useState(1)

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [upcomingMoviesIndex , setUpcomingMoviesIndex] = useState(1)

    const [nowMovies, setNowMovies] = useState([]);
    const [nowMoviesIndex , setNowMoviesIndex] = useState(1)
    useEffect(()=>{
        fetchMovies()
    },[])
    const fetchSearch = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1&query=${searchKey}`)
        const searched = await data.json()
        setSearchedMovies(searched.results)
        setsearchedMoviesIndex(2)
        console.log(searched.results)
    }
    const fetechMoreMovies = async(type) =>{
        switch (type) {
            case "popular":
                const popularData = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${popularMoviesIndex}`
                    );
                const popularMoviesList = await popularData.json();
                setPopularMovies([...popularMovies, ...popularMoviesList.results]);
                setPopularMoviesIndex(popularMoviesIndex+1)
                break;
            case "now":
                const nowData = await fetch(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${nowMoviesIndex}`
                    );
                const nowMoviesList = await nowData.json();
                setNowMovies([...nowMovies, ...nowMoviesList.results]);
                setNowMoviesIndex(nowMoviesIndex+1)
                break;
            case "top":
                const topData = await fetch(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${topMoviesIndex}`
                    );
                const topMoviesList = await topData.json();
                
                setTopMovies([...topMovies, ...topMoviesList.results]);
                setTopMoviesIndex(topMoviesIndex+1)
                break;
            case "upcoming":
                const upcomingData = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${upcomingMoviesIndex}`
                    );
                const upcomingMoviesList = await upcomingData.json();
                setUpcomingMovies([...upcomingMovies, ...upcomingMoviesList.results]);
                setUpcomingMoviesIndex(upcomingMoviesIndex+1)
                break;
            case "search":
                const searchData = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${searchedMoviesIndex}&query=${searchKey}`
                    );
                const searchMovielist = await searchData.json();
                setSearchedMovies([...searchedMovies, ...searchMovielist.results]);
                setsearchedMoviesIndex(searchedMoviesIndex+1)
                console.log(searchMovielist.result)
                break;
            default:
                break;
        }
       
    }
    const fetchMovies = async () => {
        //---------------------------------------------------------------------------------------------------------------------------//
            const popularData = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
                
            const popularMoviesList = await popularData.json();
            setPopularMovies(popularMoviesList.results)
            setPopularMoviesIndex(popularMoviesIndex+1)
        //---------------------------------------------------------------------------------------------------------------------------//
        
            const topData = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
                
            const topMoviesList = await topData.json();
            setTopMovies(topMoviesList.results)
            setTopMoviesIndex(topMoviesIndex+1)

        //---------------------------------------------------------------------------------------------------------------------------//
        
            const upcomingData = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
            const upcomingMoviesList = await upcomingData.json();
            setUpcomingMovies(upcomingMoviesList.results)
            setUpcomingMoviesIndex(upcomingMoviesIndex+1)
        //---------------------------------------------------------------------------------------------------------------------------//
        
        
            const nowData = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
            const nowMoviesList = await nowData.json();
            setNowMovies(nowMoviesList.results)
            setNowMoviesIndex(nowMoviesIndex+1)
        //---------------------------------------------------------------------------------------------------------------------------//
        
        
    };
    return(
        <MoviesContext.Provider value={{setsearchedMoviesIndex,searchedMovies,fetchSearch,searchKey,setSearchKey,trigger,setTrigger,movieInfo,setMovieInfo,fetechMoreMovies,popularMoviesIndex,topMoviesIndex,nowMoviesIndex,upcomingMoviesIndex,popularMovies,setPopularMovies,topMovies,setTopMovies,nowMovies,setNowMovies,upcomingMovies,setUpcomingMovies }}>
            {children}
        </MoviesContext.Provider>
    )

}




