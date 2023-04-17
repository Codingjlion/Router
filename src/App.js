import React, { useState, useRef } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import MovieCard from './MovieCard/MovieCard';
import MovieList from './MovieList/MovieList';
import Filter from './Filter/Filter';
import './App.css';
import Home from './Home/Home';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://aworldoffilm.files.wordpress.com/2014/06/wall2.jpg?w=1024&h=666&crop=1" ,
      rating: 9.3
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL: "https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=1280&h=720",
      rating: 9.2
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');


  const titleFilterRef = useRef(null);
const rateFilterRef = useRef(null);

// Check that refs are not null before using them
const handleTitleFilter = (title) => {
  if (titleFilterRef.current) {
    setTitleFilter(title);
  }
};

const handleRateFilter = (rate) => {
  if (rateFilterRef.current) {
    setRateFilter(rate);
  }
};

  // const titleFilterRef = useRef();
  // const rateFilterRef = useRef();

  // const handleTitleFilter = (title) => {
  //   setTitleFilter(title);
  // };

  // const handleRateFilter = (rate) => {
  //   setRateFilter(rate);
  // };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className='App'>
      
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/movies'
            element={
              <>
                <Filter
                  title={titleFilter}
                  rate={rateFilter}
                  onTitleChange={handleTitleFilter}
                  onRateChange={handleRateFilter}
                  titleFilterRef={titleFilterRef}
                  rateFilterRef={rateFilterRef}
                />
                <MovieList
                  movies={movies.filter(
                    (movie) =>
                      movie.title
                        .toLowerCase()
                        .includes(titleFilter.toLowerCase()) &&
                      (rateFilter === '' || movie.rating >= rateFilter)
                  )}
                />
              </>
            }
          />
          <Route path='/movies/:id' element={<MovieCard />} />
        </Routes>

        <div className='add-movie-form'>
          <h2>Add a New Movie</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newMovie = {
                id: movies.length + 1,
                title: e.target.title.value,
                description: e.target.description.value,
                posterURL: e.target.posterURL.value,
                rating: parseFloat(e.target.rating.value),
              };
              handleAddMovie(newMovie);
              e.target.reset();
            }}
          >
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' name='title' />
            <br />
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' name="description" />
            <br />
            <label htmlFor="posterURL">Poster URL:</label>
            <input type="text" id="posterURL" name="posterURL" />
            <br />
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" step="0.1" min="0" max="10" />
            <br />
            <button type="submit">Add Movie</button>
            </form>

            </div>
            
            </div>


  );
  };

  export default App;