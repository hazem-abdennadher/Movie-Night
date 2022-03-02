import { useContext, useState } from "react"
import { MoviesContext } from "../../context/MoviesContext"
import BtnSlider from './BtnSlider'
import './Slider.css'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const {movies} = useContext(MoviesContext)

    const nextSlide = () => {
        if(slideIndex !== 5){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === 5){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(5)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    return ( 
        <div className="container-slider">
            {movies.slice(0,5).map((movie, index) => {
                return (
                    <div
                    key={movie.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 5}).map((item,index) => (
                    <div key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
}
 
export default Slider;