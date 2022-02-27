import { createContext, useState,useEffect } from "react";


export const MoviesContext = createContext();

export const MovieProvider = (props ) => {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    useEffect(()=>{
      fetchPopular()
    },[])
    const fetchPopular = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US&page=1"
            );
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results);
    };
    return(
        <MoviesContext.Provider value={{filtered,setFiltered , activeGenre , setActiveGenre ,popular,setPopular}}>
            {props.children}
        </MoviesContext.Provider>
    )

}