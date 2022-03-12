import {BrowserRouter ,Routes, Route} from "react-router-dom"
import { MovieProvider } from "./context/MoviesContext";
import Home from "./components/home/Home";
import Section from "./components/Sections/Section";
function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/popular" element ={<Section type={"popular"} enableFilter />}/>  
          <Route path="/upcoming" element ={<Section type={"upcoming"} enableFilter />}/>  
          <Route path="/now" element ={<Section type={"now"} enableFilter />}/>  
          <Route path="/top" element ={<Section type={"top"} enableFilter />}/>
          <Route path="/" element ={<Home/>}/>  
        </Routes>
      </MovieProvider>
    </BrowserRouter> 
   );
}

export default App;
