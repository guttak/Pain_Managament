import React from 'react';
import './checbox.css'
const checkbox = () =>{
  return(
    <div className="CPMT">
    <div className="feildname">
         <div>
          <label>How did the pain start?</label>
          </div>

            <div className="checkinput">
               <div className="checkbox-list">

                  <label className="check-item">
                       <input type="checkbox" name="pain_start"  value="Accident at work" id="pain_start"/>
                         <span>Accident at work</span>
                  </label>
                   <label className="check-item">
                    <input type="checkbox" name="pain_start"  value="Accident at home" id="pain_start"/>
                    <span>Accident at home</span>
                 </label>
                 <label className="check-item">
                  <input type="checkbox" name="pain_start"  value="Following illness" id="pain_start"/>
                  <span>Following illness</span>
                </label>
                <label className="check-item">
                 <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"/>
                 <span>Following surgery</span>
               </label>
               <label className="check-item">
                <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"/>
                <span>Road Traffic Accident</span>
              </label>
              <label className="check-item">
               <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"/>
               <span>Pain just began</span>
             </label>
             <label className="check-item">
              <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"/>
              <span>Road Traffic Accident</span>
            </label>
            <label className="check-item">
             <input type="checkbox" name="pain_start"  value="Road Traffic Accident" id="pain_start"/>
             <span>Others</span>
           </label>





    </div>

</div>
</div>
</div>




  )
}
export default checkbox;
