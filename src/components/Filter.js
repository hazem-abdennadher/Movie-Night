import { useEffect,useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
const Filter = () => {
    const {setFiltered,activeGenre,movies,setActiveGenre} = useContext(MoviesContext)
    useEffect(()=>{
        if(activeGenre ===0){
            setFiltered(movies);
            return 
        }
        const Filtred = movies.filter((movie)=> (movie.genre_ids.includes(activeGenre) && movie.backdrop_path ))
        setFiltered(Filtred)
    },[activeGenre,movies])
    return ( 
        <div className="filter-container">
            <button className={activeGenre ===0 ? "active" : ""} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre ===28 ? "active" : ""} onClick={()=>setActiveGenre(28)} >Action</button>
            <button className={activeGenre ===35 ? "active" : ""} onClick={()=>setActiveGenre(35)}>Comedy</button>
        </div>
     );
}
 
export default Filter;