import { useState } from 'react'
import './styles/App.css'
import Registration from './components/Registration'
import Registration_confirmation_code from './components/Registration_confirmation_code'
import Registration_mail from './components/Registration_mail'
import Stepper from './components/Stepper'
import Profile_info_1 from './components/Profile_info_1'
import Profile_info_2 from './components/Profile_info_2'
import Profile_info_3 from './components/Profile_info_3'
import The_end from './components/The_end'

function App() {

  const [data, setData] = useState({});
  const [registration, setRegistration] = useState(false)
  const [step, setStep] = useState(0);

  const DataOnSubmit = (newData) => {
    setData({ ...data, ...newData });
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    if(!registration) {
      switch (step) {
        case 0:
          return <Registration info={DataOnSubmit} />;
        case 1:
          return <Registration_confirmation_code data={data} info={DataOnSubmit} />;
        case 2:
          return <Registration_mail data={data} info={(data) => {DataOnSubmit(data);
          setStep(0); setRegistration(true)}} />
        default:
          return null;
      }
    } else {
      switch (step) {
        case 0:
          return <Profile_info_1 data={data} info={DataOnSubmit} />;
        case 1:
          return <Profile_info_2 data={data} info={DataOnSubmit} />;
        case 2:
          return <Profile_info_3 data={data} info={DataOnSubmit}/>;
        case 3:
          return <The_end/>
        default:
          return null;
      }
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", 
      width: "100vw", flexDirection: "column"}}>

      <div style={{display: "flex", flexDirection: "row", 
            justifyContent: "space-between", width: "90%", padding: "15px"}}>
            
        <div style={{display: "flex"}}>
          <img src="https://cdn.vectorstock.com/i/preview-1x/65/97/letter-c-in-the-gothic-style-old-alphabet-vector-41276597.jpg"
            style={{
              height: "35px",
              marginBlockStart: "6px",
              marginBlockEnd: "10px",
          }}/>

          <h1 style={{
                fontSize: "18px", 
                color: "black", 
                letterSpacing: "1.2px",
              }}>
                COMPANY NAME
          </h1>

        </div>

        <Stepper currentStep={step} numberOfSteps={3}/>

        <img src="https://static.thenounproject.com/png/1202535-200.png"
          style={{ height: "25px", marginBlockStart: "12px", marginBlockEnd: "10px"}}/>

      </div>
        
      {renderStep()}
    </div>
  )
}

export default App
