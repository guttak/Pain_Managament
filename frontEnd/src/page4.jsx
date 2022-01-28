import React from 'react';
import Logo from './logo.jsx';
import './page1.css';
import Template from './template.jsx';
 const page4 = ({ prevStep, nextStep, handleChange,checkChange, values })=> {
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


       <Logo />
       <Template  />

           <div className="PMT">
         <h3>Present Pain Pattern</h3>
         </div >
         <div  className="container">
         <div className="fieldname">
            <div className="fieldlabel">
             <label>How often do you have pain?</label>
            </div>
         <div className="fieldradio">
           <input type="radio" value="Only Occasionally" id="often_pain" name="often_pain"
         onChange={handleChange('often_pain')}
           defaultValue={values.often_pain} />
         <label  for="radio1" className="radio1">Only Occasionally</label>
        <input type="radio" value="Most of the time" id="often_pain" name="often_pain"
          onChange={handleChange('often_pain')}
           defaultValue={values.often_pain}/>
       <label for="radio1" className="radio1">Most of the time</label>
         <input type="radio" value="Constantly" id="often_pain" name="often_pain"
           onChange={handleChange('often_pain')}
            defaultValue={values.often_pain}/>
          <label for="radio1" className="radio1">Constantly</label>
         </div>
       </div>
       <div className="fieldname">
          <div className="fieldlabel">
           <label>Are there times during which you experience no pain?</label>
          </div>
          <div className="fieldradio">
            <input type="radio" value="Yes" id="no_pain" name="no_pain"
          onChange={handleChange('no_pain')}
            defaultValue={values.no_pain} />
          <label  for="radio1" className="radio1">Yes</label>
         <input type="radio" value="No" id="no_pain" name="no_pain"
           onChange={handleChange('no_pain')}
            defaultValue={values.no_pain}/>
          <label for="radio1" className="radio1">No</label>

          </div>
        </div>
        <div className="fieldname">
        <div className="fieldlabel">
         <label>Time of day pain is best</label>
         </div>
          <div className="fieldinput">
           <input type="text" id="Timeofpainbest" name="Timeofpainbest"
              onChange={handleChange('Timeofpainbest')}
               defaultValue={values.Timeofpainbest}
                placeholder=""  />
           </div>
         </div>
         <div className="fieldname">
         <div className="fieldlabel">
          <label>Time of day pain is worst</label>
          </div>
           <div className="fieldinput">
            <input type="text" id="Timeofpainworst" name="Timeofpainworst"
               onChange={handleChange('Timeofpainworst')}
                defaultValue={values.Timeofpainworst}
                 placeholder=""  />
            </div>
          </div>
          <div className="fieldname">
             <label>What causes an increase in your pain?</label>

               <textarea className="textarea"
                       id="increasepain"
                       name="increasepain"
                       rows="5px"
                       cols="5px"
                       placeholder="please explain increasein your pain......"

                       onChange={handleChange('increasepain')}
                            defaultValue={values.increasepain}
                      ></textarea>
               </div>
               <div className="fieldname">
                  <label>What causes an decrease in your pain?</label>

                    <textarea className="textarea"
                            id="decreasepain"
                            name="decreasepain"
                            rows="5px"
                            cols="5px"
                            placeholder="please explain decrease in your pain......"

                            onChange={handleChange('decreasepain')}
                                 defaultValue={values.decreasepain}
                           ></textarea>
                    </div>
                    <div className="fieldname">
                       <label>What can you do to help relieve the pain?</label>

                         <textarea className="textarea"
                                 id="relievepain"
                                 name="relievepain"
                                 rows="5px"
                                 cols="5px"
                                 placeholder="please explain relieve in your pain......"

                                 onChange={handleChange('relievepain')}
                                      defaultValue={values.relievepain}
                                ></textarea>
                         </div>
                         <div className="fieldname">
                         <table>
                           <tr>
                             <th className="first-col"></th>
                             <th>Always</th>
                             <th>Some Times</th>
                             <th>Never</th>
                           </tr>
                           <tr>
                          <td className="first-col">Trouble falling asleep</td>

                             <td><input type="radio" value="Always" id="Trouble_sleep"name="Trouble_sleep" onChange={handleChange('Trouble_sleep')}  defaultValue={values.Trouble_sleep}/></td>

                             <td><input type="radio" value="Some Times"id="Trouble_sleep" name="Trouble_sleep" onChange={handleChange('Trouble_sleep')}  defaultValue={values.Trouble_sleep}/></td>
                             <td><input type="radio" value="Never"id="Trouble_sleep" name="Scans"onChange={handleChange('Trouble_sleep')}  defaultValue={values.Trouble_sleep} /></td>
                           </tr>
                           <tr>
                        <td className="first-col">Medication needed to fall asleep</td>
                             <td><input type="radio" value="Always" id="Medication_Sleep" name="Medication_Sleep"onChange={handleChange('Medication_Sleep')}  defaultValue={values.Medication_Sleep} /></td>
                             <td><input type="radio" value="Some Times"  id="Medication_Sleep" name="Medication_Sleep"onChange={handleChange('Medication_Sleep')}  defaultValue={values.Medication_Sleep}  /></td>
                             <td><input type="radio" value="Never" id="Medication_Sleep" name="Medication_Sleep"onChange={handleChange('Medication_Sleep')}  defaultValue={values.Medication_Sleep}  /></td>
                           </tr>
                           <tr>
                              <td className="first-col">Awakened by pain</td>
                              <td><input type="radio" value="Always" id="Awake_pain"name="Awake_pain"onChange={handleChange('Awake_pain')}  defaultValue={values.Awake_pain} /></td>
                             <td><input type="radio" value="Some Times" id="Awake_pain" name="Awake_pain"onChange={handleChange('Awake_pain')}  defaultValue={values.Awake_pain}/></td>
                             <td><input type="radio" value="Never" id="Awake_pain"name="Awake_pain"onChange={handleChange('Awake_pain')}  defaultValue={values.Awake_pain} /></td>
                           </tr>

                         </table>
                           </div>

                           <div className="fieldname">
                              <label>Any comments you wish to make</label>

                                <textarea className="textarea"
                                        id="comments4"
                                        name="comments4"
                                        rows="5px"
                                        cols="5px"
                                        placeholder="please write your comments here......"

                                        onChange={handleChange('comments4')}
                                             defaultValue={values.comments4}
                                       ></textarea>
                                </div>






     <div  className="navbuttons">
        <button onClick={Previous}>Back</button>

            <button onClick={Continue}>Next</button>

      </div>
    </div>
</div>






)
};

export default page4;
