
import React, { useEffect, useState } from "react";
//import YTVideo from "./YTVideo";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Arti" },
  { name: "rahul" }
];

const Chk =({ prevStep, nextStep, values }) => {
  const Continue = e =>{
    e.preventDefault();
    nextStep();
  };
  const Previous = e =>{
    e.preventDefault();
       prevStep();
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);

  }, []);
   const checkChange = (e) => {
     const { name, checked } = e.target;

    // let checkName=name;
    let check=e.target.checked;
      console.log("target",e.target.checked,check)
    if(check===true)
    console.log("in submit", e.target.value  )
    else{
      console.log("not checked")
    }



    // if (name === "allSelect") {
    //   let tempUser = users.map((user) => {
    //     return { ...user, isChecked: checked };
    //   });
    //   setUsers(tempUser);
  //  } else {
      let tempUser = users.map((user) =>

        user.name === name ? { ...user, isChecked: checked } : user

      );

      setUsers(tempUser);

  };


  return (

    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Users</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"

            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            // checked={!users.some((user) => user?.isChecked !== true)}
            // onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}

              value={user.name}
              checked={user?.isChecked || false}
               onChange={checkChange}

            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>

        ))}
        <div>
               <button onClick={Previous}>Back</button>
                 <button onClick={Continue}>Next</button>


     </div>

      </form>
      {/* <YTVideo embedId="mGV9r0wgCrI" /> */}
    </div>
  );

}

export default Chk;
