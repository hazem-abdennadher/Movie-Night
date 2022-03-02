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

    return ( 
        <div className="container-slider">
            
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    );
}
 
export default Slider;