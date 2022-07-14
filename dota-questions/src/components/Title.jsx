import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export function Title( { text } ){
    
    return (
        <Box component="span" m={1}>
        <p>
            {text}
        </p>
        </Box>
    );
    

}

