import React from 'react';
import Logo from './logo.jsx';

//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page5.css';
import Template from './template';
const page5 = ( {prevStep, nextStep, checkChange, handleChange,values}) =>{
  const Continue = e =>{
    e.preventDefault();
    nextStep();
  };
  const Previous = e =>{
    e.preventDefault();
       prevStep();
  };


return(
    <div className="PMT">
            <div className="container5">
                <Logo />
                 <Template  />

            </div>

    <div>
      <h3>Pain investigtions</h3>
      </div>
      <div className="container">
      <div className="fieldname">
          <label><strong>Please tick if you have seen any of the following people regarding your pain?</strong></label>

                    <table>
                 <div className="checkinput">
                       <div><label for="check_1" className="check"><span>Pain Clinician or Anaesthetist</span>
                        <input type="checkbox" value="Pain Clinician or Anaesthetist" id="check_1" name="check_1"
                          onChange={checkChange('check_1')}  />
                       </label>


                      <input type="checkbox" value="Cardiologist" id="check_1" name="check_1"
                         onChange={checkChange('check_1')} defaultValue={values.check_1}/>
                     <label for="check_1" className="check"><span>Cardiologist</span></label>
                   </div>
                   <div>
                    <input type="checkbox" value="Dermatology" id="check_1" name="checklist"
                       onChange={checkChange('check_1')} defaultValue={values.check_1}/>
                   <label for="check_1" className="check"><span>Dermatology</span></label>
                 </div>
                 <div>
                  <input type="checkbox" value="Ear Nose Throat" id="check_1" name="checklist"
                     onChange={checkChange('check_1')} defaultValue={values.check_1}/>
               <label for="check_1" className="check"><span>Ear Nose Throat</span></label>
               </div>
               <div>
                <input type="checkbox" value="GP General Pracitioner" id="check_1" name="checklist"
                   onChange={checkChange('check_1')} defaultValue={values.check_1}/>
             <label for="check_1" className="check"><span>GP General Pracitioner</span></label>
             </div>
             <div>
              <input type="checkbox" value="Physician" id="check_1" name="checklist"
                  onChange={checkChange('check_1')} defaultValue={values.check_1}/>
           <label for="check_1" className="check"><span>Physician</span></label>
           </div>
           <div>
            <input type="checkbox" value="Neurologist" id="check_1" name="checklist"
                onChange={checkChange('check_1')} defaultValue={values.check_1}/>
           <label for="check_1" className="check"><span>Neurologist</span></label>
         </div>
         <div>
          <input type="checkbox" value="Gynaecologist" id="check_1" name="checklist"
              onChange={checkChange('check_1')} defaultValue={values.check_1}/>
       <label for="check_1" className="check"><span>Gynaecologist</span></label>
       </div>
       <div>
        <input type="checkbox" value="Eye Surgeon" id="check_1" name="checklist"
            onChange={checkChange('check_1')} defaultValue={values.check_1}/>
       <label for="check_1" className="check"><span>Eye Surgeon</span></label>
     </div>
     <div>
      <input type="checkbox" value="Orthopaedic Surgeon" id="check_1" name="checklist"
          onChange={checkChange('check_1')} defaultValue={values.check_1}/>
     <label for="check_1" className="check"><span>Orthopaedic Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="Paediatrician" id="check_1" name="checklist"
         onChange={checkChange('check_1')} defaultValue={values.check_1}/>
   <label for="check_1" className="check"><span>Paediatrician</span></label>
     </div>
     <div>
     <input type="checkbox" value="Plastic Surgeon" id="check_1" name="checklist"
        onChange={checkChange('check_1')} defaultValue={values.check_1}/>
       <label for="check_1" className="check"><span>Plastic Surgeon</span></label>
     </div>
    <div>
     <input type="checkbox" value="Phychologist" id="check_1" name="checklist"
       onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Phychologist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Phychiatrist" id="check_1" name="checklist"
       onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Phychiatrist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Plastic Surgeon" id="check_1" name="checklist"
      onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Plastic Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="Psychologist" id="check_1" name="checklist"
       onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Psychologist</span></label>
    </div>

    <div>
     <input type="checkbox" value="Radiologist" id="check_1" name="checklist"
        onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Radiologist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Surgeon" id="check_1" name="checklist"
     onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="Dentist" id="check_1" name="checklist"
     onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Dentist </span></label>
    </div>
    <div>
     <input type="checkbox" value="Rheumatologist" id="check_1" name="checklist"
        onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Rheumatologist </span></label>
    </div>
    <div>
     <input type="checkbox" value="Hypnotist" id="check_1" name="checklist"
         onChange={checkChange('check_1')} defaultValue={values.check_1}/>
    <label for="check_1" className="check"><span>Hypnotist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Osteopath" id="check_1" name="checklist"
          onChange={checkChange('check_1')} defaultValue={values.check_1}/>
     <label for="check_1" className="check"><span>Osteopath</span></label>
    </div>
    <div>
     <input type="checkbox" value="Chiropractor" id="check_1" name="checklist"
   onChange={checkChange('check_1')} defaultValue={values.check_1}/>
  <label for="check_1" className="check"><span>Chiropractor</span></label>
    </div>
    <div>
     <input type="checkbox" value="Acupuncturist" id="check_1" name="checklist"
       onChange={checkChange('check_1')} defaultValue={values.check_1}/>
  <label for="check_1" className="check"><span>Acupuncturist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Faith Healer" id="check_1" name="checklist"
          onChange={checkChange('check_1')} defaultValue={values.check_1}/>
  <label for="check_1" className="check"><span>Faith Healer</span></label>
    </div>
    <div>
     <input type="checkbox" value="Physiotherapist" id="check_1" name="checklist"
          onChange={checkChange('check_1')} defaultValue={values.check_1}/>
  <label for="check_1" className="check"><span>Physiotherapist</span></label>
    </div>
    <div>
     <input type="checkbox" value="Others" id="check_1" name="checklist"
         onChange={checkChange('check_1')} defaultValue={values.check_1}/>
  <label for="check_1" className="check"><span>Others</span></label>
    </div>
  </div>
  </table>
</div>
         </div>

         <div className="investigtion" >
          <h6>Please give details of any tests or investigation you have had for the pain listing the health professionals and hospitals if possible</h6>

        <p>please tick necessary boxes</p>
        </div>

       <div className="fieldname">
       <table>
         <tr>
           <th className="first-col"></th>
           <th>Awaiting</th>
           <th>Had Done</th>
           <th>Not Yet</th>
         </tr>
         <tr>
           <td className="first-col">Scans</td>
           <td><input type="radio" value="Awaiting" id="Scans"name="Scans" onChange={handleChange('Scans')}  defaultValue={values.Scans}/></td>

           <td><input type="radio" value="Had Done"id="Scans" name="Scans" onChange={handleChange('Scans')}  defaultValue={values.Scans}/></td>
           <td><input type="radio" value="Not Yet"id="Scans" name="Scans"onChange={handleChange('Scans')}  defaultValue={values.Scans} /></td>
         </tr>
         <tr>
           <td className="first-col">Blood Tests</td>
           <td><input type="radio" value="Awaiting" id="BloodTests" name="BloodTests"onChange={handleChange('BloodTests')}  defaultValue={values.BloodTests} /></td>
           <td><input type="radio" value="Had Done"  id="BloodTests" name="BloodTests"onChange={handleChange('BloodTests')}  defaultValue={values.BloodTests}  /></td>
           <td><input type="radio" value="Not Yet" id="BloodTests" name="BloodTests"onChange={handleChange('BloodTests')}  defaultValue={values.BloodTests}  /></td>
         </tr>
         <tr>
           <td className="first-col">Nerve Tests</td>
           <td><input type="radio" value="Awaiting" id="Nerve Tests"name="Nerve Tests "onChange={handleChange('NerveTests')}  defaultValue={values.NerveTests} /></td>
           <td><input type="radio" value="Had Done" id="Nerve Tests" name="Nerve Tests"onChange={handleChange('NerveTests')}  defaultValue={values.NerveTests} /></td>
           <td><input type="radio" value="Not Yet" id="Nerve Tests"name="Nerve Tests"onChange={handleChange('NerveTests')}  defaultValue={values.NerveTests} /></td>
         </tr>
         <tr>
           <td className="first-col">X-rays</td>
           <td><input type="radio" value="Awaiting" id="X-rays"name="X-rays "onChange={handleChange('X_rays')}  defaultValue={values.X_rays} /></td>
           <td><input type="radio" value="Had Done" id="X-rays" name="X-rays"onChange={handleChange('X_rays')}  defaultValue={values.X_rays} /></td>
           <td><input type="radio" value="Not Yet" id="X-rays"name="X-rays"onChange={handleChange('x_rays')}  defaultValue={values.X_rays} /></td>
         </tr>

       </table>
         </div>

           <div className="fieldname">
              <label>Please give the details of any major illnesses including the dates  if possible</label>


                    <textarea className="textarea"
                        id="majorillnesses"
                        name="majorillnesses"
                        rows="5px"
                        cols="5px"
                        placeholder="Explain the major illness......"
                        onChange={handleChange('majorillnesses')}
                           defaultValue={values.majorillnesses}
                       ></textarea>
                </div>
                <div className="fieldname">
                   <label>Please give the details of any other present illnesses</label>

                     <textarea className="textarea"
                             id="presentillnesses"
                             name="presentillnesses"
                             rows="5px"
                             cols="5px"
                             placeholder="please explain the present illnesses......"

                             onChange={handleChange('presentillnesses')}
                                  defaultValue={values.presentillnesses}
                            ></textarea>
                     </div>

                   <div className="fieldname">
                         <label>Have you ever received any help from mental health services?</label>
                          <label className="radio1">yes
                          <input type="radio" id="mentalservices" name="mentalservices"   value="yes"/>


                             <label className="radio1">No
                             <input type="radio" id="mentalservices" name="mentalservices"  value="No"  />
                             </label>   </label>
                    </div>
                    <div className="fieldname">
                    <table>
                      <tr>
                        <th className="first-col"></th>
                        <th>Now receiving</th>
                        <th>In the past</th>
                        <th>Found it effective</th>
                      </tr>
                      <tr>
                        <td className="first-col">Injections</td>
                        <td><input type="radio" value="Now receiving" id="injections"name="injections" onChange={handleChange('injections')}  defaultValue={values.injections}/></td>

                        <td><input type="radio" value="In the past"id="injections" name="injections" onChange={handleChange('injections')}  defaultValue={values.injections}/></td>
                        <td><input type="radio" value="Found it effective"id="injections" name="injections"onChange={handleChange('injections')}  defaultValue={values.injections} /></td>
                      </tr>
                      <tr>
                        <td className="first-col">Psychology Counselling </td>

                        <td><input type="radio" value="Now receiving" id="Psychology" name="Psychology"onChange={handleChange('Psychology')}  defaultValue={values.Psychology} /></td>
                        <td><input type="radio" value="In the past"  id="Psychology" name="Psychology" onChange={handleChange('Psychology')}  defaultValue={values.Psychology}  /></td>
                        <td><input type="radio" value="Found it effective" id="Psychology" name="Psychology"onChange={handleChange('Psychology')}  defaultValue={values.Psychology} /></td>
                      </tr>
                      <tr>
                        <td className="first-col">Physiotherapy</td>

                        <td><input type="radio" value="Now receiving" id="Physiotherapy"name="Physiotherapy"onChange={handleChange('Physiotherapy')}  defaultValue={values.Physiotherapy} /></td>
                        <td><input type="radio" value="In the past" id="Physiotherapy" name="Physiotherapy"onChange={handleChange('Physiotherapy')}  defaultValue={values.Physiotherapy} /></td>
                        <td><input type="radio" value="Found it effective" id="Physiotherapy"name="Physiotherapy"onChange={handleChange('Physiotherapy')}  defaultValue={values.Physiotherapy} /></td>
                      </tr>
                      <tr>
                        <td className="first-col">Tens</td>

                        <td><input type="radio" value="Now receiving" id="tens" name="tens"onChange={handleChange('tens')}  defaultValue={values.tens} /></td>
                        <td><input type="radio" value="In the past" id="tens" name="tens"onChange={handleChange('tens')}  defaultValue={values.tens} /></td>
                        <td><input type="radio" value="Found it effective" id="tens"name="tens" onChange={handleChange('tens')}  defaultValue={values.tens}/></td>
                      </tr>
                      <tr>
                        <td className="first-col">Acupuncture</td>
                        <td><input type="radio" value="Now receiving" id="Acupuncture" name="Acupuncture"onChange={handleChange('Acupuncture')}  defaultValue={values.Acupuncture} /></td>
                        <td><input type="radio" value="In the past" id="Acupuncture" name="Acupuncture"onChange={handleChange('Acupuncture')}  defaultValue={values.Acupuncture} /></td>
                        <td><input type="radio" value="Found it effective" id="Acupuncture"name="Acupuncture" onChange={handleChange('Acupuncture')}  defaultValue={values.Acupuncture}/></td>
                      </tr>
                      <tr>
                    <td className="first-col">Osteopath or Chiropractor</td>

                        <td><input type="radio" value="Now receiving" id="Chiropractor" name="Chiropractor"onChange={handleChange('Chiropractor')}  defaultValue={values.Chiropractor} /></td>
                        <td><input type="radio" value="In the past" id="Chiropractor" name="Chiropractor"onChange={handleChange('Chiropractor')}  defaultValue={values.Chiropractor} /></td>
                        <td><input type="radio" value="Found it effective" id="Chiropractor"name="Chiropractor" onChange={handleChange('Chiropractor')}  defaultValue={values.Chiropractor}/></td>
                      </tr>
                      <tr>
                          <td className="first-col">Any other treatments?</td>


                          <td><input type="radio" value="Now receiving" id="othertreatments" name="othertreatments"onChange={handleChange('othertreatments')}  defaultValue={values.othertreatments} /></td>
                          <td><input type="radio" value="In the past" id="othertreatments" name="othertreatments"onChange={handleChange('othertreatments')}  defaultValue={values.othertreatments} /></td>
                          <td><input type="radio" value="Found it effective" id="othertreatments"name="othertreatments" onChange={handleChange('othertreatments')}  defaultValue={values.othertreatments}/></td>
                        </tr>
                    </table>
                      </div>
                      <div className="fieldname">
                         <label>Details of treatment including dates if possible</label>

                           <textarea className="textarea"
                                   id="detailtreatments"
                                   name="detailtreatments"
                                   rows="5px"
                                   cols="5px"
                                   placeholder="please write your details here......"

                                   onChange={handleChange('detailtreatments')}
                                        defaultValue={values.detailtreatments}
                                  ></textarea>
                           </div>
                           <div className="fieldname">
                                    <label>Do you smoke</label>
                                      <div className="fieldinput4">

                                        <label className="radio1">yes
                                     <input type="radio" id="smoke" name="smoke"
                                       value="yes"onChange={handleChange('smoke')}
                                         defaultValue={values.smoke}/>

                                      </label>
                                        <label className="radio1">No

                                   <input type="radio" id="smoke" name="smoke"
                                     value="No" onChange={handleChange("smoke")}
                                       defaultValue={values.smoke}/>

                              </label>
                       </div>
                     </div>
                     <div className="fieldname">
                              <label>Do you drink alcohol</label>

                                <div className="fieldinput4">

                                  <label className="radio1">yes
                               <input type="radio" id="alcohol" name="alcohol"
                                 value="yes"onChange={handleChange('alcohol')}
                                   defaultValue={values.alcohol}/>

                                </label>
                                  <label className="radio1">No

                             <input type="radio" id="alcohol" name="alcohol"
                               value="No" onChange={handleChange("alcohol")}
                                 defaultValue={values.alcohol}/>

                        </label>
                 </div>
               </div>
               <div className="fieldname">
                  <label>What does your pain stop you from doing (physical activity)</label>

                    <textarea className="textarea"
                            id="physicalactivity"
                            name="physicalactivity"
                            rows="5px"
                            cols="5px"
                            placeholder="......"

                            onChange={handleChange('physicalactivity')}
                                 defaultValue={values.physicalactivity}
                           ></textarea>
                    </div>
                    <div className="fieldname">
                       <label>Please give detail of how you spend your typical day</label>

                         <textarea className="textarea"
                                 id="typicalday"
                                 name="typicalday"
                                 rows="5px"
                                 cols="5px"
                                 placeholder="please explain the typicalday......"

                                 onChange={handleChange('typicalday')}
                                      defaultValue={values.typicalday}
                                ></textarea>
                         </div>




                                       <div  className="navbuttons">
                                        <button onClick={Previous}>Back</button>
                                        <button onClick={Continue}>Next</button>


                                      </div>
                                    </div>










                             );
                             }

                             export default page5;
