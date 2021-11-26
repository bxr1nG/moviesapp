import React from 'react';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, overview, vote_average }) => (
	<div className='movie'>
		<img
			src={
				poster_path
					? IMAGE_API + poster_path
					: 'https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
			}
			alt={title}
		/>
		<div className='movie-info'>
			<h3>{title}</h3>
			<span>{vote_average}</span>
		</div>
		<div className='movie-over'>
			<h4>Overview:</h4>
			<p>{overview ? overview : 'None'}</p>
		</div>
	</div>
);

export default Movie;
