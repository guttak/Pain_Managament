import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page7 = ( {prevStep, nextStep,handleChange,values}) =>{
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
    <div className="container">
         <Logo />
        <Template  />

    </div>
        <div className="PMT">

       <h7>


 Please complete the items below to let us know about the Medication you take for your pain.

 For this section, please only add the Medication you take as and when required

 If you do not take any as and when required Medication then leave it empty and click 'Next' at the bottom of the page.
       </h7>

   <div className="Medication">
       <h4>Medication-1</h4 >
     <div className="fieldname">





        <label>Medication 1-Name </label>

        <input type="text"
          name="medication_1"
        onChange={handleChange('medication_M1')}
          placeholder="name of medicine"
            defaultValue={values.medication_M1} />
          </div>
          <div className="fieldname">

             <label>Medication 1-Dose </label>

             <input type="text"
               name="medication_1"
             onChange={handleChange('medication_D1')}
               placeholder=" eg 50mg,100mg"
                 defaultValue={values.medication_D1} />
               </div>
               <div className="fieldname">
                  <label>Medication 1-Frequency </label>
                  <input type="text"
                    name="medication_1"
                  onChange={handleChange('medication_F1')}
                    placeholder=" eg 4 times per day "
                      defaultValue={values.medication_F1} />
                    </div>
</div>
           <div className="Medication">
                 <h4>Medication-2</h4 >
                   <div className="fieldname">

             <label>Medication 2-Name </label>

                      <input type="text"
                   name="medication_M2"
                  onChange={handleChange('medication_M2')}
                   placeholder="name of medicine"
               defaultValue={values.medication_M2} />
           </div>
             <div className="fieldname">

              <label>Medication 2-Dose </label>

                 <input type="text"
                  name="medication_D2"
               onChange={handleChange('medication_D2')}
            placeholder=" eg: 50mg,100mg"
              defaultValue={values.medication_D2} />
             </div>
             <div className="fieldname">
               <label>Medication 2-Frequency </label>
               <input type="text"
                 name="medication_F2"
               onChange={handleChange('medication_F2')}
                 placeholder=" eg:4 times per day "
                   defaultValue={values.medication_F2 } />
                 </div>
   </div>

      <div className="Medication">
        <h4>Medication-3</h4 >
      <div className="fieldname">

         <label>Medication 3-Name </label>

         <input type="text"
           name="medication_M3"
         onChange={handleChange('medication_M3')}
           placeholder="name of medicine"
             defaultValue={values.medication_M3} />
           </div>
           <div className="fieldname">

              <label>Medication 3-Dose </label>

              <input type="text"
                name="medication_D3"
              onChange={handleChange('medication_D3')}
                placeholder=" eg 50mg,100mg"
                  defaultValue={values.medication_D3} />
                </div>
                <div className="fieldname">
                   <label>Medication 3-Frequency </label>
                   <input type="text"
                     name="medication_F3"
                   onChange={handleChange('medication_F3')}
                     placeholder=" eg:4 times per day "
                       defaultValue={values.medication_F3} />
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
export default page7;
