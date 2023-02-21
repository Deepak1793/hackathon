import React from 'react'
export default function Footer() {
    return (

        
      <div className="container-fluid g-0  position: fixed">
        <footer className=" text-center text-light" style={{backgroundColor:"#012169"}}>
        <div className="container pt-4 position: fixed">
              <section className="mb-4 position: fixed">
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#4B42F5"}}
              href="#!"
              role="button"
              ><i className="fab fa-facebook-f"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#42CEF5"}}
              href="#!"
              role="button"
              ><i className="fab fa-twitter"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#DD4B39"}}
              href="#!"
              role="button"
              ><i className="fab fa-google"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#F542CB"}}
              href="#!"
              role="button"
              ><i className="fab fa-instagram"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#4296F5"}}
              href="#!"
              role="button"
              ><i className="fab fa-linkedin-in"></i></a>
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#F56942"}}
              href="#!"
              role="button"
              ><i className="fab fa-github"></i></a>
          </section>
        </div>
        <div className="text-center p-2"  style={{backgroundColor: "#0F0F0F"}}>
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">PayPal.com</a>
        </div>
      </footer>
      </div>
    )
}
