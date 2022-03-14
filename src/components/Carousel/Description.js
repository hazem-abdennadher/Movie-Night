import rating from "../../Images/rating.png"
import playButton from "../../Images/play-button.png"
const Description = ({movies,index,setTrigger,setMovieInfo}) => {
    
    const showPopup = ()=>{
        setMovieInfo(movies[index])
        setTrigger(true)
    }
    
    return ( 
        <div className="description">
            <h1>{movies[index].title}</h1>
            <div>
                <p><img src={rating} alt="rating" />{movies[index].vote_average}/10</p>
            </div>
            <p>
                {movies[index].overview}
            </p>
            <button onClick={()=>showPopup()}> <img src={playButton} alt="play trailer" />Watch Trailer</button>
        </div>
     );
}
 
export default Description;