
import imdb from "../../Images/imdb.png"
import tomato from "../../Images/tomato.png"
import playButton from "../../Images/play-button.png"
const Description = () => {
    return ( 
        <div className="description">
            <h1>John Wick 3 : Parabellum</h1>
            <div>
                <p><img src={imdb} alt="imbd" />86.0/100</p>
                <p><img src={tomato} alt="imbd" />97%</p>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Impedit iusto distinctio illo pariatur accusamus atque?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Impedit iusto distinctio illo pariatur accusamus atque?
            </p>
            <button> <img src={playButton} alt="play trailer" />Watch Trailer</button>
        </div>
     );
}
 
export default Description;