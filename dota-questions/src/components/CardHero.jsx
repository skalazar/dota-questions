import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export function CardHero() {

    const useStyles = makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });

    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="url"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name Hero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Description 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
