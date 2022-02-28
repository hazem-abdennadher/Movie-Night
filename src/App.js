import MovieSection from "./components/MoviesSection";
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upcoming" element ={<MovieSection type="upcoming" />}/>  
        <Route path="/now" element ={<MovieSection type="now_playing" />}/>  
        <Route path="/top" element ={<MovieSection type="top_rated" />}/>  
        <Route path="/popular" element ={<MovieSection type="popular" />}/>  
        <Route path="/" element ={<Home/>}/>  
      </Routes>
    </BrowserRouter> 
   );
}

export default App;
