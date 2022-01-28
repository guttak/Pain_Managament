import React  from 'react';
//import axios from 'axios';
//import { saveAs } from 'file-saver';
// import Dictaphone from './Dictaphone.js';
// import RecordSection from './RecordSection.jsx';
//import { FaMicrophone } from 'react-icons/fa';
 //import Speechonown from './Speechonown.jsx'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.jsx';
//  import Footer from './footer.jsx';
import './page1.css'
import {FaChevronCircleLeft} from "react-icons/fa"
import {FaChevronCircleRight} from "react-icons/fa"

const Page1 = ({ prevStep,nextStep, handleChange, values }) => {
   //  const [startDate, setStartDate] = useState(new Date());
   // console.log('in page1',startDate)

  const  Continue = e => {

       e.preventDefault();
       let errormessages=[]

       if(values.firstName.length === 0){
         errormessages.push("firstName must be Enter \n" )
       }

        if(values.lastName.length===0){
          errormessages.push("lastName must be Enter \n")

     }
     if(values.email.length===0){
       errormessages.push("Email must be Enter \n")

  }
  if(values.Booking.length ===0){
    errormessages.push("are you filling form must be Enter \n")

}
if(values.postcode.length ===0){
  errormessages.push("postcode must be Enter \n")

}

          if(errormessages.length===0 ){
              nextStep();
}
         else{
           alert(errormessages)
         }

}





     const Previous = e =>{
       e.preventDefault();
          prevStep();
     };

console.log(React.version);
    return (
      <div>

              <Logo />
        <div className="PMT">

              <div className="container">
                <div className="fieldname">
                  <div className="fieldlabel">
                     <label>First Name</label>

                    <label className="mandatory">*</label>

                     </div>
                      <div className="fieldinput">
                          <input type="text"
                               name="firstName"
                                onChange={handleChange('firstName')}
                                placeholder="Enter First Name"
                                 defaultValue={values.firsName} />

                         </div>
                     </div>
                   <div className="fieldname">
                     <div className="fieldlabel">
                        <label>Last Name</label>
                          <label className="mandatory">*</label>

                        </div>
                         <div className="fieldinput">
                             <input type="text"
                                  name="LastName"
                                   onChange={handleChange('lastName')}
                                   placeholder="Enter Last Name"
                                    defaultValue={values.lastName} />
                            </div>
                        </div>



                           <div className="fieldname">
                             <div className="filedlabel">
                                  <label>Hospital Id Number</label>
                                 </div>
                                 <div className="fieldinput">
                                     <input type="text" id="Hid"
                                        name="Hid" placeholder="Hospital ID"
                                             onChange={handleChange('Hid')}
                                                defaultValue={values.Hid} />
                                              <div className="note">
                                              <label>This is on your letter, starting with the letter 'M', eg, M1234567</label>
                                            </div>
                                          </div>
                                  </div>
                                      <div className="fieldname">
                                        <div className="fieldlabel">
                                         <label> Contact </label>
                                        </div>
                                          <div className="fieldinput">
                                          <input type="text" id="contact"
                                         name="contact"  onChange={handleChange('contact')}
                                          placeholder="Contact Details"  defaultValue={values.contact} />
                                         </div>
                                      </div>
                                      <div className="fieldname">
                                        <div className="fieldlabel">
                                             <label> E-mail </label>
                                            <label className="mandatory">*</label>
                                         </div>
                                         <div className="fieldinput">
                                        <input type="email" id="email"
                                              name="email"
                                              onChange={handleChange('email')}
                                              placeholder="     Enter e-mail"
                                              defaultValue={values.email} />
                                        </div>
                                      </div>
                                    <div className="fieldname">
                                      <div className="fieldlabel">
                                           <label> Date Of Birth</label>

                                           </div>
                                           <div className="fieldinput">
                                             <input type="date" id="date"name="date"

                                                 onChange={handleChange('date')}
                                                 placeholder="Enter date of birth"
                                                  defaultValue={values.date} />
                                              </div>
                                          </div>

                                        <div className="fieldname">
                                           <div className="fieldlabel">
                                            <label>Are you filling this form</label>
                                              <label className="mandatory">*</label>
                                            </div>
                                            <div className="fieldradio">
                                              <input type="radio" value="For self" id="Booking" name="Booking"
                                            onChange={handleChange('Booking')}
                                              defaultValue={values.Booking} />
                                            <label  for="radio1" className="radio1">For Self</label>
                                           <input type="radio" value="For Others" id="Booking" name="Booking"
                                             onChange={handleChange('Booking')}
                                              defaultValue={values.Booking}/>
                                          <label for="radio1" className="radio1">For Others</label>
                                            </div>
                                          </div>




                                                <div className="fieldname">
                                                <div className="fieldlabel">
                                                 <label> Address</label>
                                                 </div>
                                                  <div className="fieldinput">
                                                   <input type="text" id="address" name="address"
                                                      onChange={handleChange('address')}
                                                       defaultValue={values.address}
                                                        placeholder="Enter Address"  />
                                                   </div>
                                                 </div>

                                                <div className="fieldname">
                                                  <div className="fieldlabel ">
                                                   <label> Postcode </label>
                                                  <label className="mandatory">*</label>
                                                   </div>
                                                   <div className="fieldinput">

                                                     <input type="text" id="postcode" name="postcode"
                                                        onChange={handleChange('postcode')}
                                                         defaultValue={values.postcode}
                                                        placeholder=" Enter Postcode" />
                                                        </div>
                                                        </div>
                                                         <br />
                                                 </div>

                                               <div className="navbuttons">
                                                <FaChevronCircleLeft onClick={Previous} color="green" size="2em"/>
                                                <FaChevronCircleRight onClick={Continue} color="green" size="2em"/>


                                                  </div>
                                                </div>
                                              </div>




                                                );

                                            }

                                            export default Page1;
