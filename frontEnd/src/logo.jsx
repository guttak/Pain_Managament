import React,{Component} from 'react';
import Logo from './Img/logo.jpg';
import './Logo.css';
class logo extends Component{
  render(){
return(
  <div>
    <div className="Navbar">

  <div className="Logo">
    <img src={Logo} alt=""/>

           <div className="Heading">
             <h2>Chronic Pain Clinic Survey</h2>
          <p>Please complete the survey below to help us collect the required information before your chronic pain Clinic appointment</p>
             <h5>Thank you!</h5>
       </div>
</div>
</div>
</div>
);
}
}
export default logo
