import { createContext, useState,useEffect } from "react";


export const MoviesContext = createContext();

export const MovieProvider = ({children,type} ) => {
    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const [index,setIndex] = useState(1)
    useEffect(()=>{
        fetchMovies()
    },[])
    const fetechMoreMovies = async() =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${index}`
            );
        const moviesList = await data.json();
        setMovies([...movies, ...moviesList.results]);
        setFiltered([...movies,...moviesList.results]);
        setIndex(index+1)
    }
    const fetchMovies = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${type.toLowerCase()}?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=${index}`
            );
        const moviesList = await data.json();
        setMovies(moviesList.results);
        setFiltered(moviesList.results);
        setIndex(index+1)
    };
    return(
        <MoviesContext.Provider value={{filtered,setFiltered , activeGenre , setActiveGenre ,movies,setMovies ,fetechMoreMovies}}>
            {children}
        </MoviesContext.Provider>
    )

}




