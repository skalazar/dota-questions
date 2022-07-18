import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export function Attribute( { value } ){
    
    return (
        <Box component="span" m={1}>
        <p>
            {value}
        </p>
        </Box>
    );
    

}
