import React from 'react';
import '../styles/App.css';

const Stepper = ({ currentStep, numberOfSteps }) => {
    const activeColor = (index) => (currentStep >= index ? '#0285e8' : '#cccccc');
    const isFinalStep = (index) => index === numberOfSteps - 1;
  
    return (
        <div style={{ display: 'flex', alignItems: 'center' , marginLeft: "-220px"}}>
            {Array.from({ length: numberOfSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: activeColor(index),
                        }}
                    />

                    {isFinalStep(index) ? null : (
                        <div
                            style={{
                                width: '50px',
                                height: '1px',
                                marginLeft: "5px",
                                marginRight: "5px",
                                backgroundColor: activeColor(index),
                            }}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
  
export default Stepper