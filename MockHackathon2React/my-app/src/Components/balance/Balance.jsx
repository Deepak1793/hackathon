import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function ImgMediaCard() {
  return (

    <Grid container spacing={4} sx={{ marginTop: '2em' }}>
   <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="img10.PNG"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Current Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        National Provincial Bank was a British retail bank which operated in England and Wales from 1833 until 1970 when it was merged into the National Westminster Bank.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="img12.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Savings Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        National Provincial Bank was a British retail bank which operated in England and Wales from 1833 until 1970 when it was merged into the National Westminster Bank. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="img13.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Business Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        National Provincial Bank was a British retail bank which operated in England and Wales from 1833 until 1970 when it was merged into the National Westminster Bank. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    
  );
}
