import { useEffect } from "react";
const Filter = ({movieData,setFiltered,activeGenre,setActiveGenre}) => {
    useEffect(()=>{
        if(activeGenre ===0){
            setFiltered(movieData);
            return 
        }
        const Filtred = movieData.filter((movie)=> movie.genre_ids.includes(activeGenre))
        setFiltered(Filtred)
    },[activeGenre,movieData,setFiltered])
    return ( 
        <div className="filter-container">
            <button className={activeGenre ===0 ? "active" : ""} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre ===28 ? "active" : ""} onClick={()=>setActiveGenre(28)} >Action</button>
            <button className={activeGenre ===35 ? "active" : ""} onClick={()=>setActiveGenre(35)}>Comedy</button>
        </div>
     );
}
 
export default Filter;