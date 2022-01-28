import React from "react";
//import Template from './template.jsx'
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { saveAs } from "file-saver";
const Confirmation = ({
  prevStep,
  nextStep,
  values,
  createAndDownloadPdf,
  name,
  checkValues,
}) => {
  console.log(checkValues);
  const {
    firstName,
    lastName,
    contact,
    Hid,
    date,
    email,
    address,
    Booking,
    postcode,
    Yob,
    Booking2,
    Gender,
    comments,
    Scans,
    BloodTests,
    NerveTests,
    X_rays,
    pain_start,
    describe_pain,
    majorillnesses,
    presentillnesses,
    mentalservices,
    injections,
    Psychology,
    Physiotherapy,
    tens,
    Acupuncture,
    Chiropractor,
    othertreatments,
    detailtreatments,
    smoke,
    alcohol,
    physicalactivity,
    typicalday,
    often_pain,
    no_pain,
    Timeofpainbest,
    Timeofpainworst,
    increasepain,
    decreasepain,
    relievepain,
    Trouble_sleep,
    Medication_Sleep,
    Awake_pain,
    check_1,
    Medication_M1,
    Medication_D1,
    Medication_F1,
    Medication_M2,
    Medication_D2,
    Medication_F2,
    Medication_M3,
    Medication_D3,
    Medication_F3,
    Alone,
    Martual_status,
    Number_children,
    Number_children_home,
    Current_situtaion,
    job_title,
    // state_benfits,
    legal_actions,
    understand_pain,
    Management_service,
    goals,
    other_comments,
  } = values;

  // const Continue = e => {
  //   e.preventDefault();
  //   nextStep();
  // }

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const submit = (values) => {
    axios
      .post("/create-pdf", values)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  let data = {
    Fname: values.firstName,
    LName: values.lastName,
    dob: values.date,
    Email: values.email,
  };
  console.log("data", data);

  return (
    <div>
      <Container component="main" maxWidth="xxx" direction="rows">
        <div>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hospital Id" secondary={Hid} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" secondary={contact} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date of Birth" secondary={date} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Address" secondary={address} />
            </ListItem>
            <ListItem>
              <ListItemText primary="are you booking for" secondary={Booking} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Postal Code" secondary={postcode} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year of Pain Began" secondary={Yob} />
            </ListItem>
            <ListItem>
              <ListItemText primary="How did pain start?" />
            </ListItem>
            <ListItem>
              <ListItemText primary="" secondary={pain_start[0]} />
              <ListItemText primary="" secondary={pain_start[1]} />
              <ListItemText primary="" secondary={pain_start[2]} />
              <ListItemText primary="" secondary={pain_start[3]} />
              <ListItemText primary="" secondary={pain_start[4]} />
              <ListItemText primary="" secondary={pain_start[5]} />
              <ListItemText primary="" secondary={pain_start[6]} />
              <ListItemText primary="" secondary={pain_start[7]} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Was the onset of pain"
                secondary={Booking2}
              />
            </ListItem>

            <ListItem>
              <ListItemText primary="sex" secondary={Gender} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Please indicate what words describe your pain now " />
            </ListItem>
            <ListItem>
              <ListItemText primary="" secondary={describe_pain[0]} />
              <ListItemText primary="" secondary={describe_pain[1]} />
              <ListItemText primary="" secondary={describe_pain[2]} />
              <ListItemText primary="" secondary={describe_pain[3]} />
              <ListItemText primary="" secondary={describe_pain[4]} />
              <ListItemText primary="" secondary={describe_pain[5]} />
              <ListItemText primary="" secondary={describe_pain[6]} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Any Comments You wish to make"
                secondary={comments}
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="How often do you have pain?"
                secondary={often_pain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Are there times during which you experience no pain?"
                secondary={no_pain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Time of day pain is best"
                secondary={Timeofpainbest}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Time of day pain is worst"
                secondary={Timeofpainworst}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What causes an increase in your pain?"
                secondary={increasepain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What causes an decrease in your pain?"
                secondary={decreasepain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What can you do to help relieve the pain?"
                secondary={relievepain}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Does pain affect your sleep?" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Trouble falling asleep"
                secondary={Trouble_sleep}
              />
              <ListItemText
                primary="Medication needed to fall asleep"
                secondary={Medication_Sleep}
              />
              <ListItemText primary="Awakened by pain" secondary={Awake_pain} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Please tick if you have seen any of the following people regarding your pain?" />
            </ListItem>
            <ListItem>
              <ListItemText primary="" secondary={check_1[0]} />
              <ListItemText primary="" secondary={check_1[1]} />
              <ListItemText primary="" secondary={check_1[2]} />
              <ListItemText primary="" secondary={check_1[3]} />
              <ListItemText primary="" secondary={check_1[4]} />
              <ListItemText primary="" secondary={check_1[5]} />
              <ListItemText primary="" secondary={check_1[6]} />
              <ListItemText primary="" secondary={check_1[7]} />
              <ListItemText primary="" secondary={check_1[8]} />
              <ListItemText primary="" secondary={check_1[9]} />
              <ListItemText primary="" secondary={check_1[10]} />
              <ListItemText primary="" secondary={check_1[11]} />
              <ListItemText primary="" secondary={check_1[12]} />
              <ListItemText primary="" secondary={check_1[13]} />
              <ListItemText primary="" secondary={check_1[14]} />
              <ListItemText primary="" secondary={check_1[15]} />
              <ListItemText primary="" secondary={check_1[16]} />
              <ListItemText primary="" secondary={check_1[17]} />
              <ListItemText primary="" secondary={check_1[18]} />
              <ListItemText primary="" secondary={check_1[19]} />
              <ListItemText primary="" secondary={check_1[20]} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Please give details of any tests or investigation you have had for the pain listing the health professionals and hospitals if possible" />
            </ListItem>

            <ListItem>
              <ListItemText primary="scans" secondary={Scans} />
              <ListItemText primary="BloodTests" secondary={BloodTests} />
              <ListItemText primary="NerveTests" secondary={NerveTests} />
              <ListItemText primary="X-Rays" secondary={X_rays} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Please give the details of any major illnesses including the dates if possible"
                secondary={majorillnesses}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Please give the details of any other present illnesses"
                secondary={presentillnesses}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Have you ever received any help from mental health services?"
                secondary={mentalservices}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Please give details of any treatment you may have had, including details and dates where applicable" />
            </ListItem>

            <ListItem>
              <ListItemText primary="Injections" secondary={injections} />
              <ListItemText primary="Psychology" secondary={Psychology} />
              <ListItemText primary="Physiotherapy" secondary={Physiotherapy} />
              <ListItemText primary="tens" secondary={tens} />
              <ListItemText primary="Acupuncture" secondary={Acupuncture} />
              <ListItemText primary="Chiropractor" secondary={Chiropractor} />
              <ListItemText
                primary="othertreatments"
                secondary={othertreatments}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Details of treatment including dates if possible"
                secondary={detailtreatments}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Do you smoke" secondary={smoke} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Do you drink alcohol"
                secondary={alcohol}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What does your pain stop you from doing (physical activity)"
                secondary={physicalactivity}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Please give detail of how you spend your typical day"
                secondary={typicalday}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 1 - Name"
                secondary={Medication_M1}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 1 - Dose"
                secondary={Medication_D1}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 1 - Frequency"
                secondary={Medication_F1}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 2 - Name"
                secondary={Medication_M2}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 2 - Dose"
                secondary={Medication_D2}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 2 - Frequency"
                secondary={Medication_F2}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 3 - Name"
                secondary={Medication_M3}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 3 - Dose"
                secondary={Medication_D3}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Medication 3 - Frequency"
                secondary={Medication_F3}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Do you live alone" secondary={Alone} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Marital status"
                secondary={Martual_status}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Number of children"
                secondary={Number_children}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Number of children at home"
                secondary={Number_children_home}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Current situation"
                secondary={Current_situtaion}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="When did you stop working?"
                secondary={job_title}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Are you receiving or in the process of claiming any state benefits?" />
            </ListItem>
            {/* <ListItem>
                         <ListItemText primary="" secondary={state_benfits[0]}/>
                         <ListItemText primary="" secondary={state_benfits[1]}/>
                         <ListItemText primary="" secondary={state_benfits[2]}/>
                         <ListItemText primary="" secondary={state_benfits[3]}/>
                         <ListItemText primary="" secondary={state_benfits[4]}/>
                         <ListItemText primary="" secondary={state_benfits[5]}/>
                         <ListItemText primary="" secondary={state_benfits[6]}/>
                         <ListItemText primary="" secondary={state_benfits[7]}/>
                         <ListItemText primary="" secondary={state_benfits[8]}/>
                         <ListItemText primary="" secondary={state_benfits[9]}/>
                         <ListItemText primary="" secondary={state_benfits[10]}/>
                      </ListItem> */}

            <ListItem>
              <ListItemText
                primary="Are there any legal actions being taken with regard to your pain?"
                secondary={legal_actions}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What do you understand to be the cause of your pain?"
                secondary={understand_pain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What would you like to get from attending the Pain Management Service?"
                secondary={Management_service}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What are your personal expectations and goals?"
                secondary={goals}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Do you have any other comments?"
                secondary={other_comments}
              />
            </ListItem>
          </List>

          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                variant="contained"
                color="burlywood"
              >
                Previous
              </Button>
            </Grid>

            <div>
              <button
                className="Submit"
                onClick={() => {
                  submit(values);
                }}
                color="lightgray"
              >
                Submit
              </button>
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Confirmation;
