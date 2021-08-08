import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';

const Card = ({data, deleteMovie}) => {
    const [displayRating, setDisplayRating] = useState(false);
    const toogleDisplayRating = () => {
        setDisplayRating(!displayRating);
    }
    return(
        <div className="card">
            <p className="title">{data.title}</p>
            <Chip label={data.category} />
            <div >
                <Button onClick={() => {toogleDisplayRating()}}>Show Ratings</Button>
                {
                    displayRating ? 
                    <div className="rating">
                        <div className="likes">
                            <ThumbUpIcon />
                            <div>{data.likes}</div>
                        </div>
                        <div className="dislikes">
                            <ThumbDownIcon />
                            <div>{data.dislikes}</div>
                        </div>
                    </div>
                    :
                    <div></div>
                }
            </div>
            <div className="actions">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => {deleteMovie(data)}}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default Card;