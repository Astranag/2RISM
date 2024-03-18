import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceInfo = ({ place, selected, refProp }) => {


    const classes = useStyles();
    return (
       
        <Card elevation={6}>
         <CardMedia
        style={{ height: 350, width: 500 }}
        image={place?.photo?.images?.large?.url || 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place?.name}

      />
        <CardContent>
        <Typography gutterBottom variant="h5">{place?.name} Name :  </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place?.rating)} readOnly />
          <Typography component="legend">{place?.num_reviews} Review{place?.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price_level}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place?.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place?.phone}
          </Typography>
        )}
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place?.web_url, '_blank')}>
          Trip Planner
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place?.website, '_blank')}>
          Website
        </Button>
      </CardActions>
        </Card>


        
        );
};

export default PlaceInfo;