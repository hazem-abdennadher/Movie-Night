import facebook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import linkedIn from "../Images/linkedin.png"
import github from "../Images/github.png"

const Footer = () => {
    return ( 
    <div className="footer">
        <div className="socials">
            <a className="logo-link" href="https://www.facebook.com/Ha.Zem.A.07" target="noreferrer _blank"> <img src={facebook} alt="Facebook logo" /> </a>
            <a className="logo-link" href="https://www.instagram.com/hazem_kami/" target="noreferrer _blank"> <img src={instagram} alt="Instagram logo" /> </a>
            <a className="logo-link" href="https://www.linkedin.com/in/hazem-abdennadher/" target="noreferrer _blank"> <img src={linkedIn} alt="LinkedIn logo" /> </a>
            <a className="logo-link" href="https://github.com/c-yrus/" target="noreferrer _blank"> <img src={github} alt="Github logo" /> </a>
        </div>
        <p>Made With <span>💖</span> By Hazem Abdennadher | &copy;2022</p>
    </div> 
    );
}
 
export default Footer;