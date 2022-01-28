import React  from 'react'
const template= (props) => {

// console.log("in template", props.Fname)


    return(
    <div>
    <strong>Pain Details</strong>
     <h5>Chronic Pain Clinic Survey for {props.name}</h5>
    </div>
  );


}

export default template;
