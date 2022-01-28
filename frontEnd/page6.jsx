import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';

import Template from './template';
const page6 = ( {prevStep, nextStep,handleChange,values}) =>{
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
      <div>
          <h3>Regular Medications</h3>
       <h7>
         Please complete the items below to let us know about the medication you take for your pain.

            For this section, please only add the medication you take <strong>regularly</strong>

            You can add up to 20 medications.

If you do not take any <strong>regular</strong> medication then leave it empty and click 'Next' at the bottom of the page.

       </h7>
       </div>
   <div className="Medication">
       <h4>Medication-1</h4 >
         <div className="fieldname">
     <div className="fieldlabel">

        <label>Medication 1-Name </label>
      </div>
      <div className="feildinput">
        <input type="text"
          name="Medication_M1"
        onChange={handleChange('Medication_M1')}
          placeholder="name of medicine"
            defaultValue={values.Medication_M1} />
          </div>
        </div>
          <div className="fieldname">

             <label>Medication 1-Dose </label>

             <input type="text"
               name="Medication_D1"
             onChange={handleChange('Medication_D1')}
               placeholder=" eg 50mg,100mg"
                 defaultValue={values.Medication_D1} />
               </div>
               <div className="fieldname">
                  <label>Medication 1-Frequency </label>
                  <input type="text"
                    name="Medication_F1"
                  onChange={handleChange('Medication_F1')}
                    placeholder=" eg 4 times per day "
                      defaultValue={values.Medication_F1} />
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
             <div className="fieldname">
               <label>Medication 2-Frequency </label>
               <input type="text"
                 name="Medication_1"
               onChange={handleChange('Medication_F2')}
                 placeholder=" eg 4 times per day "
                   defaultValue={values.Medication_F2 } />
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
                <div className="fieldname">
                   <label>Medication 3-Frequency </label>
                   <input type="text"
                     name="Medication_3"
                   onChange={handleChange('Medication_F3')}
                     placeholder=" eg 4 times per day "
                       defaultValue={values.Medication_F3} />
                     </div>
</div>





            <div  className="navbuttons">
               <button onClick={Previous}>Previous</button>

                   <button onClick={Continue}>Next</button>
          </div>
</div>
</div>


)
};
export default page6;
