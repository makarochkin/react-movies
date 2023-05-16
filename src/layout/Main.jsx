import React from "react";
import { Movies } from "../components/Movies";
import { SimplePreloader } from "../components/Preloader";
import { Search } from "../components/Search";

const APP_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${APP_KEY}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    movies: data.Search,
                    loading: false,
                })
            );
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${APP_KEY}&s=${str ? str : "*"}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    movies: data.Search,
                    loading: false,
                })
            );
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="conteiner content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <SimplePreloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
