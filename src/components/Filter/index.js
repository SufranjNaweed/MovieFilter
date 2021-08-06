import React, {useState, useEffect, useContext} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { MovieContext } from '../../contexts/Movies';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
}));

const Filter = () => {
    const classes = useStyles();
    const {categories, filterMovies} = useContext(MovieContext)
    const [category, setCatergory] = useState("");
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        
    });

    const handleChange = (event) => {
        setCatergory(event.target.value);
        filterMovies(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Catergories</InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={category}
                onChange={handleChange}
            >
                <MenuItem value="All">
                <em>All</em>
                </MenuItem>
                {categories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default Filter;