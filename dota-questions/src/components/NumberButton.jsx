import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



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
    <Box className={classes.root}>
      <Button variant="contained" color="primary">
        {value}
      </Button>
    </Box>
  );
}