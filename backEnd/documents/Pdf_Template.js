module.exports = ({
  name,
  firstName,
  lastName,
  Hid,
  contact,
  Booking,
  address,
  date,
  postcode,
  email,
  Yob,
  check,
  Booking2,
  Gender,
  comments,
  pain_start,
  describe_pain,
  often_pain,
  Timeofpainbest,
  Timeofpainworst,
  increasepain,
  decreasepain,
  no_pain,
  relievepain,
  Trouble_sleep,
  Medication_Sleep,
  Awake_pain,
  comments4,
  check_1,
  Scans,
  BloodTests,
  NerveTests,
  Medication_M1,
  Medication_D1,
  Medication_F1,
  Medication_M2,
  Medication_D2,
  Medication_F2,
  Medication_M3,
  Medication_D3,
  Medication_F3,
  Reasonfortaking,
}) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 60px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: rgb(146 91 10);
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: left;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             text-align:right;
             border-bottom: 2px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                         <td valign="top">
				<div style="padding:10px 0 0;">
        <img src= "logo.png" alt="No image"
             title="image" style="max-width:300px;width:268px;
             max-width:268px;height:68px;max-height:68px;">	</td>
                         <td class ="container"

                         <h2>Chronic Pain Clinic Survey</h2>
                              <p>Please complete  survey below to help us collect the required information before your chronic pain clinc appointment</p>
                                 <h4>Thank you!</h4>


                              </td>

                           <td>
                          <td>
                               Date:${`${today.getDate()}.${
                                 today.getMonth() + 1
                               }.${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Patient name: ${firstName} ${lastName}
                            </td>
                            <td>
                               Hospital Id: ${Hid}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Patient Details:</td>
                   <td>     </td>
                </tr>
                <tr class="item">
                   <td>FirstName:${firstName} </td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td>LastName: ${lastName}</td>
                   <td></td>
                </tr>
                <tr class="item">
                   <td>Contact: </td>
                   <td>${contact}</td>
                </tr>
                <tr class="item">
                   <td>Are you filling this form :</td>
                   <td>${Booking}</td>

                </tr>
                <tr class="item">
                   <td>Address: </td>
                   <td>${address}</td>

                </tr>
                <tr class="item">
                   <td>Postcode:</td>
                   <td>${postcode}</td>

                </tr>
                <tr class="item">
                   <td>Email:</td>
                   <td>${email}</td>

                </tr>
                <tr class="item">
                   <td>Date of Birth:</td>
                   <td>${date}</td>

                </tr>
                <tr class="item">
                   <td>Year Pain Began:</td>
                   <td>${Yob}</td>

                </tr>
                <tr class="item">
                   <td>How did Pain Start:</td>
                   <td>${pain_start}</td>


                </tr>
                <tr class="item">
                   <td>was the onset of pain:</td>
                   <td>${Booking2}</td>

                </tr>
                <tr class="item">
                   <td>Sex:</td>
                   <td>${Gender}</td>

                </tr>
                <tr class="item">
                   <td>Please indicate what words describe your pain now</td>
                   <td>${describe_pain}</td>

                </tr>
                <tr class="item">
                   <td>Any comments you wish to make:</td>
                   <td>${comments}</td>

                </tr>
                <tr class="item">
                   <td>How often do you have pain?:</td>
                   <td>${often_pain}</td>

                </tr>
                <tr class="item">
                   <td>Are there times during which you experience no pain?:</td>
                   <td>${no_pain}</td>

                </tr>
                <tr class="item">
                   <td>Time of day pain is best:</td>
                   <td>${Timeofpainbest}</td>

                </tr>
                <tr class="item">
                   <td>Time of day pain is worst:</td>
                   <td>${Timeofpainworst}</td>

                </tr>
                <tr class="item">
                   <td>What causes an increase in your pain?:</td>
                   <td>${increasepain}</td>

                </tr>

                  <tr class="item">
                   <td>What can you do to help relieve the pain?:</td>
                   <td>${relievepain}</td>

                </tr>
                <tr class="item">
                 <td>What can you do to help relieve the pain?:</td>
                 <td>${relievepain}</td>

              </tr>
              <tr class="item">
               <td>Does pain affect your sleep?</td>
               </tr>
               <tr>
               <td>Trouble falling asleep</td>

               <td>${Trouble_sleep}</td>
               </tr>
               <tr>
               <td>Medication needed to fall asleep</td>
               <td>${Medication_Sleep}</td>
               </tr>
               <tr>
               <td>	Awakened by pain</td>
               <td>${Awake_pain}</td>
               </tr>
               <tr>
               <td>Any comments you wish to make:</td>
               <td>${comments4}</td>
                </tr>
                <tr>
                <td>Please tick if you have seen any of the following people regarding your pain?:</td>
                <td>${check_1}</td>
                 </tr>
                 <tr class="item">
                  <td>Please give details of any tests or investigations you have had for the pain listing the health professinals and hospitals if possible</td>
                  </tr>
                  <tr>
                  <td>scans</td>

                  <td>${Scans}</td>
                  </tr>
                  <tr>
                  <td>Blood Tests</td>
                  <td>${BloodTests}</td>
                  </tr>
                  <tr>
                  <td>Nerve Tests</td>
                  <td>${NerveTests}</td>
                  </tr>
                  <tr>
                  <tr>
                  <td>Regular Medication</td>
                  </tr>
                  <tr>
                  <td>Medication 1 - Name</td>
                  <td>${Medication_M1}</td>
                  </tr>
                  <tr>
                  <td>Medication 1 - Dose</td>
                  <td>${Medication_D1}</td>
                  </tr>
                  <tr>
                  <td>Medication 1 - Frequency</td>
                  <td>${Medication_F1}</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                  <td>Medication 2 - Name</td>
                  <td>${Medication_M2}</td>
                  </tr>
                  <tr>
                  <td>Medication 2 - Dose</td>
                  <td>${Medication_D2}</td>
                  </tr>
                  <tr>
                  <td>Medication2 - Frequency</td>
                  <td>${Medication_F2}</td>
                  </tr>
                  <tr>
                  <td>Medication 3 - Name</td>
                  <td>${Medication_M3}</td>
                  </tr>
                  <tr>
                  <td>Medication 3 - Dose</td>
                  <td>${Medication_D3}</td>
                  </tr>
                  <tr>
                  <td>Medication  3 - Frequency</td>
                  <td>${Medication_F3}</td>
                  </tr>
                  <tr>
                  <tr>
                  <td>Medication name & reason for taking</td>
                  <td>${Reasonfortaking}</td>
                   </tr>



            </tr>
             </table>
             <br />

          </div>
       </body>
    </html>
    `;
};
