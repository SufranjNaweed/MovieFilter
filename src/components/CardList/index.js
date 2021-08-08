import React, { useContext } from 'react';
import Card from '../Card';
import Pagination from '../Pagination';
import { MovieContext } from '../../contexts/Movies';

const CardList = () => {
    const {movies, deleteMovie, moviePerPage, setCurrentPage, currentPage, setMaxPage} = useContext(MovieContext);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    setMaxPage(currentMovies.length);

    return(
        <>
            <div className="card-area">
                {
                    // movies.map((movie) => 
                    //     <Card 
                    //         key={movie.id} 
                    //         data={movie} 
                    //         deleteMovie={deleteMovie}
                    //     />
                    // )
                    currentMovies.map((currentMovie) => 
                        <Card 
                            key={currentMovie.id} 
                            data={currentMovie} 
                            deleteMovie={deleteMovie}
                        />
                    )
                }
            </div>
            <div className="filter-area">
                <Pagination 
                    moviePerPage={moviePerPage} 
                    totalMovies={currentMovies.length}
                    paginate={paginate}
                />
            </div>

        </>
    );
}

export default CardList;