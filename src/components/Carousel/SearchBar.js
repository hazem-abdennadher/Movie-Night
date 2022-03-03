import search from "../../Images/search.png"
const SearchBar = () => {
    return ( 
        <div className="search-bar">
            <input type="text" placeholder="What do you want to watch?" />
            <button> <img src={search} alt="search icon"/></button>
        </div>
    );
}
 
export default SearchBar;
