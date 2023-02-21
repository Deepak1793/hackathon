import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            // console.log("submit");
            fetch("http://localhost:8765/api/v1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // console.log(data.access_token);
                    


                    // if (data.status === 200) {
                        localStorage.setItem("jwt_token", data.jwt_token)
                        localStorage.setItem("user", JSON.stringify(data.email))
                        navigate("/")
                        alert("Welcome to PayPal");
                    // }

                    
                   
                    
                })
                .catch((error)=>{console.log(error);setOpen(true)});

        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email("Invalid email address")
                .required("Email cannot be left blank"),
            password: yup.string()
                .required("Password cannot be left blank"),

        })
    })
    return (
       
        <div className="container mt-5 py-5" style={{marginBottom:"15em"}}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-primary text-white py-3 mt-3 text-center rounded">
                   
                
                        <h5>Login</h5>
                    </div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="mt-2">
                            <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                        </div>



                        <div className="mt-2">
                            <input id="password" name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                        </div>

                        <div className="mt-2 ">
                            <button type="submit" className='btn btn-primary text-white'>Submit</button>

                        </div>


                    </form>
                </div>
            </div>
        </div>
       
    )
}

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

