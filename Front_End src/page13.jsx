import React from 'react';
import Logo from './logo.jsx';
import {FaChevronCircleLeft} from "react-icons/fa"
import {FaChevronCircleRight} from "react-icons/fa"
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page6.css';
import Template from './template';
const page12 = ( {prevStep, nextStep,handleChange,checkChange,values}) =>{
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
        <h3>Anxiety Scale</h3>


<div  className="container">
 <div className="fieldname">
   <div className="fieldlabel">
    <label>I feel tense or wound up</label>
      <label className="mandatory">*</label>

<div className="fieldradio">
  <input type="radio" value="Most of the time" id="feel_tense" name="feel_tense"
onChange={handleChange('feel_tense')}
  defaultValue={values.feel_tense } />
<label  for="radio1" className="radio1">Most of the time</label>

  <input type="radio" value="A lot of time" id="feel_tense" name="feel_tense"
  onChange={handleChange('feel_tense')}
  defaultValue={values.feel_tense } />
<label  for="radio1" className="radio1">A lot of time</label>

  <input type="radio" value="From time to time" id="feel_tense" name="feel_tense"
  onChange={handleChange('feel_tense')}
  defaultValue={values.feel_tense } />
  <label  for="radio1" className="radio1">From time to time</label>
    <input type="radio" value="Not at all" id="feel_tense" name="feel_tense"
    onChange={handleChange('feel_tense')}
    defaultValue={values.feel_tense } />
  <label  for="radio1" className="radio1">Not at all</label>

</div>
</div>
</div>
<div className="fieldname">
  <div className="fieldlabel">
   <label>I get a sort of frightened feeling like 'butterflies' in the stomach</label>
     <label className="mandatory">*</label>

<div className="fieldradio">
 <input type="radio" value="Ocasionally" id="butterflies" name="butterflies"
onChange={handleChange('butterflies')}
 defaultValue={values.butterflies } />
<label  for="radio1" className="radio1">Ocasionally</label>

 <input type="radio" value="Quite often" id="butterflies" name="butterflies"
 onChange={handleChange('butterflies')}
 defaultValue={values.butterflies } />
<label  for="radio1" className="radio1">Quite often</label>

 <input type="radio" value="very often" id="butterflies" name="butterflies"
 onChange={handleChange('butterflies')}
 defaultValue={values.butterflies } />
 <label  for="radio1" className="radio1">very often</label>
   <input type="radio" value="Not at all" id="butterflies" name="butterflies"
   onChange={handleChange('butterflies')}
   defaultValue={values.butterflies } />
 <label  for="radio1" className="radio1">Not at all</label>

  </div>
</div>
</div>
<div className="fieldname">
  <div className="fieldlabel">
   <label>I get a sort of frightened feeling as if something awful is about to happen</label>
     <label className="mandatory">*</label>

<div className="fieldradio">
 <input type="radio" value="very definitely and quite badly" id="frightened_feeling" name="frightened_feeling"
onChange={handleChange('frightened_feeling')}
 defaultValue={values.frightened_feeling } />
<label  for="radio1" className="radio1">very definitely and quite badly</label>

<input type="radio" value="yes,but not too badly" id="frightened_feeling" name="frightened_feeling"
  onChange={handleChange('frightened_feeling')}
  defaultValue={values.frightened_feeling } />
  <label  for="radio1" className="radio1">yes, but not too badly</label>

    <input type="radio" value="A little, but it doesn't worry me" id="frightened_feeling" name="frightened_feeling"
      onChange={handleChange('frightened_feeling')}
      defaultValue={values.frightened_feeling } />
      <label  for="radio1" className="radio1">A little, but it doesn't worry me</label>

        <input type="radio" value="Not at all" id="frightened_feeling" name="frightened_feeling"
          onChange={handleChange('frightened_feeling')}
          defaultValue={values.frightened_feeling } />
        <label  for="radio1" className="radio1">Not at all</label>
    </div>
        </div>
           </div>
           <div className="fieldname">
             <div className="fieldlabel">
              <label>I feel restless as I have to be on the move</label>
                <label className="mandatory">*</label>

           <div className="fieldradio">
            <input type="radio" value="very much indeed" id="restless_feeling" name="restless_feeling"
           onChange={handleChange('restless_feeling')}
            defaultValue={values.restless_feeling } />
           <label  for="radio1" className="radio1">very much indeed</label>

           <input type="radio" value="Quote a lot" id="restless_feeling" name="restless_feeling"
             onChange={handleChange('restless_feeling')}
             defaultValue={values.restless_feeling } />
           <label  for="radio1" className="radio1">Quote a lot</label>

           <input type="radio" value="Not verymuch" id="restless_feeling" name="restless_feeling"
               onChange={handleChange('restless_feeling')}
               defaultValue={values.restless_feeling } />
             <label  for="radio1" className="radio1">Not verymuch</label>

             <input type="radio" value="Not at all" id="restless_feeling" name="restless_feeling"
                   onChange={handleChange('restless_feeling')}
                   defaultValue={values.restless_feeling } />
                 <label  for="radio1" className="radio1">Not at all</label>
           </div>
         </div>
       </div>
       <div className="fieldname">
         <div className="fieldlabel">
          <label>Worrying thoughts go through my mind</label>
            <label className="mandatory">*</label>

       <div className="fieldradio">

         <input type="radio" value="A great deal of time" id="Worrying_feeling" name="Worrying_feeling"
       onChange={handleChange('Worrying_feeling')}
        defaultValue={values.Worrying_feeling } />
      <label  for="radio1" className="radio1">A great deal of time</label>

                 <input type="radio" value="A lot of time" id="Worrying_feeling" name="Worrying_feeling"
               onChange={handleChange('Worrying_feeling')}
                defaultValue={values.Worrying_feeling } />
              <label  for="radio1" className="radio1">A lot of time</label>

            <input type="radio" value="Free time to time , but not too often " id="Worrying_feeling" name="Worrying_feeling"
               onChange={handleChange('Worrying_feeling')}
              defaultValue={values.Worrying_feeling } />
            <label  for="radio1" className="radio1">Free time to time , but not too often</label>

            <input type="radio" value="Only Ocasionally " id="Worrying_feeling" name="Worrying_feeling"
                 onChange={handleChange('Worrying_feeling')}
                defaultValue={values.Worrying_feeling } />
              <label  for="radio1" className="radio1">Only Ocasionally</label>

       </div>
     </div>
   </div>
   <div className="fieldname">
     <div className="fieldlabel">
      <label>I get sudden feelings of panic</label>
        <label className="mandatory">*</label>

   <div className="fieldradio">

     <input type="radio" value="Very often indeed" id="sudden_feeling" name="Worrying_feeling"
   onChange={handleChange('sudden_feeling')}
    defaultValue={values.sudden_feeling } />
  <label  for="radio1" className="radio1">Very often indeed</label>

    <input type="radio" value="Quote often " id="sudden_feeling" name="Worrying_feeling"
  onChange={handleChange('sudden_feeling')}
   defaultValue={values.sudden_feeling } />
 <label  for="radio1" className="radio1">Quote often</label>

   <input type="radio" value="Not very often " id="sudden_feeling" name="Worrying_feeling"
 onChange={handleChange('sudden_feeling')}
  defaultValue={values.sudden_feeling } />
<label  for="radio1" className="radio1">Not very often</label>

  <input type="radio" value="Not at all " id="sudden_feeling" name="Worrying_feeling"
  onChange={handleChange('sudden_feeling')}
  defaultValue={values.sudden_feeling } />
<label  for="radio1" className="radio1">Not at all</label>
 </div>
   </div>
 </div>
 <div className="fieldname">
   <div className="fieldlabel">
    <label>	I can sit at ease and feel relaxed</label>
      <label className="mandatory">*</label>

 <div className="fieldradio">

   <input type="radio" value="Definitely" id="relaxed_feeling" name="relaxed_feeling"
    onChange={handleChange('relaxed_feeling')}
   defaultValue={values.relaxed_feeling } />
  <label  for="radio1" className="radio1">Definitely</label>

       <input type="radio" value="Usually" id="relaxed_feeling" name="relaxed_feeling"
        onChange={handleChange('relaxed_feeling')}
       defaultValue={values.relaxed_feeling } />

     <label  for="radio1" className="radio1">Usually</label>
        <
        input type="radio" value="Not often" id="relaxed_feeling" name="relaxed_feeling"
         onChange={handleChange('relaxed_feeling')}
        defaultValue={values.relaxed_feeling } />
      <label  for="radio1" className="radio1">Not often</label>


           <input type="radio" value="Not at all" id="relaxed_feeling" name="relaxed_feeling"
            onChange={handleChange('relaxed_feeling')}
           defaultValue={values.relaxed_feeling } />
         <label  for="radio1" className="radio1">Not at all</label>


</div>
 </div>
</div>





<div className="navbuttons">
   <button className="Back" onClick={Previous}><FaChevronCircleLeft  color="green" size="2em"/></button>
   <button className="Next" onClick={Continue}><FaChevronCircleRight  color="green" size="2em"/></button>
</div>

</div>
</div>
</div>


)
};
export default page12;
