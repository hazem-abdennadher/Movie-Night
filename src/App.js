import Filter from "./components/Filter";
import PopularMovies from "./components/PopularMovies";
import { MovieProvider } from "./context/MoviesContext";

function App() {

  return (
    <div className="App">
      <MovieProvider text={"text"}>
        <div id="hero">
          
        </div>
        <h2 className="headline">Featured Movies</h2>
        <Filter/>
        <PopularMovies/>
      </MovieProvider>
    </div>
  );
}

export default App;
