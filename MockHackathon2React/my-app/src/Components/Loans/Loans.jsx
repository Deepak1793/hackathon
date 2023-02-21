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

    <Grid container spacing={4} sx={{ marginTop: '7em' }}>
   <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component=""
        alt="green iguana"
        height="180"
        image="./Images/Image1.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Housing Loan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        National Provincial Bank was a British retail bank which operated in England and Wales from 1833 until 1970 when it was merged into the National Westminster Bank.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component=""
        alt="green iguana"
        height="180"
        image="./Images/Image2.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Business Loan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Online Banking is available to NatWest business account customers. You can add up to 50 business accounts in Online Banking. Explore your ways to bank. Mobile App is available on selected iOS and Android devices with a UK or international mobile number in selected countries. Bankline is available to NatWest business current account customers. Fees may apply.


        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

    {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component=""
        alt="green iguana"
        height="180"
        image="./Images/Image3.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Personal Loan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This rate is available on loans between £7,500 and £19,950. Other loan amounts are available at alternative rates. Our rates depend on your circumstances and loan amount and may differ from the Representative APR.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    
  );
}
