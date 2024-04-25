import Reg_title from "./Reg_title"
import React, {useState} from "react"
import {useForm} from "react-hook-form"

const Registration_mail = ({ data, info }) => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const { register, handleSubmit, formState: {errors}  } = useForm()

    const phone = data.phoneNumber || "";
    const region_code = data.countryCode || "";
    const phone_number = `${region_code} ` + `${phone}`;
    const code = data.verf_code || "";

    const [passwordStrength, setPasswordStrength] = useState("")

    const evaluatePasswordStrength = (value) => {
        if (value.length === 0) {
            setPasswordStrength("");
        } else if (value.length < 7) {
            setPasswordStrength("Weak password");
        } else {
            setPasswordStrength("✓ Good password");
        }
    };

    const onSubmit = (data) => {
        info(data)
    };

    return (
        <div style={{ display: "block", position: "relative", 
                justifyContent: "center", alignItems: "center", width: "30%", 
                height: "50%", backgroundColor: "white", marginTop: "5px" }}>

            <Reg_title/>

            <div style={{display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)",
                    height: "100%", width: "100%", borderRadius: "9px", marginTop: "20px", flexDirection: "column"}}>

                <p style={{marginLeft: "4%", marginTop: "3%", marginBottom: "1%",textAlign: "left"}}>{phone_number}</p>

                <div style={{display:"flex", marginLeft: "4%", marginBottom: "2px",
                        position: "relative", width: "91%", justifyContent: "space-between",
                        height: "20px", alignItems: "center", marginBottom: "3%"}}>

                    <p style={{fontSize: "14px", color: "rgba(54, 54, 54, 0.8)"}}>
                        ✓ Number is confirmed.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)", 
                        borderRadius: "9px", marginTop: "20px", 
                        flexDirection: "column"}}>
                    
                    <p style={{ margin: "4%", textAlign: "left" }}>
                        Enter your email
                    </p>

                    <input {...register("mail", {
                            required: "Email is required",
                            validate: (value) => {
                                if (!value.includes("@email.com")) {
                                    return "Email must include '@email.com'!"
                                }
                                return true
                            }
                        })} 
                        name="mail" value={mail}
                        style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                        borderTop: "none", borderInline: "none", fontSize: "16px", 
                        width: "91%", marginLeft: "4%" }}
                        onChange={(e) => setMail(e.target.value)}
                    />

                    {errors.mail && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "2px",
                                marginBottom: "12px",
                                marginLeft: "4%"
                            }}>
                                {errors.mail.message}
                        </div>
                    )}

    {/* ------------  Password  ------------ */}

                    <p style={{ margin: "4%", textAlign: "left" }}>
                        Set a password
                    </p>

                    <input {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 7,
                            message: "Password must have at least 10 digits!"
                        }
                    })} 
                        name="password" value={password}
                        style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                            borderTop: "none", borderInline: "none", fontSize: "16px", 
                            width: "91%", marginLeft: "4%", marginBottom: "4%" }}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            evaluatePasswordStrength(e.target.value);
                        }}
                    />

                    <div style={{
                            color: passwordStrength === "Weak password" ? "rgba(164, 209, 0, 0.8)" : "green",
                            textAlign: "left",
                            fontSize: "14px",
                            marginTop: "-12px",
                            marginBottom: "12px",
                            marginLeft: "4%"
                        }}>
                            {passwordStrength && `${passwordStrength}`}
                    </div>

                    {errors.password && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-17px",
                                marginBottom: "12px",
                                marginLeft: "4%"
                            }}>
                                {errors.password.message}
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", marginTop: "25px" }}>
                    <button style={{ border: "transparent", 
                        width: "30%", height: "45px", fontSize: "17px", 
                        borderRadius: "6px", backgroundColor: "rgba(0, 80, 255, 0.8)", 
                        cursor: "pointer", color: "white" }} type="submit">
                            Register Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Registration_mail