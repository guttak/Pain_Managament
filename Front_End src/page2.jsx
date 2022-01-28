import React from 'react';
import Logo from './logo.jsx';
 //import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
//mport { Grid, Box, Item } from '@material-ui/core'
// import Speechonown from './Speechonown.jsx'
 //import Dictaphone from './Dictaphone.js';
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page2.css';
import Template from './template.jsx';
 const page2 = ({ prevStep, nextStep, handleChange,checkChange, values })=> {
// state= {
//   name: ''
//
// }
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const Continue = e =>{
  e.preventDefault();
     let errors=[]
     if(values.Gender.length===0){
        errors.push("sex must be Enter \n")
}
               if(errors.length===0){
                   nextStep();
     }
              else{
                alert(errors)
              }
};
const Previous = e =>{
  e.preventDefault();
     prevStep();
};
// handleChange = ({ target: { value, name }}) =>
// this.setState({ [name]: value})

// createAndDownloadPdf = (e) => {
//
//   axios.post('/create-pdf', this.state)
//     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
//     .then((res) => {
//       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
//
//       saveAs(pdfBlob, 'newPdf.pdf');
//     })
//
// };

    // const { values, handleChange } = this.props;
return(

  <div>
<div>
  <div className="container1">

  <Logo />
  <Template  />
  </div>

 </div>

     <div className="PMT">
       <div className="container">
       <div className="fieldname">
            <div className="fieldlabel">
                <label>Year Pain Began</label>
                </div>
                <div className="fieldinput">
                     <input type="date" id="Yob" name="Yob"
                     dateFormat="yyyy"
                     onChange={handleChange('Yob')} defaValue={values.Yob} />
               </div>
             </div>


        <div className="fieldname">

              <label>How did the pain start?</label>
            </div>
              <div className="checkinput">
                 <div className="checkbox-list">

                    <label className="check-item">
                         <input type="checkbox" name="pain_start"  value="Accident at work" id="pain_start"/>
                           <span>Accident at work</span>
                    </label>
                     <label className="check-item">
                      <input type="checkbox" name="pain_start"  value="Accident at home" id="pain_start"
                          onChange={checkChange('pain_start')}/>
                      <span>Accident at home</span>
                   </label>
                   <label className="check-item">
                    <input type="checkbox" name="pain_start"  value="Following illness" id="pain_start"
                      onChange={checkChange('pain_start')}/>
                    <span>Following illness</span>
                  </label>
                  <label className="check-item">
                   <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"
                     onChange={checkChange('pain_start')}/>
                   <span>Following surgery</span>
                 </label>
                 <label className="check-item">
                  <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"
                    onChange={checkChange('pain_start')}/>
                  <span>Road Traffic Accident</span>
                </label>
                <label className="check-item">
                 <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"
                   onChange={checkChange('pain_start')}/>
                 <span>Pain just began</span>
               </label>

              <label className="check-item">
               <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"
                 onChange={checkChange('pain_start')}/>
               <span>Others</span>
             </label>
  </div>

     </div>
       <div className="fieldname">
          <div className="fieldlabel">
           <label>Was the onset of pain</label>
           </div>
           <div className="fieldradio">
             <input type="radio" value="Instant" id="Booking2" name="Booking2"
           onChange={handleChange('Booking2')}
             defaultValue={values.Booking2} />
           <label  for="radio1" className="radio1">Instant</label>
          <input type="radio" value="Gradual" id="Booking2" name="Booking2"
            onChange={handleChange('Booking2')}
             defaultValue={values.Booking2}/>
           <label for="radio1" className="radio1">Gradual</label>
           </div>
         </div>

         <div className="fieldname">
            <div className="fieldlabel">
             <label>sex</label><br/>
                <div className="mandtory">
             <label>*Mandtory field</label>
             </div>
           </div>
             <div className="fieldradio">
               <input type="radio" value="Male" id="Gender" name="Gender"
             onChange={handleChange('Gender')}
               defaultValue={values.Gender} />
             <label  for="radio1" className="radio1">Male</label>
            <input type="radio" value="Female" id="Gender" name="Gender"
              onChange={handleChange('Gender')}
               defaultValue={values.Gender}/>
             <label for="radio1" className="radio1">Female</label>
             </div>
           </div>










         <div className="checklabel">

             <label> Please indicate what words describe your pain now</label>
          </div>
          <div className="checkinput">
              <div className="checkbox-list">
          <div className="check-item">
                  <input type="checkbox" value="Throbbing" id="describe_pain" name="describe_pain"
                     onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Throbbing</span></label>
            </div>
            <div>
                  <input type="checkbox" value="shooting" id="describepain" name="describepain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describepain" className="check"><span>shooting</span></label>
            </div>
            <div>
                  <input type="checkbox" value="stabbing" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>stabbing</span></label>
            </div>
            <div>
                  <input type="checkbox" value="sharp" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>sharp</span></label>
            </div>
            <div>
                  <input type="checkbox" value="cramping" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>cramping</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Gnawing" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Gnawing</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Hot-Burning" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Hot-Burning</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Aching" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Aching</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Heavy" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Heavy</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Tender" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Tender</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Splitting" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Splitting</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Tiring-Exhausting" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Tiring-Exhausting</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Sickening" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Sickening</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Fearful" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Fearful</span></label>
            </div>
            <div>
                  <input type="checkbox" value="Punishing-Cruel" id="describe_pain" name="describe_pain"
                    onChange={checkChange('describe_pain')} />
                  <label for="describe_pain" className="check"><span>Punishing-Cruel</span></label>
            </div>
          </div>
        </div>
       </div>

               <div className="fieldname">
                  <label>Any comments you wish to make</label>

                    <textarea className="textarea"
                            id="comments"
                            name="comments"
                            rows="5px"
                            cols="5px"
                            placeholder="please write your comments here......"

                            onChange={handleChange('comments')}
                                 defaultValue={values.comments}
                           ></textarea>
                    </div>

            </div>


       <div  className="navbuttons">
          <button onClick={Previous}>Back</button>

              <button onClick={Continue}>Next</button>

        </div>
  </div>







)
};

export default page2;
