import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";




const API_URL = 'http://www.omdbapi.com?apikey=a43ee35d';

const App = () => {

    const [movies,setMovies] = useState ([]);
    const [searchTerm,setSearchTerm] = useState ('');
   
   
    useEffect ( () => {
        SearchMovies('superman');
      },[])


    const SearchMovies = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    return(
        <div className="app">
            <h1>MoviesLand</h1>
            <div className="search">
                <input 
                placeholder="Search your fav movies here "
                value={searchTerm}
                onChange={(e)=> setSearchTerm (e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="nopic"
                onClick={()=> SearchMovies(searchTerm)}
                />
            </div>
            { movies?.length > 0 ?(
                    <div className="contaier">
                        {movies.map((movie) => (<MovieCard movie={movie} />))}
                  
                </div>
                ) :(
                    <div className="empty">
                        <h2>no movies found</h2>
                        </div>
                )
            }
          
        </div>
    );
}

export default App