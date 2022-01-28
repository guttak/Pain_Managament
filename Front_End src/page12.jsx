import React from 'react';
import Logo from './logo.jsx';
import {FaChevronCircleLeft} from "react-icons/fa"
import {FaChevronCircleRight} from "react-icons/fa"
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page12 = ( {prevStep, nextStep,handleChange,checkChange,values}) =>{
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
        <h3>Expectations</h3>
    <h7> <p>Please complete the items below to let us know about your expectations from the pain service and how we can best help you.</p></h7>
</div>
<div className="fieldname">
   <label>What do you understand to be the cause of your pain?</label>


         <textarea className="textarea"
             id="understand_pain"
             name="understand_pain"
             rows="5px"
             cols="5px"
             placeholder=""
             onChange={handleChange('understand_pain')}
                defaultValue={values.understand_pain}
            ></textarea>
     </div>
     <div className="fieldname">
        <label>What would you like to get from attending the Pain Management Service?</label>


              <textarea className="textarea"
                  id="Management_service"
                  name="Management_service"
                  rows="5px"
                  cols="5px"
                  placeholder=""
                  onChange={handleChange('Management_service')}
                     defaultValue={values.Management_service}
                 ></textarea>
          </div>
          <div className="fieldname">
             <label>What are your personal expectations and goals?</label>


                   <textarea className="textarea"
                       id="goals"
                       name="goals"
                       rows="5px"
                       cols="5px"
                       placeholder=""
                       onChange={handleChange('goals')}
                          defaultValue={values.goals}
                      ></textarea>
               </div>
               <div className="fieldname">
                  <label>Do you have any other comments?</label>


                        <textarea className="textarea"
                            id="other_comments"
                            name="other_comments"
                            rows="5px"
                            cols="5px"
                            placeholder=""
                            onChange={handleChange('other_comments')}
                               defaultValue={values.other_comments}
                           ></textarea>
                    </div>
                    <div className="navbuttons">
                       <button className="Back" onClick={Previous}><FaChevronCircleLeft  color="green" size="2em"/></button>
                       <button className="Next" onClick={Continue}><FaChevronCircleRight  color="green" size="2em"/></button>
                   </div>


</div>


     )
     };
     export default page12;
