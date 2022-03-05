import { createContext, useState,useEffect } from "react";


export const MoviesContext = createContext();

export const MovieProvider = ({children}) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    useEffect(()=>{
        fetchMovies()
    },[])
    //  const fetechMoreMovies = async() =>{
    //     const data = await fetch(
    //         `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
    //         );
    //     const moviesList = await data.json();
    //     setMovies([...movies, ...moviesList.results]);
    //     setFiltered([...movies,...moviesList.results]);
    // }
    const fetchMovies = async () => {
        //---------------------------------------------------------------------------------------------------------------------------//
        if(popularMovies.length === 0 ){
            const popularData = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
                );
            const popularMoviesList = await popularData.json();
            setPopularMovies(popularMoviesList.results)
        }
        //---------------------------------------------------------------------------------------------------------------------------//
        
        const topData = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1`
            );
        const topMoviesList = await topData.json();
        setTopMovies(topMoviesList.results)

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
        //---------------------------------------------------------------------------------------------------------------------------//
        
        
    };
    return(
        <MoviesContext.Provider value={{popularMovies,setPopularMovies,topMovies,setTopMovies,nowMovies,setNowMovies,upcomingMovies,setUpcomingMovies }}>
            {children}
        </MoviesContext.Provider>
    )

}




