import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export function NumberButton( { value }) {

    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));

    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        {value}
      </Button>
    </div>
  );
}