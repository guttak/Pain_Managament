import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page9 = ( {prevStep, nextStep,handleChange,values}) =>{
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
        <h3>Other Medication</h3>
       <h7>
        Please complete the box below to let us know about the any <strong>other medication</strong> you take that is <strong>not related to your pain</strong> that you have <strong>not already mentioned</strong>.

       <p> If there is nothing to add then leave it empty and click <strong>'Next'</strong> at the bottom of the page.</p>


       </h7>
       </div>
       <div className="Medication">
           <h6>
       Are you taking any other medications for other reasons?</h6 >
        </div>
               <div className="fieldname">
                  <label>Medication name & reason for taking</label>
                  <div>
                   <textarea className="textarea"
                      id="Reasonfortaking"
                      name="Reasonfortaking"
                      rows="5"
                      cols="5"
                      placeholder=""
                      paddingRight="20px, 20px,2px,20px"
                      onChange={handleChange('Reasonfortaking ')}
                           defaultValue={values.Reasonfortaking}
                     ></textarea>
                 </div>
               </div>
                   <div  className="navbuttons">
                      <button onClick={Previous}>Previous</button>

                          <button onClick={Continue}>Next</button>
                 </div>
     </div>
     )
     };
     export default page9;
