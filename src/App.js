import {BrowserRouter ,Routes, Route} from "react-router-dom"
import { MovieProvider } from "./context/MoviesContext";
import Home from "./components/home/Home";
import Section from "./components/Sections/Section";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";
function App() {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path="/popular" element ={<Section type={"popular"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/upcoming" element ={<Section type={"upcoming"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/now" element ={<Section type={"now"} enableFilter enableShowMoreBtn/>}/>  
            <Route path="/top" element ={<Section type={"top"} enableFilter enableShowMoreBtn/>}/>
            <Route path="/" element ={<Home/>}/>  
          </Routes>
          <Popup />
        </MovieProvider>
      </BrowserRouter> 
      <Footer/>
    </>
   );
}

export default App;
