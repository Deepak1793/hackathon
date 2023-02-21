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
        image="img9.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Business bank accounts
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Whether you’re just starting out in business, or you’ve been running a business for longer, we could have an account to help you go further and do more. There’s support from business experts, specialist programmes to help you grow and expertise to tap into so you can succeed. Business banking is available to eligible customers, over 18 who have the right to be self-employed in the UK.
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
          Current bank accounts
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
        image="img11.PNG"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Switch to NatWest
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Current Account Switch Service will do all the work when it comes to switching, moving everything across from your old account to your new account all within 7 working days, including Direct Debits and standing orders. All you need to do is tell us the details of your old bank account and when you want the Switch to start.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    
  );
}
