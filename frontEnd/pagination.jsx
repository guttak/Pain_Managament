import React, { Component } from 'react'
//import axios from 'axios';
//import { saveAs } from 'file-saver';
//  import Template from './template.jsx'
import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
import Page3 from './page3.jsx'
//import Dictaphone from './Dictaphone.js'
import Page4 from './page4.jsx'
import Page5 from './page5.jsx'
import Page6  from './page6.jsx'
import Page7  from './page7.jsx'
import Page8  from './page8.jsx'
import Page9  from './page9.jsx'
import Page10  from './page10.jsx'
import Page11  from './page11.jsx'
import Page12  from './page12.jsx'
import Page13 from './page13.jsx'
//import Chk from './checkData.jsx'
import Confirmation from './confirmation.jsx'
class pagination extends Component {
 state = {
   firstName:'',
   lastName:'',
  placeholder: '',
   checked:'',
   step: 1,
   name:'',
   user:'',
   HospitalId:'',
   contactDetails:'',
   email:'',
   Booking:'',
   address:'',
  postcode:'',
    Ypb:'',
  Wastheonsetofpain:'',
  Gender: '',
  startDate: '',
  Booking5:'',
  checkNames:'',
  often_pain:'',
  no_pain:'',
  Timeofpainbest:'',
  Timeofpainworst:'',
  increasepain:'',
  Trouble_sleep:'',
  Medication_Sleep:'',
  Awake_pain:'',
  comments4:'',
  speechtotext:'',
  comments:'',
  Reasonfortaking:'',
  Scans:'',
  BloodTests:'',
  NerveTests:'',
  X_rays:'',
  majorillnesses:'',
  mentalservices:'',
  injections:'',
  Psychology:'',
  Physiotherapy:'',
  tens:'',
  Acupuncture:'',
  Chiropractor:'',
  othertreatments:'',
  detailtreatments:'',
  relievepain:'',


  smoke:'',
  alcohol:'',
  physicalactivity:'',
  typicalday:'',
Medication_M1:'',
Medication_D1:'',
Medication_F1:'',
Medication_M2:'',
Medication_D2:'',
Medication_F2:'',
Medication_M3:'',
Medication_D3:'',
Medication_F3:'',
Alone:'',
Martual_status:'',
Number_children:'',
Number_children_home:'',
Current_situtaion:'',
job_title:'',
legal_actions:'',
understand_pain:'',
Management_service:'',
goals:'',
other_comments:'',
state_benfits:[],
  check_1:[],
  pain_start:[],
  describe_pain:[]
}






prevStep = () => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
}

// proceed to the next step
nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1,
      }

);}



  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value }

                    );

  }

  checkChange = (input) => e =>{
  if(e.target.checked=== true){
      this.setState({

    pain_start:[
        ...this.state.pain_start,
           e.target.value

    ],
    describe_pain:[
        ...this.state.describe_pain,
           e.target.value

    ],
    check_1: [
        ...this.state.check_1,
            e.target.value,


    ],
    state_benfits: [
        ...this.state.state_benfits,
            e.target.value,


    ],
})

  }
  else {
     //remove from array
     this.setState({
        check_1  : this.state.check_1.filter(function(val) {return val!==e.target.value}),
        pain_start: this.state.pain_start.filter(function(val){return val!==e.target.value}),
        describe_pain: this.state.describe_pain.filter(function(val){return val!==e.target.value}),
        state_benfits : this.state.state_benfits.filter(function(val){return val!==e.target.value})
     })
//     painChange = (input) => e =>{
//  if(e.target.checked=== true){
//          this.setState({
//        pain_start: [
//            ...this.state.pain_start,
//            e.target.value,
//       ],
//     })
//   }
//
//      else {
//         //remove from array
//         this.setState({
//          pain_start: this.state.pain_start.filter(function(val) {return val!==e.target.value}),
//   })
// }
// }
}
}

   render() {

  const { step } = this.state;

     const {name, firstName, lastName,Hid, email, date, contact,Dob,address,Booking,postcode,Yob,Booking2,Gender,checkNames,startDate,Booking5,speechtotext,comments,Scans, BloodTests,NerveTests,  X_rays,check_1,  pain_start,describe_pain,majorillnesses,injections,
          Psychology, Physiotherapy, tens,   Acupuncture, Chiropractor,othertreatments,detailtreatments,smoke, alcohol,physicalactivity,typicalday,often_pain,no_pain,Timeofpainbest,Timeofpainworst,increasepain,decreasepain,relievepain,Trouble_sleep,Medication_Sleep,
         Awake_pain,comments4,Medication_M1,Medication_D1,Medication_F1,Medication_M2,Medication_D2,Medication_F2,Medication_M3,Medication_D3,Medication_F3,Reasonfortaking,Alone,Martual_status,Number_children,Number_children_home,Current_situtaion,job_title,legal_actions,
       understand_pain,Management_service,goals,other_comments} = this.state;
    const values = { name, firstName, lastName,Hid,contact, email, date, Dob,address,Booking,postcode,Yob,Booking2,Gender,checkNames,startDate,Booking5,speechtotext,comments,Scans, Reasonfortaking,BloodTests,NerveTests,  X_rays,check_1, pain_start,describe_pain,
                       majorillnesses,injections,Psychology, Physiotherapy, tens, Acupuncture, Chiropractor,othertreatments,detailtreatments,smoke,alcohol,physicalactivity,typicalday,often_pain,no_pain,Timeofpainbest,Timeofpainworst,increasepain,decreasepain,
                       relievepain,Trouble_sleep,Medication_Sleep,Awake_pain,comments4,Medication_M1,Medication_D1,Medication_F1,Medication_M2,Medication_D2,Medication_F2,Medication_M3,Medication_D3,Medication_F3,Alone,Martual_status,Number_children,Number_children_home
                     ,Current_situtaion,job_title,legal_actions,understand_pain,Management_service,goals,other_comments}
    let firstname = values.email

     console.log("email",firstname)

  switch(step){
      case 1:
        return(

          <div>
          <Page1
         nextStep={this.nextStep }
         handleChange={this.handleChange}
         checkChange={ this.checkChange }
         values={ values }

     />
      </div>

 );
   case 2:
   return(
     <Page2
           prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          handleChange={ this.handleChange }
          checkChange={ this.checkChange }
         values={ values }
        />
    );
    case 3:
    return(
      <Page3
            prevStep={ this.prevStep }
           nextStep={ this.nextStep }
           handleChange={ this.handleChange }
          values={ values }
         />
     );
      case 4:
        return(
      <Page4
          prevStep={ this.prevStep }
             nextStep={ this.nextStep }
             handleChange={ this.handleChange }
              checkChange={ this.checkChange }

            values={ values }
           />
         );
         case 5:
           return(
         <Page5
             prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                checkChange={ this.checkChange }
               values={ values }
              />
            );
            case 6:
              return(
            <Page6
                prevStep={ this.prevStep }
                   nextStep={ this.nextStep }
                   handleChange={ this.handleChange }
                  values={ values }
                 />
               );

               case 7:
                 return(
               <Page7
                   prevStep={ this.prevStep }
                      nextStep={ this.nextStep }
                      handleChange={ this.handleChange }
                     values={ values }
                    />
                  );
                  case 8:
                    return(
                  <Page8
                      prevStep={ this.prevStep }
                         nextStep={ this.nextStep }
                         handleChange={ this.handleChange }
                        values={ values }
                       />
                     );
                     case 9:
                       return(
                     <Page9
                         prevStep={ this.prevStep }
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                           values={ values }
                          />
                        );
                        case 10:
                          return(
                        <Page10
                            prevStep={ this.prevStep }
                               nextStep={ this.nextStep }
                               handleChange={ this.handleChange }
                              values={ values }
                             />
                           );
                            case 11:
                             return(
                           <Page11
                               prevStep={ this.prevStep }
                                  nextStep={ this.nextStep }
                                  handleChange={ this.handleChange }
                                   checkChange={ this.checkChange }
                                 values={ values }
                                />
                              );
                              case 12:
                               return(
                             <Page12
                                 prevStep={ this.prevStep }
                                    nextStep={ this.nextStep }
                                    handleChange={ this.handleChange }
                                     checkChange={ this.checkChange }
                                   values={ values }
                                  />
                                );
                                case 13:
                                 return(
                               <Page13
                                   prevStep={ this.prevStep }
                                      nextStep={ this.nextStep }
                                      handleChange={ this.handleChange }
                                       checkChange={ this.checkChange }
                                     values={ values }
                                    />
                                  );
         case 14:
             return(
           <Confirmation
               prevStep={ this.prevStep }
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                 values={ values }
                 checkValues={this.state.check_1}
                />


      );
   default:
 // nothing


  }
 }

 }
 export default pagination;
