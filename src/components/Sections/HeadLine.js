import { Link } from "react-router-dom";

const HeadLine = ({title,link,enableSeeMore=false}) => {
    return ( 
        <header className="headline">
            <h2>{title}</h2>
            {enableSeeMore && <Link to={link}><h4>See more <span>&#8883;</span></h4></Link>}
        </header>
    );
}
 
export default HeadLine;