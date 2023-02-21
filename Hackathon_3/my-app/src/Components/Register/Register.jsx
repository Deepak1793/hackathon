import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            phone: "",
            account: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: values => {
            // console.log(values);
            fetch("http://localhost:8765/api/v1/users/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(data.message)

                    // if (data.status === 200) {
                        // localStorage.setItem("jwt_token", data.access_token)
                        // localStorage.setItem("user_info", JSON.stringify(data.email))
                        navigate("/login")
                        alert("Welcome to PayPal");
                    // }
                })
                .catch((e) => console.log("Catch block executed"))
                .finally(console.log("Finally executed"))
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, "First name is too short")
                .max(10, "First name is too long")
                .required("Firstname cannot be left blank"),
            lastname: yup.string()
                .min(3, "Last name is too short")
                .max(10, "Last name is too long")
                .required("Lastname cannot be left blank"),
            email: yup.string()
                .email("Invalid email address")
                .required("Email cannot be left blank"),
            address: yup.string()
                .required("address cannot be left blank"),
            phone: yup.string()
                .required("Phone cannot be left blank"),
            account: yup.string()
                .required("Age cannot be left blank"),
            password: yup.string()
                .required("Password cannot be left blank"),
            confirmpassword: yup.string()
                .required("Confirm Password cannot be left blank")
                .test("confirmpassword", "Password and Confirm password should be same", function (cpass) {
                    if (this.parent.password === cpass) {
                        return true;
                    }
                    return false;
                })
        })
    })
    return (
        <div className="container mt-5 py-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-primary text-white py-3 mt-3 text-center rounded">
                        <h2>Registration</h2>
                    </div>
                   
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mt-2">
                            <input id="firstname" name='firstname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} className="form-control form-control-sm" placeholder="First Name" />
                            {formik.errors.firstname && formik.touched.firstname ? <span className='text-danger'>{formik.errors.firstname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="lastname" name='lastname' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} className="form-control form-control-sm" placeholder="Last Name" />
                            {formik.errors.lastname && formik.touched.lastname ? <span className='text-danger'>{formik.errors.lastname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control  form-control-sm" value={formik.values.email} placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="address" name='address' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.address} placeholder="Address" />
                            {formik.errors.address && formik.touched.address ? <span className='text-danger'>{formik.errors.address}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="phone" name='phone' type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.phone} placeholder="Phone" />
                            {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="account" name='account' type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.account} placeholder="Account No" />
                            {formik.errors.account && formik.touched.account ? <span className='text-danger'>{formik.errors.account}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="password" name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="confirmpassword" name='confirmpassword' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.confirmpassword} placeholder="Confirm Password" />
                            {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className='text-danger'>{formik.errors.confirmpassword}</span> : null}
                        </div>
                        <div className="mt-2 ">
                        <button type="submit" className='btn btn-primary text-white'>Submit</button>
                           
                            {/* <button type="reset" className='btn btn-warning'>Reset</button> */}
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

