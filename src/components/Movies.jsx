import React from "react";

import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Movie
                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export { Movies };
