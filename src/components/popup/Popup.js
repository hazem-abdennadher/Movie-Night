import { useContext, useState,useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Genres from "./Genres";
import "./Popup.css"
const Popup = () => {
    const {trigger,movieInfo,setTrigger,setMovieInfo}=useContext(MoviesContext)
    const [youtubeLink,setYoutubeLink] = useState("");
    const [error,setError]= useState(false)
    useEffect(()=>{
        if(movieInfo===null) return
        getTrailerLink()
    },[movieInfo])
    const getTrailerLink = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieInfo.id}/videos?api_key=62dd59a78acdf594fa1c42daa3dd7408&language=en-US`)
        const res = await data.json();
        const link =res.results.filter(video => video.type.includes("Trailer"))[0]
        if(!link){
            setError(true)
            return ;
        }
        setYoutubeLink(`https://www.youtube.com/embed/${link.key}`) 
    }
    const closePopup =()=>{
        setYoutubeLink("")
        setError(false)
        setMovieInfo(null)
        setTrigger(false)
    }
    return (trigger) ? (  
        <div className="popup">
            <div className="popup-inner">
                <header>
                    <h1 className="title">{movieInfo.title}</h1>
                    <Genres genres={movieInfo.genre_ids}/>
                </header>
                <div className="content">    
                    <p className="Description"> {movieInfo.overview}</p>
                    {!error &&<div className="iframe-container">
                        <iframe width="560" height="315" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>}
                    {error && <h2 className="error"> Sorry We Can't Find The Trailer</h2>}
                </div>

                <div onClick={()=>{closePopup()}} className="popup-close-btn zoom_invert"><div className="close_icon zoom_invert"></div></div>
            </div>
        </div>
    ) : "" ;
}
 
export default Popup;