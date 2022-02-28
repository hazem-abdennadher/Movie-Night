import MovieSection from "./components/MoviesSection";
import {BrowserRouter ,Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/top" element ={<MovieSection type="Top_Rated" />}/>  
        <Route path="/popular" element ={<MovieSection type="Popular" />}/>  
      </Routes>
    </BrowserRouter> 
   );
}

export default App;
