import Slider from "../Carousel/Slider";
import Section from "../Sections/Section";
const Home = () => {
    return ( 
        <div>
            <Slider />
            <div>
                <Section type="popular" length={5} link="./Movie-Night/popular" enableSeeMore />
            </div>
            
            <div>
                <Section type="upcoming" length={5} link="./Movie-Night/upcoming" enableSeeMore />
            </div>
            <div>
                <Section type="now" length={5} link="./Movie-Night/now" enableSeeMore />
            </div>
            <div>
                <Section type="top" length={5} link="./Movie-Night/top" enableSeeMore />
            </div>
        </div>
     );
}
 
export default Home;