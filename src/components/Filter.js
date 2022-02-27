import { useEffect,useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
const Filter = () => {
    const {setFiltered,activeGenre,popular,setActiveGenre} = useContext(MoviesContext)
    useEffect(()=>{
        if(activeGenre ===0){
            setFiltered(popular);
            return 
        }
        const Filtred = popular.filter((movie)=> movie.genre_ids.includes(activeGenre))
        setFiltered(Filtred)
    },[activeGenre])
    return ( 
        <div className="filter-container">
            <button className={activeGenre ===0 ? "active" : ""} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre ===28 ? "active" : ""} onClick={()=>setActiveGenre(28)} >Action</button>
            <button className={activeGenre ===35 ? "active" : ""} onClick={()=>setActiveGenre(35)}>Comedy</button>
        </div>
     );
}
 
export default Filter;