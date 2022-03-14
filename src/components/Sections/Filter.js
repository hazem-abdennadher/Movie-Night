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
    const getGenre =[ {28: "Action"},{12:"Adventure"},{16:"Animation"},{35:"Comedy"},
    {80:"Crime"},{99:"Documentary"},{18:"Drama"},{10751:"Family"},{14: 'Fantasy'},
    {36: 'History'},{27: 'Horror'},{10402: 'Music'},{9648: 'Mystery'},{10749: 'Romance'},
    {878: 'Science Fiction'},{10770: 'TV Movie'},{53: 'Thriller'},{10752: 'War'},{37 :'Western'}]
   
    return ( 
        <div className="filter-container">
            
            <button className={activeGenre ===0 ? "active" : ""} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre ===28 ? "active" : ""} onClick={()=>setActiveGenre(28)} >Action</button>
            <button className={activeGenre ===12 ? "active" : ""} onClick={()=>setActiveGenre(12)}>Adventure</button>
            <button className={activeGenre ===16 ? "active" : ""} onClick={()=>setActiveGenre(16)}>Animation</button>
            <button className={activeGenre ===35 ? "active" : ""} onClick={()=>setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre ===80 ? "active" : ""} onClick={()=>setActiveGenre(80)}>Crime</button>
            <button className={activeGenre ===99 ? "active" : ""} onClick={()=>setActiveGenre(99)}>Documentary</button>
            <button className={activeGenre ===18 ? "active" : ""} onClick={()=>setActiveGenre(18)}>Drama</button>
            <button className={activeGenre ===10751 ? "active" : ""} onClick={()=>setActiveGenre(10751)}>Family</button>
            <button className={activeGenre ===14 ? "active" : ""} onClick={()=>setActiveGenre(14)}>Fantasy</button>
            <button className={activeGenre ===10749 ? "active" : ""} onClick={()=>setActiveGenre(10749)}>Romance</button>
            <button className={activeGenre ===36 ? "active" : ""} onClick={()=>setActiveGenre(36)}>History</button>
            <button className={activeGenre ===27 ? "active" : ""} onClick={()=>setActiveGenre(27)}>Horror</button>
            <button className={activeGenre ===10402 ? "active" : ""} onClick={()=>setActiveGenre(10402)}>Music</button>
            <button className={activeGenre ===9648 ? "active" : ""} onClick={()=>setActiveGenre(9648)}>Mystery</button>
            <button className={activeGenre ===878 ? "active" : ""} onClick={()=>setActiveGenre(878)}>Science Fiction</button>
            <button className={activeGenre ===10770 ? "active" : ""} onClick={()=>setActiveGenre(10770)}>TV Movie</button>
            <button className={activeGenre ===53 ? "active" : ""} onClick={()=>setActiveGenre(53)}>Thriller</button>
            <button className={activeGenre ===10752 ? "active" : ""} onClick={()=>setActiveGenre(10752)}>War</button>
            <button className={activeGenre ===37 ? "active" : ""} onClick={()=>setActiveGenre(37)}>Western</button>
        </div>
     );
}
 
export default Filter;