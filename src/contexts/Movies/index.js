import React, {createContext, useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { movies$ } from '../../datas/movies';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [refMovies, setRefMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage, setMoviePerPage] = useState(10);
    // out of lazyness
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        initRefMovies();
        resetMovie();
        getCategories();
    }, []);

    useEffect(() => {
        countingMoviePerPage();
    }, [moviePerPage])

    const initRefMovies = async() => {
        const tmpMovie = await movies$;
        await setRefMovies(tmpMovie);
    }

    const resetMovie = async () => {
        const tmpMovie = await movies$;
        await setMovies(tmpMovie);
    }

    const getCategories = async () => {
        const tmpMovies = await movies$;
        let tmpCategories = [];
        await tmpMovies.map((movie) => tmpCategories.push(movie.category));
        const uniqueCatergories = await [...new Set(tmpCategories)];
        setCategories(uniqueCatergories);
    }

    const filterMovies = async (category) => {
        if (category === "All")
            await setMovies(refMovies);
        else{
            const tmpMovies = await refMovies;
            const filteredMovies = tmpMovies.filter((movie) => movie.category === category)
            await setMovies(filteredMovies);
        }
    }

    const deleteInFilter = async (categoryToDelete) => {
        let numberOfCatergory = movies.filter(movie => movie.category === categoryToDelete).length;
        if(numberOfCatergory <= 1){
            let tmpNewCat = categories.filter(category => category !== categoryToDelete);
            setCategories(tmpNewCat);
        }
    }

    const deleteMovie = async (movieToDelete) => {
        
            const newMovies = await refMovies.filter(movie => movie.id !== movieToDelete.id);
            await setMovies(newMovies);
            await setRefMovies(newMovies);
            await deleteInFilter(movieToDelete.category);
            toast.success(`${movieToDelete.title} has been deleted`);
    }


    const countingMoviePerPage = () => {
        console.log("movie per page has change");
    }

    const previousPage = () => {
        if( currentPage > 1 )
            setCurrentPage(currentPage - 1);
        console.log(currentPage);
    }

    const nextPage = () => {
        console.log(currentPage);
        console.log(maxPage);
        if(currentPage <= maxPage)
            setCurrentPage(currentPage + 1);
    }
    
    return(
        <MovieContext.Provider
            value={{
                /// I'm exposing way to much data , I know :)
                // Pagination
                setMaxPage : setMaxPage,
                setCurrentPage : setCurrentPage,
                currentPage : currentPage,
                moviePerPage : moviePerPage,
                setMoviePerPage : setMoviePerPage,
                previousPage : previousPage,
                nextPage : nextPage,
                // Filter
                categories : categories,
                getCategories : getCategories,
                // Movies
                movies : movies,
                filterMovies : filterMovies,
                deleteMovie : deleteMovie, 
                resetMovie : resetMovie
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;