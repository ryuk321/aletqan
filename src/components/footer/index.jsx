import React from "react";
import "./style.scss";
import Location from "../shared/location";
import Telephone from "../shared/telephone";
import Mail from "../shared/mail";
import {BsFacebook} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'


function Footer() {
  return (
    <div className = 'footer'>


<footer class="footer-distributed">

<div class="footer-left">

  <h3>Aletqan Nepal <span>pvt.ltd</span></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Services</a>
  
    <a href="#">About</a>
  
  
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Aletqan Nepal © 2015</p>
</div>

<div class="footer-center">

  <div className="location-div">
    <span className="location-icon"><Location  size = {70}/></span>
    {/* <i class="iconn"><FaLocationArrow/></i> */}
    <p><span>Buddhanagar, Purano Hams Hospital</span> Kathmandu, Nepal</p>
  </div>

  <div  className="location-div">
  <span className="telephone-icon"><Telephone  size = {70}/></span>
    <p>+977-01497685</p>
  </div>

  <div className="location-div">
  <span className="mail-icon"><Mail size = {70}/></span>
    <p><a href="mailto:aletqannepal313@gmail.com">aletqannepal313@gmail.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Recruiting is our main objective, supplying right people at right place is our motive.
  </p>

  <div class="footer-icons">

    <a className="iconn" href="#">{<BsFacebook/>}</a>
    <a href="#">{<FaLinkedin/>}</a>
   

  </div>

</div>

</footer>
    </div>
  )
}

export default Footer;