import React from 'react';
import Logo from './logo.jsx';
import {FaChevronCircleLeft} from "react-icons/fa"
import {FaChevronCircleRight} from "react-icons/fa"
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page11 = ( {prevStep, nextStep,handleChange,checkChange,values}) =>{
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
        <h3>Personal Details</h3>
       <h7>


       <p> Please complete the items below to let us know about your personal details and circumstances</p>


       </h7>


       <div className="fieldname">
          <div className="fieldlabel">
           <label>Do you live alone?</label>
           </div>
           <div className="fieldradio">
             <input type="radio" value="Yes" id="Alone" name="Alone"
             onChange={handleChange('Alone')}
             defaultValue={values.Alone} />
           <label  for="radio1" className="radio1">Yes</label>
          <input type="radio" value="No" id="Alone" name="Alone"
             onChange={handleChange('Alone')}
             defaultValue={values.Alone}/>
           <label for="radio1" className="radio1">No</label>
           </div>
         </div>

                <div className="fieldname">
                   <div className="fieldlabel">
                    <label>Marital status?</label>
                    </div>
                    <div className="fieldradio11">
                      <input type="radio" value="unmarried" id="Martual_status" name="Martual_status"
                      onChange={handleChange('Martual_status')}
                      defaultValue={values.Martual_status} />
                    <label  for="radio11" className="radio11">unmarried</label>
                   <input type="radio" value="Married or Partner" id="Martual_status" name="Martual_status"
                      onChange={handleChange('Martual_status')}
                      defaultValue={values.Martual_status}/>
                    <label for="radio11" className="radio11">Married or Partner</label>
                      <input type="radio" value="Divorced or Separated" id="Martual_status" name="Martual_status"
                         onChange={handleChange('Martual_status')}
                         defaultValue={values.Martual_status}/>
                       <label for="radio11" className="radio11">Divorced or Separated</label>
                         <input type="radio" value="Widow or Widower" id="Martual_status" name="Martual_status"
                            onChange={handleChange('Martual_status')}
                            defaultValue={values.Martual_status}/>
                          <label for="radio11" className="radio11">Widow or Widower</label>


                    </div>
                  </div>
                  <div className="fieldname">
                    <div className="fieldlabel">
                       <label>Number of children</label>

                       </div>
                        <div className="fieldinput">
                            <input type="text"
                                 name="Number_children"
                                  onChange={handleChange('Number_children')}
                                  placeholder=""
                                   defaultValue={values.Number_children} />

                           </div>
                       </div>
                       <div className="fieldname">
                         <div className="fieldlabel">
                            <label>Number of children at home</label>

                            </div>
                             <div className="fieldinput">
                                 <input type="text"
                                      name="Number_children_home"
                                       onChange={handleChange('Number_children_home')}
                                       placeholder=""
                                        defaultValue={values.Number_children_home} />

                                </div>
                            </div>
                            <div className="fieldname">
                               <div className="fieldlabel">
                                <label>Current situation</label>
                                </div>
                                <div className="fieldradio11">
                                  <input type="radio" value="Employed Full-time" id="Current_situtaion" name="Martual_status"
                                  onChange={handleChange('Current_situtaion')}
                                  defaultValue={values.Current_situtaion} />
                                <label  for="radio11" className="radio11">Employed Full-time</label>
                               <input type="radio" value="Married or Partner" id="Current_situtaion"name="Current_situtaion"
                                  onChange={handleChange('Current_situtaion')}
                                  defaultValue={values.Current_situtaion}/>
                                <label for="radio11" className="radio11">Employed Part-time</label>
                                  <input type="radio" value="Employed Part-time" id="Current_situtaion" name="Current_situtaion"
                                     onChange={handleChange('Current_situtaion')}
                                     defaultValue={values.Current_situtaion}/>
                                   <label for="radio11" className="radio11">Employed on sick leave</label>
                                     <input type="radio" value="Employed on sick leave" id="Current_situtaion" name="Current_situtaion"
                                        onChange={handleChange('Current_situtaion')}
                                        defaultValue={values.Current_situtaion}/>
                                      <label for="radio11" className="radio11">Employed on sick leave</label>
                                        <input type="radio" value="Home Maker" id="Current_situtaion" name="Current_situtaion"
                                           onChange={handleChange('Current_situtaion')}
                                           defaultValue={values.Current_situtaion}/>
                                         <label for="radio11" className="radio11">Home Maker</label>
                                           <input type="radio" value="Unemployed due to pain" id="Current_situtaion" name="Current_situtaion"
                                              onChange={handleChange('Current_situtaion')}
                                              defaultValue={values.Current_situtaion}/>
                                            <label for="radio11" className="radio11">Unemployed Not due to pain</label>
                                              <input type="radio" value="Unemployed due to pain" id="Current_situtaion" name="Current_situtaion"
                                                 onChange={handleChange('Current_situtaion')}
                                                 defaultValue={values.Current_situtaion}/>
                                               <label for="radio11" className="radio11">Unemployed Not due to pain</label>
                                                 <input type="radio" value="Retired" id="Current_situtaion" name="Current_situtaion"
                                                    onChange={handleChange('Current_situtaion')}
                                                    defaultValue={values.Current_situtaion}/>
                                                  <label for="radio11" className="radio11">Retired</label>
                                                    <input type="radio" value="Retired on medical grounds" id="Current_situtaion" name="Current_situtaion"
                                                       onChange={handleChange('Current_situtaion')}
                                                       defaultValue={values.Current_situtaion}/>
                                                     <label for="radio11" className="radio11">Retired on medical grounds</label>
                                                       <input type="radio" value="Voluntary work" id="Current_situtaion" name="Current_situtaion"
                                                          onChange={handleChange('Current_situtaion')}
                                                          defaultValue={values.Current_situtaion}/>
                                                        <label for="radio11" className="radio11">Voluntary work</label>
                                                          <input type="radio" value="Student" id="Current_situtaion" name="Current_situtaion"
                                                             onChange={handleChange('Current_situtaion')}
                                                             defaultValue={values.Current_situtaion}/>
                                                           <label for="radio11" className="radio11">Student</label>
                                                   </div>
                                                 </div>
                                                 <div className="fieldname">
                                                   <div className="fieldlabel">
                                                      <label>What is or was your job title?</label>

                                                      </div>
                                                       <div className="fieldinput">
                                                           <input type="text"
                                                                name="job_title"
                                                                 onChange={handleChange('job_title')}
                                                                 placeholder=""
                                                                  defaultValue={values.job_title} />

                                                          </div>
                                                      </div>
                                                      <div className="fieldname">
                                                        <div className="fieldlabel">
                                                           <label>When did you stop working?</label>

                                                           </div>
                                                            <div className="fieldinput">
                                                                <input type="text"
                                                                     name="stop_working"
                                                                      onChange={handleChange('stop_working')}
                                                                      placeholder=""
                                                                       defaultValue={values.stop_working} />

                                                               </div>
                                                           </div>
                                                           <div className="fieldname">

                                                                 <label>Are you receiving or in the process of claiming any state benefits?</label>
                                                               </div>
                                                                 <div className="checkinput">
                                                                    <div className="checkbox-list">

                                                                       <label className="check-item">
                                                                            <input type="checkbox" name="state_benfits"  value="None" id="state_benfits"
                                                                               onChange={checkChange('state_benfits')}/>
                                                                              <span>None</span>
                                                                       </label>
                                                                        <label className="check-item">
                                                                         <input type="checkbox" name="state_benfits" value="Job Seekers Allowance" id="state_benfits"
                                                                             onChange={checkChange('state_benfits')}/>
                                                                           <span>Job Seekers Allowance</span>
                                                                      </label>
                                                                      <label className="check-item">
                                                                       <input type="checkbox" name="state_benfits"  value="Sickness Benfit" id="state_benfits"
                                                                         onChange={checkChange('state_benfits')}/>
                                                                       <span>Sickness Benfit</span>
                                                                     </label>
                                                                     <label className="check-item">
                                                                      <input type="checkbox" name="state_benfits"  value="DLA(mobility)" id="state_benfits"
                                                                        onChange={checkChange('state_benfits')}/>
                                                                      <span>DLA(mobility)</span>
                                                                    </label>
                                                                    <label className="check-item">
                                                                     <input type="checkbox" name="state_benfits"  value="DLA(care)" id="state_benfits"
                                                                       onChange={checkChange('state_benfits')}/>
                                                                     <span>DLA(care)</span>
                                                                   </label>
                                                                   <label className="check-item">
                                                                    <input type="checkbox" name="state_benfits"  value="Industrial Injury" id="state_benfits"
                                                                      onChange={checkChange('state_benfits')}/>
                                                                    <span>Industrial Injury</span>
                                                                  </label>
                                                                  <label className="check-item">
                                                                   <input type="checkbox" name="state_benfits"  value="Pension(medically retired)" id="state_benfits"
                                                                     onChange={checkChange('state_benfits')}/>
                                                                   <span>Pension(medically retired)</span>
                                                                 </label>

                                                                 <label className="check-item">
                                                                  <input type="checkbox" name="state_benfits"  value="Others(please give details)" id="state_benfits"
                                                                    onChange={checkChange('state_benfits')}/>
                                                                  <span>Others(please give details)</span>
                                                                </label>
                                                     </div>

                                                        </div>

                                                        <div className="fieldname">
                                                           <div className="fieldlabel">
                                                            <label>Are there any legal actions being taken with regard to your pain?</label>
                                                            </div>
                                                            <div className="fieldradio11">
                                                              <input type="radio" value="None" id="legal_actions" name="legal_actions"
                                                              onChange={handleChange('legal_actions')}
                                                              defaultValue={values.legal_actions} />
                                                            <label  for="radio11" className="radio11">None</label>
                                                              <input type="radio" value="Anticipated" id="legal_actions" name="legal_actions"
                                                              onChange={handleChange('legal_actions')}
                                                              defaultValue={values.legal_actions} />
                                                            <label  for="radio11" className="radio11">Anticipated</label>
                                                              <input type="radio" value="Current" id="legal_actions" name="legal_actions"
                                                              onChange={handleChange('legal_actions')}
                                                              defaultValue={values.legal_actions} />
                                                            <label  for="radio11" className="radio11">Current</label>
                                                              <input type="radio" value="Finished" id="legal_actions" name="legal_actions"
                                                              onChange={handleChange('legal_actions')}
                                                              defaultValue={values.legal_actions} />
                                                            <label  for="radio11" className="radio11">Finished</label>
                  </div>
       </div>
       <div className="navbuttons">
          <button className="Back" onClick={Previous}><FaChevronCircleLeft  color="green" size="2em"/></button>
          <button className="Next" onClick={Continue}><FaChevronCircleRight  color="green" size="2em"/></button>


          </div>
   </div>
     </div>
     )
     };
     export default page11;
