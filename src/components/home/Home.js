import Slider from "../Carousel/Slider";
import Now from "../Sections/Now";
import Popular from "../Sections/Popular";
import Top from "../Sections/Top";
import Upcoming from "../Sections/Upcoming";
const Home = () => {
    return ( 
        <div>
            <Slider />
            <div>
                <Popular title={"Popular Movies"} length={5} enableSeeMore/>
            </div>
            {/* <div>
                <Now length={5} enableSeeMore/>
            </div>
            <div>
                <Upcoming length={5} enableSeeMore/>
            </div>
            <div>
                <Top length={5} enableSeeMore/>
            </div> */}
        </div>
     );
}
 
export default Home;