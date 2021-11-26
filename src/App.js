import React, { useEffect, useState } from 'react';

import Movie from './components/Movie';

const FEATURED_API =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=030ea30b6affd6d6a2fa2fc2e6da772b&page=1';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?&api_key=030ea30b6affd6d6a2fa2fc2e6da772b&query=';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const getMovies = API => {
		fetch(API)
			.then(res => res.json())
			.then(data => {
				setMovies(data.results);
			});
	};

	useEffect(async () => {
		getMovies(FEATURED_API);
	}, []);

	const handleOnSubmit = e => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm);
			setSearchTerm('');
		}
	};

	const handleOnChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header className='header'>
				<div className='logo-container'>
					<img className='logo' src='logo.svg' />
					<h1>MoviesApp</h1>
				</div>
				<form onSubmit={handleOnSubmit}>
					<input
						type='search'
						placeholder='Search...'
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>
			<div className='movie-container'>
				{movies.length > 0 &&
					movies.map(movie => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;
