import { useState } from "react";
import up from "../../Images/up.png"

const Scrollback = () => {
    const [visible ,setVisible] = useState(false);
    window.onscroll = function() {scroll()};
    const scroll = ()=>{
        if (window.pageYOffset > 250) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    }    
    const scrollBackUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    } 
    return ( 
            <button  style={{display : visible ? "" :"none"}}onClick={()=>scrollBackUp()} id="myBtn" title="Go to top" className="scroll-to-top">
                <img src={up} alt="Go UP" />
            </button>
            
     );
}
 
export default Scrollback;