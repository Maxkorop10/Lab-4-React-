import Profile_title from "./Profile_title"
import Mail_pic from "../assets/mail.jpg"
import Telephone_pic from "../assets/telephone.png"
import Facebook_pic from "../assets/facebook.png"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

const Profile_info_2 = ({ data, info }) => {

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [skype, setSkype] = useState("")
    const [facebook, setFacebook] = useState("")

    const mail = data.mail || "";
    const numbers = data.phoneNumber || "";
    const region_code = data.countryCode || "";
    const phone_number = `${region_code} ` + `${numbers}`;

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm({
        defaultValues: {
            email: `${mail}`,
            phone: `${phone_number}`
        }
    })

    const onSubmit = (data) => {
        info(data)
    }

    return (
        <div style={{ display: "block", position: "relative", 
                justifyContent: "center", alignItems: "center", width: "30%", 
                height: "50%", backgroundColor: "white", marginTop: "5px" }}>

            <Profile_title/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)", 
                        borderRadius: "9px", marginTop: "20px", marginBottom: "25px",
                        flexDirection: "column" }}>

                    <div style={{marginLeft: "5%"}}>
                        <h3 
                            style={{
                                textAlign: "left", 
                                marginTop: "5%",
                                marginBottom: "-2%",
                                letterSpacing: "0.5px"
                            }}>
                                Contacts
                        </h3>

                        <p 
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                                color: "rgba(130, 130, 130, 0.92)"
                            }}>
                                These contacts are used to inform about orders
                        </p>
                    </div>

                    <div style={{ display: "flex", marginTop: "20px", marginLeft: "5%", 
                        marginBottom: "20px", position: "relative" }}>

                        <img 
                            style={{
                                height: "8%",
                                width: "8%",
                            }} src={Mail_pic}/>

                        <input {...register("email", {
                            required: "Email is required",
                            minLength: {
                                value: 11,
                                message: "Email is too short"
                            },
                            validate: (value) => {
                                if (!value.includes("@email.com")) {
                                    return "Email must include '@email.com'!"
                                }
                                return true
                            }
                        })}
                            name="email" value={email || mail}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                            borderTop: "none", borderInline: "none", fontSize: "16px", 
                            width: "81%", marginLeft: "1%" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errors.email && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-18px",
                                marginBottom: "2px",
                                marginLeft: "5%"
                            }}>
                                {errors.email.message}
                        </div>
                    )}

                    <div style={{ display: "flex", marginTop: "20px", marginLeft: "5%", 
                        marginBottom: "20px", position: "relative" }}>

                        <img 
                            style={{
                                height: "5%",
                                width: "5%",
                                marginLeft: "1%"
                            }} src={Telephone_pic}/>

                        <input {...register("phone", {
                            required: "Phone number is required",
                            minLength: {
                                value: 7,
                                message: "Phone number must have at least 7 digits!"
                            }
                        })}
                            name="phone" value={phone || phone_number}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", 
                                width: "81%", marginLeft: "3%" }}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) { event.preventDefault() }
                            }}
                        />
                    </div>
                    {errors.phone && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-18px",
                                marginBottom: "2px",
                                marginLeft: "5%"
                            }}>
                                {errors.phone.message}
                        </div>
                    )}

                    <div style={{marginLeft: "5%"}}>
                        <h3 
                            style={{
                                textAlign: "left", 
                                marginTop: "5%",
                                marginBottom: "-2%",
                                letterSpacing: "0.5px"
                            }}>
                                Social network
                        </h3>

                        <p 
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                                color: "rgba(130, 130, 130, 0.92)"
                            }}>
                                Indicate the desired communication method
                        </p>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", 
                            gap: "12px", alignItems: "center", marginLeft: "5%"}}>

                            <img 
                                style={{
                                    height: "29px",
                                    width: "29px",
                                }} src="https://logodix.com/logo/82685.png"/>
                            
                            <p 
                                style={{
                                    fontSize: "18px",
                                    textAlign: "left"
                                }}>
                                    Skype
                            </p>
                            
                            <input {...register("skype", {
                                required: "Skype is required",
                                minLength: {
                                    value: 2,
                                    message: "Skype must be at least 2 characters long"
                                },
                                validate: (value) => {
                                    if (value.indexOf("@") !== 0) {
                                        return "Skype must start with '@'!";
                                    }
                                    return true;
                                }
                            })}
                                name="skype" value={skype}
                                style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                    borderTop: "none", borderInline: "none", fontSize: "16px", 
                                    width: "64%", marginLeft: "3%" }}
                                    onChange={(e) => setSkype(e.target.value)}
                            />
                    </div>
                    {errors.skype && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-16px",
                                marginBottom: "2px",
                                marginLeft: "5%"
                            }}>
                                {errors.skype.message}
                        </div>
                    )}

                    <div style={{display: "flex", flexDirection: "row", 
                            gap: "12px", alignItems: "center", marginLeft: "5%",
                            marginBottom: "-10px"}}>

                        <img 
                            style={{
                                height: "29px",
                                width: "29px",
                            }} src={Facebook_pic}/>
                            
                        <p 
                            style={{
                                fontSize: "18px",
                                textAlign: "left"
                            }}>
                                Facebook
                        </p>
                            
                        <input {...register("facebook", {
                            required: "Facebook is required",
                            minLength: {
                                value: 2,
                                message: "Facebook must be at least 2 characters long"
                            },
                            validate: (value) => {
                                if (value.indexOf("@") !== 0) {
                                    return "Facebook must start with '@'!";
                                }
                                return true;
                            }
                        })}
                            name="facebook" value={facebook}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", 
                                width: "57%", marginLeft: "3%" }}
                                onChange={(e) => setFacebook(e.target.value)}
                        />
                    </div>
                    {errors.facebook && (
                        <div 
                            style={{
                                color: "red",
                                textAlign: "left",
                                fontSize: "14px",
                                marginTop: "-7px",
                                marginBottom: "2px",
                                marginLeft: "5%"
                            }}>
                                {errors.facebook.message}
                        </div>
                    )}

                    <p 
                        style={{
                            color: "rgba(0, 80, 255, 0.8)",
                            fontWeight: "bold",
                            textAlign: "left",
                            marginLeft: "5%",
                            marginBottom: "20px",
                            cursor: "pointer"
                        }}>
                        + Add More
                    </p>
                </div>
                        
                <div style={{ display: "flex", marginTop: "25px" }}>
                    <button style={{ border: "1px solid rgba(151, 151, 151, 0.8)", 
                        width: "25%", height: "45px", fontSize: "17px", 
                        borderRadius: "6px", backgroundColor: "transparent", 
                        cursor: "pointer", marginBottom: "20px" }} 
                        type="submit">
                            Go Next →
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile_info_2