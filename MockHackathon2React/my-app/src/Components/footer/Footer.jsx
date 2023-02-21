// import React from 'react'
// export default function Footer() {
//     return (
//         <div>
//         <footer className="bg-dark text-center text-white fixed-bottom">
//         <div className="container p-1 pb-0">
//           <section className="mb-10">
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#4B42F5"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-facebook-f"></i></a>
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#42CEF5"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-twitter"></i></a>
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#DD4B39"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-google"></i></a>
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#F542CB"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-instagram"></i></a>
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#4296F5"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-linkedin-in"></i></a>
//             <a
//               className="btn text-white btn-floating m-1"
//               style={{backgroundColor: "#F56942"}}
//               href="#!"
//               role="button"
//               ><i className="fab fa-github"></i></a>
//           </section>
//         </div>
//         <div className="text-center p-2"  style={{backgroundColor: "#0F0F0F"}}>
//           © 2020 Copyright:
//           <a className="text-white" href="https://mdbootstrap.com/">Natwest.com</a>
//         </div>
//       </footer>
//       </div>
//     )
// }


import React from 'react'

export default function Footer() {
  return (
    <div class="container-fluid bg-primary pb-2 bottom-fix" > 
      <footer className="sticky bottom-0" > 
      
      <ul class="nav justify-content-center" > 
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-bg-primary">Contact Us</a></li>
         <li class="nav-item">
          <a href="#" class="nav-link px-2 text-bg-primary">Customer Support</a></li> 
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-bg-primary">Other Brands</a>
            </li> <li class="nav-item"><a href="#" class="nav-link px-2 text-bg-primary">FAQs</a></li> 
            <li class="nav-item"><a href="#" class="nav-link px-2 text-bg-primary">About</a></li> </ul> <p class="text-center text-bg-primary">&copy; 2022 NatWest</p> </footer></div>

  )
}
