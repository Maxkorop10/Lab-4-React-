import Reg_title from "./Reg_title"
import React, {useState} from "react"
import {useForm} from "react-hook-form"
import Send_again from "../assets/send_again.png"

const Registration_confirmation_code = ({ data, info }) => {
    
    const [verf_code, setVerf_code] = useState("")
    const { register, handleSubmit, formState: {errors}  } = useForm()

    const phone = data.phoneNumber || "";
    const region_code = data.countryCode || "";
    const phone_number = `${region_code} ` + `${phone}`;

    const onSubmit = (data) => {
        info(data)
    }

    return (
        <div style={{display: "block", position: "relative", 
            justifyContent: "center", alignItems: "center", width: "30%", 
            height: "50%", backgroundColor: "white", marginTop: "5px"}}>

            <Reg_title/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)",
                    height: "100%", width: "100%", borderRadius: "9px", marginTop: "20px", flexDirection: "column"}}>

                    <p style={{marginLeft: "4%", marginTop: "3%", marginBottom: "1%",textAlign: "left"}}>{phone_number}</p>

                    <div style={{display:"flex", marginLeft: "4%", marginBottom: "2px",
                        position: "relative", width: "91%", justifyContent: "space-between",
                        height: "20px", alignItems: "center", marginBottom: "3%"}}>

                        <p style={{fontSize: "14px", color: "rgba(54, 54, 54, 0.8)"}}>
                            Number is not confirmed yet.
                        </p>

                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src="https://static-00.iconduck.com/assets.00/pencil-icon-2048x2048-b2kyfub6.png"
                                style={{height: "18px", cursor: "pointer"}}/>
                        </div>
                    </div>
                </div>

                <h3 style={{fontSize: "16px", fontWeight: "normal",
                        textAlign: "left", marginTop: "25px"}}>
                            Confirmation code
                </h3>

                <div style={{marginTop: "20px", display: "flex", justifyContent: "left"}}>
                    
                    <input {...register("verf_code", {
                        required: "Verification code is required",
                        minLength: {
                            value: 4,
                            message: "Confirmation code must have at least 4 digits!"
                        }
                    })} 
                        name="verf_code" value={verf_code} onChange={(e) => setVerf_code(e.target.value)}
                        maxLength="4" placeholder="––––"
                        style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", 
                                fontSize: "16px", width: "40%", 
                                fontSize: "18px", letterSpacing: "4px",
                        }}

                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) { event.preventDefault() }
                        }}
                    />

                    <img style={{height: "20px", marginLeft: "7%", cursor: "pointer"}} src={Send_again}/>
                </div>

                {errors.verf_code && (
                    <div 
                        style={{
                            color: "red",
                            textAlign: "left",
                            fontSize: "14px",
                            marginTop: "7px",
                            marginBottom: "12px"
                        }}>
                            {errors.verf_code.message}
                    </div>
                )}

                <p style={{fontSize: "14px", color: "rgba(54, 54, 54, 0.8)",
                    textAlign: "left"}}>
                    Confirm your phone number with code from sms<br></br>
                    message.
                </p>

                <div style={{display: "flex", textAlign: "center", marginTop: "25px"}}>
                    <button style={{ border: "1px solid rgba(151, 151, 151, 0.8)", 
                            width: "25%", height: "45px", fontSize: "17px", 
                            borderRadius: "6px", backgroundColor: "transparent", 
                            cursor: "pointer" }} type="submit">
                                Confirm
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Registration_confirmation_code