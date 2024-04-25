import Profile_title from "./Profile_title"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Profile_info_1 = ({ data, info }) => {

    const [firstName, setFirstName] = useState("")
    const [surName, setSurname] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [birthPlace, setBirthPlace] = useState("")

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm()

    const birthPlaces = [
        { place: "New York, USA",},
        { place: "Seatle, USA",},
        { place: "Toronto, Canada"},
        { place: "London, UK"},
        { place: "Edinburgh, UK"},
        { place: "Paris, France"},
        { place: "Lyon, France"},
        { place: "Berlin, Germany"},
        { place: "Frankfurt, Germany"},
        { place: "Rome, Italy"},
        { place: "Milan, Italy"}
    ]

    const onSubmit = (data) => {
        info(data)
    }

    return (
        <div style={{ display: "block", position: "relative", 
                justifyContent: "center", alignItems: "center", width: "30%", 
                height: "50%", backgroundColor: "white", marginTop: "5px" }}>

            <Profile_title/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{alignItems: "center", justifyContent: "left",
                    display: "flex", flexDirection: "row", marginBottom: "21px",
                    marginTop: "21px", gap: "7px"}}>

                    <input {...register("terms", {
                        required: "Acceptance of terms is required",
                    })}
                        style={{
                            height: "16px",
                            width: "16px"
                        }}
                        id="checkbox"
                        type="checkbox"
                    />
                    <label style={{fontSize: "16px"}}>I agree with</label>
                    <label 
                        style={{
                            fontSize: "16px",
                            color: "rgba(0, 93, 255, 0.92)",
                            fontWeight: "bold"
                        }}>
                            Terms of use
                    </label>
                </div>

                {errors.terms && (
                    <div 
                        style={{
                            color: "red",
                            textAlign: "left",
                            fontSize: "14px",
                            marginTop: "-18px",
                            marginLeft: "1%"
                        }}>
                            {errors.terms.message}
                    </div>
                )}

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
                                Personal data
                        </h3>

                        <p 
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                                color: "rgba(130, 130, 130, 0.92)"
                            }}>
                                Specify exactly as in your passport
                        </p>
                    </div>

                    <div style={{display: "flex", justifyContent: "left", 
                            flexDirection: "column", marginLeft: "5%"}}>

                        <p 
                            style={{
                                fontSize: "15px",
                                textAlign: "left",
                                marginBottom: "7px"
                            }}>
                                First name
                        </p>

                        <input {...register("firstName", {
                            required: "First name is required"
                        })}
                            name="firstName" value={firstName}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", width: "94%",
                                marginBottom: "7px" }}
                            onChange={(e) => setFirstName(e.target.value)}
                            onKeyPress={(event) => {
                                if (/[0-9]/.test(event.key)) { event.preventDefault() }
                            }}
                        />

                        {errors.firstName && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-4px"
                                }}>
                                    {errors.firstName.message}
                            </div>
                        )}

                        <p 
                            style={{
                                fontSize: "15px",
                                textAlign: "left",
                                marginBottom: "7px"
                            }}>
                                Second name
                        </p>

                        <input {...register("surName", {
                            required: "Surname is required"
                        })}
                            name="surName" value={surName}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", width: "94%",
                                marginBottom: "7px" }}
                                onChange={(e) => setSurname(e.target.value)}
                                onKeyPress={(event) => {
                                    if (/[0-9]/.test(event.key)) { event.preventDefault() }
                            }}
                        />

                        {errors.surName && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-4px"
                                }}>
                                    {errors.surName.message}
                            </div>
                        )}
                    </div>

                    <div style={{display: "grid", gridTemplateRows: "2",
                            gridTemplateColumns: "2", justifyContent: "left", 
                            marginLeft: "5%"}}>
                            
                        <div style={{display: "flex", flexDirection: "row", 
                                gap: "150px"}}>
                            <p 
                                style={{
                                    fontSize: "15px",
                                    textAlign: "left",
                                    marginBottom: "7px"
                                }}>
                                    Date of Birth
                            </p>

                            <p 
                                style={{
                                    fontSize: "15px",
                                    textAlign: "left",
                                    marginBottom: "7px"
                                }}>
                                    Place of Birth
                            </p>
                        </div>

                        <div style={{display: "flex", flexDirection: "row", 
                                gap: "135px", marginBottom: "22px"}}>

                            <input {...register("birthDate", {
                                required: "Date of Birth is required"
                            })}
                                style={{
                                    height: "18px",
                                    width: "100px"
                                }}
                                type="date" name="birthDate" value={birthDate} min="2000-01-01" 
                                max="2024-04-30" onChange={(e) => setBirthDate(e.target.value)}/>
                                
                            <select {...register("birthPlace", {
                                required: "Place of Birth is required!"
                            })}
                                onChange={(e) => setBirthPlace(e.target.value)}
                                style={{ height: "100%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                    borderTop: "none", borderInline: "none", 
                                    marginRight: "20px", fontSize: "16px", width: "40%" }}>

                                <option value=""></option>
                                {birthPlaces.map((birthPlace) => (
                                    <option key={birthPlace.place} value={birthPlace.place}>
                                        {birthPlace.place}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row",
                        marginTop: "-18px", marginBottom: "10px"}}>
                        {errors.birthDate && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginLeft: "5%",
                                }}>
                                    {errors.birthDate.message}
                            </div>
                        )}

                        {errors.birthPlace && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginLeft: "19.2%",
                                }}>
                                    {errors.birthPlace.message}
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ display: "flex", border: "2px solid rgba(215, 215, 215, 0.8)", 
                        borderRadius: "9px", marginTop: "20px", marginBottom: "25px",
                        flexDirection: "column" }}>
                    
                    <p 
                        style={{
                            textAlign: "left", 
                            marginLeft: "3%",
                            marginBottom: "-10px"
                        }}>
                            123-45-678
                    </p>

                    <p 
                        style={{
                            textAlign: "left", 
                            marginLeft: "3%",
                            fontSize: "12px",
                            letterSpacing: "0.5px"
                        }}>
                            ✓ Your ITIN
                    </p>
                </div>

                <div style={{ display: "flex", marginTop: "25px" }}>
                    <button style={{ border: "1px solid rgba(151, 151, 151, 0.8)", 
                        width: "25%", height: "45px", fontSize: "17px", 
                        borderRadius: "6px", backgroundColor: "transparent", 
                        cursor: "pointer", marginBottom: "20px" }} type="submit">Go Next →</button>
                </div>
            </form>
        </div>
    )
}

export default Profile_info_1