import React, {useContext} from 'react';
import { MovieContext } from '../../contexts/Movies';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}));

const Pagination = ({totalMovies}) => {
  const classes = useStyles();
  const {moviePerPage , setMoviePerPage, previousPage, nextPage} =  useContext(MovieContext)
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setMoviePerPage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <nav>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Movies Per Page</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={moviePerPage}
          onChange={handleChange}
        >
          { /* yeah i know i'm cheating , it's just bc i have other project to work on this week end :) lol 100 */}
          <MenuItem value={100}>
            <em>show all</em>
          </MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button 
          className="button-pagination" 
          variant="contained" 
           onClick={() => previousPage()}
        >
          Previous
        </Button>
        <Button 
          className="button-pagination" 
          variant="contained" 
           onClick={() => nextPage()}
        >
          Next
        </Button>
      </div>
    </nav>
  );
};

export default Pagination;