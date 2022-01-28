import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page10 = ( {prevStep, nextStep,handleChange,values}) =>{
  const Continue = e =>{
    e.preventDefault();
    nextStep();
  };
  const Previous = e =>{
    e.preventDefault();
       prevStep();
  };
return(
  <div>
    <div className="container5">
         <Logo />
        <Template  />

    </div>
        <div className="PMT">
        <h3>Pain other Effects</h3>
       <h7>
        <strong>Please complete the items below to let us know about the other effects your pain maybe causing you</strong>.
        </h7>
        </div>
        <div className="fieldname">
           <label>Has your mood changed since your pain began?</label>
           <label className="radio1">yes
             <span className="checkmark"></span>
              <input type="radio" id="Booking" name="Booking"
                 checked="checked" value="yes"
                 onChange={handleChange('Booking')}
                 defaultValue={values.Booking} />
                 <label className="radio1">No
                 <span className="checkmark"></span>

               <input type="radio" id="Booking" name="Booking"value="No"
           onChange={handleChange('Booking')}
           defaultValue={values.Booking}/> </label>  </label>
     </div>
     <div className="fieldname">
        <label>Have you learnt ways to relax at moments of tension?</label>
        <label className="radio1">yes
          <span className="checkmark"></span>
           <input type="radio" id="Booking" name="Booking"
              checked="checked" value="yes"
              onChange={handleChange('Booking')}
              defaultValue={values.Booking} />
              <label className="radio1">No
              <span className="checkmark"></span>

            <input type="radio" id="Booking" name="Booking"value="No"
        onChange={handleChange('Booking')}
        defaultValue={values.Booking}/> </label></label>
   </div>




                   <div  className="navbuttons">
                      <button onClick={Previous}>Previous</button>

                          <button onClick={Continue}>Next</button>
                 </div>
     </div>
     )
     };
     export default page10;
