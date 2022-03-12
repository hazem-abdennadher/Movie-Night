import { createContext, useState,useEffect } from "react";


export const MoviesContext = createContext();

export const MovieProvider = ({children}) => {
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

    /*const fetechMoreMovies = async(type) =>{
        switch (type) {
            case "popular":
                const popularData = await fetch(
                    `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${popularMoviesIndex}`
                    );
                const popularMoviesList = await popularData.json();
                setPopularMovies([...popularMovies, ...popularMoviesList.results]);
                setPopularMoviesIndex(popularMoviesIndex+1)
                break;
            case "now":
                const nowData = await fetch(
                    `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${nowMoviesIndex}`
                    );
                const nowMoviesList = await nowData.json();
                setNowMovies([...nowMovies, ...nowMoviesList.results]);
                setNowMoviesIndex(nowMoviesIndex+1)
                break;
            case "top":
                const topData = await fetch(
                    `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${topMoviesIndex}`
                    );
                const topMoviesList = await topData.json();
                setTopMovies([...topMovies, ...topMoviesList.results]);
                setTopMoviesIndex(topMoviesIndex+1)
                break;
            case "upcoming":
                const upcomingData = await fetch(
                    `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${upcomingMoviesIndex}`
                    );
                const upcomingMoviesList = await upcomingData.json();
                setUpcomingMovies([...upcomingMovies, ...upcomingMoviesList.results]);
                setUpcomingMoviesIndex(upcomingMoviesIndex+1)
                break;
            default:
                break;
        }
       
    }*/
    const fetchMovies = async () => {
        //---------------------------------------------------------------------------------------------------------------------------//
            const popularData = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
                
            const popularMoviesList = await popularData.json();
            
            console.log(popularMoviesList)
            setPopularMovies(popularMoviesList.results)
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
        <MoviesContext.Provider value={{popularMoviesIndex,topMoviesIndex,nowMoviesIndex,upcomingMoviesIndex,popularMovies,setPopularMovies,topMovies,setTopMovies,nowMovies,setNowMovies,upcomingMovies,setUpcomingMovies }}>
            {children}
        </MoviesContext.Provider>
    )

}




