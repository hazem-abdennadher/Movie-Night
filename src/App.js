import {BrowserRouter ,Routes, Route} from "react-router-dom"
import { MovieProvider } from "./context/MoviesContext";
import Home from "./components/home/Home";
import Popular from "./components/Sections/Popular";
import Upcoming from "./components/Sections/Upcoming";
import Top from "./components/Sections/Top";
import Now from "./components/Sections/Now";
function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/popular" element ={<Popular/>}/>  
          <Route path="/upcoming" element ={<Upcoming/>}/>  
          <Route path="/now" element ={<Now/>}/>  
          <Route path="/top" element ={<Top/>}/>  
          <Route path="/" element ={<Home/>}/>  
        </Routes>
      </MovieProvider>
    </BrowserRouter> 
   );
}

export default App;
