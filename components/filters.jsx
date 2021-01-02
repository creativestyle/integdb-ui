import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Filters = ({onChange, systems=[], value}) => {
  
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const classes = useStyles();
  
  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">System</FormLabel>
        <RadioGroup aria-label="system" name="system" value={value} onChange={handleChange}>
          { systems.map(({node}) => (       
          <FormControlLabel value={node.name} control={<Radio />} label={node.name} key={node._id} />
          )) }
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default Filters
