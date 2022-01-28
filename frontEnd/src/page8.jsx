import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page8 = ( {prevStep, nextStep,handleChange,values}) =>{
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
        <h3>Past Medications</h3>
       <h7>
         Please complete the items below to let us know about the medication you <strong>previously</strong> took for your pain, incuding the reasons why you no longer take each medication.

         If there is nothing to add then leave it empty and click <strong>>'Next'</strong> at the bottom of the page.


       </h7>
       </div>
   <div className="Medication">
       <h4>Medication-1</h4 >
     <div className="fieldname">

        <label>Medication 1-Name </label>

        <input type="text"
          name="Medication_1"
        onChange={handleChange('Medication_M1')}
          placeholder="name of medicine"
            defaultValue={values.Medication_M1} />
          </div>
          <div className="fieldname">

             <label>Medication 1-Dose </label>

             <input type="text"
               name="Medication_1"
             onChange={handleChange('Medication_D1')}
               placeholder=" eg 50mg,100mg"
                 defaultValue={values.Medication_D1} />
               </div>

</div>
           <div className="Medication">
                 <h4>Medication-2</h4 >
                   <div className="fieldname">

             <label>Medication 2-Name </label>

                      <input type="text"
                   name="Medication_1"
                  onChange={handleChange('Medication_M2')}
                   placeholder="name of medicine"
               defaultValue={values.Medication_M2} />
           </div>
             <div className="fieldname">

              <label>Medication 2-Dose </label>

                 <input type="text"
                  name="Medication_2"
               onChange={handleChange('Medication_D2')}
            placeholder=" eg 50mg,100mg"
              defaultValue={values.Medication_D2} />
             </div>

</div>

    <div className="Medication">
        <h4>Medication-3</h4 >
      <div className="fieldname">

         <label>Medication 3-Name </label>

         <input type="text"
           name="Medication_1"
         onChange={handleChange('Medication_M3')}
           placeholder="name of medicine"
             defaultValue={values.Medication_M3} />
           </div>
           <div className="fieldname">

              <label>Medication 3-Dose </label>

              <input type="text"
                name="Medication_3"
              onChange={handleChange('Medication_D3')}
                placeholder=" eg 50mg,100mg"
                  defaultValue={values.Medication_D3} />
                </div>

</div>





            <div  className="navbuttons">
               <button onClick={Previous}>Previous</button>

                   <button onClick={Continue}>Next</button>
          </div>
</div>


)
};
export default page8;
