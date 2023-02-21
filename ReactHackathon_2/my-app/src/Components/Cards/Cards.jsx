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

    <Grid container spacing={4} sx={{ marginTop: '-1em', marginBottom: '8em'}}>
   <Grid item xs={12} sm={3} md={3} lg={3} xl={3}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="asset/img8.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Individual Home
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          <h6>
          
            <a href="https://www.paypal.com/in/webapps/mpp/online-shopping" target="_blank">Shopping with PayPal</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/paypal-buyer-protection" target="_blank">Buyer Protection</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/consumer-setup" target="_blank">Getting Started</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/home" target="_blank">Individual Home</a>
          
          </h6>
        

        </Typography>
      </CardContent>
    </Card>
    </Grid>
    {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="asset/img11.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Payments
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          <h6>
          
            <a href="https://application.forex.com/en/step/1?_gl=1*8atk7o*_ga*MjEzMjg3MzA1Ni4xNjY5OTE5MTQ0*_ga_XPZTRCXSST*MTY2OTkxOTE0NC4xLjAuMTY2OTkxOTE0NC42MC4wLjA." target="_blank">Forex</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/business/accept-payments" target="_blank">Accept Payments</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/business/make-payments" target="_blank">Make Payments</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/business/accelerate-growth" target="_blank">Accelerate Growth</a>
          
          </h6>
          
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="asset/img9.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Solutions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          <h6>
          
            <a href="https://www.paypal.com/us/business/solutions" target="_blank">Solution</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/know-your-customer" target="_blank">Identity Verification</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/business/manage-risk" target="_blank">Manage Risk</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/fraud-prevention" target="_blank">Fraud Prevention</a>
          
          </h6>
          
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    

    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}  display="flex" justifyContent="center" >
    <Card sx={{ maxWidth: 345,  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="asset/img12.avif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Useful Info
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h6>
          
            <a href="https://www.paypal.com/in/webapps/mpp/paypal-safety-and-securitys" target="_blank">Online Security</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/fraud-prevention" target="_blank">Fraud Prevention</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/webapps/mpp/pci-compliance" target="_blank">PCI Complaint</a><br /> <br />
          
          
          <a href="https://www.paypal.com/in/smarthelp/contact-us" target="_blank">Help Centre</a>
          
          </h6>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    
  );
}
