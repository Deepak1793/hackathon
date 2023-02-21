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

    <Grid container spacing={4} sx={{ marginTop: '2em', marginBottom: '8em'}}>
   <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="img14.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Financing for your sustainable needs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sustainable development is an organizing principle for meeting human development goals while also sustaining the ability of natural systems to provide the natural resources and ecosystem services on which the economy and society depends
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
        image="img10.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Savings Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Earn 5.00% interest on your first £1,000, 1.00% on balances from £1,001 to £5,000 and 0.50% on any amount over £5,000 in your account. Interest is calculated on a daily basis and paid into your account on the first business day of the month
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
        image="img9.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Business Account
        </Typography>
        <Typography variant="body2" color="text.secondary">
        If you have applied for a current account or an instant saving account online and this is your first account with us the process may take up to 10 days dependent upon the identification you provide whilst applying.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    
  );
}
