import {BrowserRouter ,Routes, Route} from "react-router-dom"
import { MovieProvider } from "./context/MoviesContext";
import Home from "./components/home/Home";
import Section from "./components/Sections/Section";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";
import Scrollback from "./components/utility/ScrollBack";
function App() {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Scrollback/>
          <Routes>
            <Route path="/Movie-Night/search" element ={<Section type={"search"} enableShowMoreBtn enableSearch/>}/>  
            <Route path="/Movie-Night/popular" element ={<Section type={"popular"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/Movie-Night/upcoming" element ={<Section type={"upcoming"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/Movie-Night/now" element ={<Section type={"now"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/Movie-Night/top" element ={<Section type={"top"} enableFilter enableShowMoreBtn/>}/>
            <Route path="/Movie-Night" element ={<Home/>}/>  
          </Routes>
          <Popup />
        </MovieProvider>
      </BrowserRouter> 
      <Footer/>
    </>
   );
}

export default App;
