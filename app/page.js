import React from "react";
import Movie from "@/app/Movie";

export default async function Home() {
	const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`)
	const res = await data.json()

	console.log(res)

	return (
		<main>
			<h1 className={"text-amber-500"}>Thank you, Next</h1>
			{res.results.map(movie => (
					<Movie key={movie.id}
					       id={movie.id}
					       title={movie.title}
					       poster_path={movie.poster_path}
					       release_date={movie.release_date}
					/>
				)
			)}
		</main>
	)
}
