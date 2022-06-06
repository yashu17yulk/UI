import React from "react";
import "../Assets/styles/Newsbar.css";
import Vector from "../Assets/Images/Vector.svg";
import circleElement from "../Assets/Images/circleElement.png";
import searchbar from "../Assets/Images/inputbox.svg";
import   email from "../Assets/Images/email here.svg";
import bg from "../Assets/Images/background.svg";
import subs from "../Assets/Images/SUBSCRIBE.svg";
import circleE from "../Assets/Images/circleE.png";
export const Newsbar = () => {
  return (
    <div className="newsbar">
      <div>
          
        <img src={Vector} alt="Logo" className="news-image" />  </div> 
       <div> 
           <p className="text">Sign Up for Newsletter</p> 
           <p className="text1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <img src={circleElement} alt="Logo" className="news-image1" />
       </div>
      
   <div>
   <img src={searchbar} alt="Logo" className="news-image2" />
   <img src={ email} alt="email" className="news-image3" />
   <img src={bg} alt="bg" className="news-image4" />
   <img src={subs} alt="subs" className="news-image5" />
   <img src={circleE} alt="subs" className="news-image6" />
   </div>

    </div>
  );
};

export default Newsbar;
