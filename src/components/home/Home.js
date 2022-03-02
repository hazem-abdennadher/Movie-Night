
import Slider from "../Carousel/Slider";
import { MovieProvider } from "../../context/MoviesContext";
const Home = () => {
    return ( 
        <div>
            <MovieProvider type="popular">
                <Slider />
            </MovieProvider>
        </div>
     );
}
 
export default Home;