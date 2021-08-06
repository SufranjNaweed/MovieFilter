import React, { useContext } from 'react';
import Card from '../Card';
import Pagination from '../Pagination';
import { MovieContext } from '../../contexts/Movies';

const CardList = () => {
    const {movies, deleteMovie, moviePerPage, setCurrentPage} = useContext(MovieContext);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div className="card-area">
            {
                movies.map((movie) => 
                    <Card 
                        key={movie.id} 
                        data={movie} 
                        deleteMovie={deleteMovie}
                    />
                )
            }
        <Pagination 
            moviePerPage={moviePerPage} 
            totalMovies={movies.length}
            paginate={paginate}
        />
        </div>
    );
}

export default CardList;