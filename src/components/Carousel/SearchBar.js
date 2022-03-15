import { useContext} from "react";
import {  useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/MoviesContext";
import search from "../../Images/search.png"
const SearchBar = ({enableStyle =false}) => {
    
    const {setSearchKey,searchKey,fetchSearch,setsearchedMoviesIndex} = useContext(MoviesContext)
    
    let navigate = useNavigate(); 
    const routeChange = async() =>{
        if(searchKey!== ""){
            setsearchedMoviesIndex(1) 
            await fetchSearch()
            let path = `/Movie-Night/search`; 
            navigate(path);
        }
    }
    const submit = (e) =>{
        
        if(e.keyCode === 13) {
            routeChange()
        }
    }

    
    return ( 
        <div className="search-bar" id={enableStyle?"section-search":""}>
            <input id="usersearch" onKeyDown={(e)=> submit(e)} type="text" placeholder="What do you want to watch?" value={searchKey} onChange={e=>{setSearchKey(e.target.value)}} />
            <button onClick={e=>routeChange()}> <img src={search} alt="search icon"/></button>
        </div>
    );
}
 
export default SearchBar;
