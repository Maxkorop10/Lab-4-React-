import Reg_title from "./Reg_title";
import Privacy from "./Privacy"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Countries from "../assets/countries.json";

const Registration = ({info}) => {

    const [phone, setPhone] = useState("")

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm();

    const countries = Countries.data || [];

    const onSubmit = (data) => {
        info(data)
    };

    return (
        <div style={{ display: "block", position: "relative", 
                justifyContent: "center", alignItems: "center", width: "30%", 
                height: "50%", backgroundColor: "white", marginTop: "5px" }}>

            <Reg_title/>

            <Privacy />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)", 
                        borderRadius: "9px", marginTop: "20px", 
                        flexDirection: "column" }}>

                    <p style={{ margin: "4%", textAlign: "left" }}>
                        Enter your phone number
                    </p>

                    <div style={{ display: "flex", marginTop: "20px", marginLeft: "4%", 
                        marginBottom: "20px", position: "relative" }}>

                        <select {...register("countryCode", {
                            required: true
                        })}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", 
                                marginRight: "20px", marginBlockStart: "1px", 
                                fontSize: "16px", width: "15%" }}>

                            <option value=""></option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.dial_code}>
                                    {country.dial_code}
                                </option>
                            ))}
                        </select>

                        <input {...register("phoneNumber", {
                            required: "Phone number is required",
                            minLength: {
                                value: 7,
                                message: "Phone number must have at least 7 digits!"
                            }
                        })} 
                            name="phoneNumber" value={phone}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", borderTop: "none", borderInline: "none", fontSize: "16px", width: "40%" }}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) { event.preventDefault() }
                            }}
                        />
                    </div>
                    {errors.phoneNumber && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-12px",
                                marginBottom: "12px",
                                marginLeft: "4%"
                            }}>
                                {errors.phoneNumber.message}
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", marginTop: "25px" }}>
                    <button style={{ border: "1px solid rgba(151, 151, 151, 0.8)", 
                        width: "25%", height: "45px", fontSize: "17px", 
                        borderRadius: "6px", backgroundColor: "transparent", 
                        cursor: "pointer" }} type="submit">Send Code</button>
                </div>
            </form>
        </div>
    );
}

export default Registration