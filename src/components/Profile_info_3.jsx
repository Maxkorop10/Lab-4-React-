import { useState } from "react"
import { useForm } from "react-hook-form"
import Profile_title from "./Profile_title"

const Profile_info_3 = ({ data, info }) => {

    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [zip, setZip] = useState("")
    const [optional, setOptional] = useState("")

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm()

    const countries = [
        { state: "USA",},
        { state: "Canada",},
        { state: "UK"},
        { state: "France"},
        { state: "Germany"},
        { state: "Italy"},
        { state: "Spain"},
        { state: "Czechia"},
        { state: "Austria"},
        { state: "Poland"},
        { state: "Portugal"},
        { state: "Croatia"},
        { state: "Ukraine"}
    ]

    const numbers = data.phoneNumber || "";
    const region_code = data.countryCode || "";
    // const phone_number = `${region_code} ` + `${numbers}`;
    const phone_number = data.phone || "";
    const email = data.email || "";
    const password = data.password || "";
    const firstName = data.firstName || "";
    const surName = data.surName || "";
    const birthDate = data.birthDate || "";
    const birthPlace = data.birthPlace || "";
    const skype = data.skype || "";
    const facebook = data.facebook || "";

    const onSubmit = (data) => {
        const final_data = {...data, phone_number, email, password, 
            firstName, surName, birthDate, birthPlace, skype, facebook, 
            address, city, country, zip}
        if (optional.trim() !== "") {
            console.log("Optional: ", optional);
        }
        info(data)
        console.log(final_data)
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
                                Delivery address
                        </h3>

                        <p 
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                                color: "rgba(130, 130, 130, 0.92)"
                            }}>
                                Used for shipping orders
                        </p>
                    </div>

                    <div style={{display: "flex", justifyContent: "left", 
                            flexDirection: "column", marginLeft: "5%"}}>

                        <p 
                            style={{
                                fontSize: "16px",
                                textAlign: "left",
                                marginBottom: "7px"
                            }}>
                                Address
                        </p>

                        <input {...register("address", {
                            required: "Address is required",
                            minLength: {
                                value: 5,
                                message: "Address is too short"
                            },
                        })}
                            name="address" value={address}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", width: "93%",
                                marginBottom: "7px" }}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-8px",
                                    marginBottom: "2px"
                                }}>
                                    {errors.address.message}
                            </div>
                        )}

                        <p 
                            style={{
                                fontSize: "16px",
                                textAlign: "left",
                                marginBottom: "7px"
                            }}>
                                City
                        </p>

                        <input {...register("city", {
                            required: "City is required",
                            minLength: {
                                value: 2,
                                message: "City name is too short"
                            },
                        })}
                            name="city" value={city}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", width: "93%",
                                marginBottom: "7px" }}
                            onChange={(e) => setCity(e.target.value)}
                            onKeyPress={(event) => {
                                if (/[0-9]/.test(event.key)) { event.preventDefault() }
                            }}
                        />
                        {errors.city && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-8px",
                                    marginBottom: "2px"
                                }}>
                                    {errors.city.message}
                            </div>
                        )}
                    </div>

                    <div style={{display: "flex", flexDirection: "row", 
                                gap: "31%px", marginLeft: "5%"}}>
                            <p 
                                style={{
                                    fontSize: "15px",
                                    textAlign: "left",
                                    marginBottom: "7px"
                                }}>
                                    Country
                            </p>

                            <p 
                                style={{
                                    fontSize: "15px",
                                    textAlign: "left",
                                    marginBottom: "7px"
                                }}>
                                    Zip Code
                            </p>
                        </div>

                    <div style={{display: "flex", flexDirection: "row", 
                                gap: "15px", marginBottom: "22px", marginLeft: "5%"}}>

                            <select {...register("country", {
                                required: "Country is required"
                            })}
                                onChange={(e) => setCountry(e.target.value)}
                                style={{ height: "100%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                    borderTop: "none", borderInline: "none", 
                                    fontSize: "16px", width: "30%", marginRight: "10%" }}>

                                <option value=""></option>
                                {countries.map((country) => (
                                    <option key={country.state} value={country.state}>
                                        {country.state}
                                    </option>
                                ))}
                            </select>

                            <input {...register("zip", {
                                    required: "Zip is required",
                                    minLength: {
                                        value: 5,
                                        message: "Zip must have 5 digits!"
                                    },
                                })}
                                name="zip" value={zip} maxLength="5"
                                style={{ height: "85%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                    borderTop: "none", borderInline: "none", 
                                    fontSize: "16px", width: "50%" }}
                                onChange={(e) => setZip(e.target.value)}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) { event.preventDefault() }
                                }}
                            />
                        </div>
                        {errors.country && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-24px",
                                    marginBottom: "2px",
                                    marginLeft: "5%"
                                }}>
                                    {errors.country.message}
                            </div>
                        )}
                        {errors.zip && (
                            <div 
                                style={{
                                    color: "red",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginTop: "-20px",
                                    marginBottom: "2px",
                                    marginLeft: "46%",
                                }}>
                                    {errors.zip.message}
                            </div>
                        )}

                    <div style={{display: "flex", justifyContent: "left", 
                            flexDirection: "column", marginLeft: "5%",
                            marginBottom: "20px"}}>

                        <p 
                            style={{
                                fontSize: "16px",
                                textAlign: "left",
                                marginBottom: "7px"
                            }}>
                                Optional
                        </p>

                        <input 
                            name="optional" value={optional}
                            style={{ height: "40%", borderBottom: "2px solid rgba(205, 205, 205, 0.8)", 
                                borderTop: "none", borderInline: "none", fontSize: "16px", width: "93%",
                                marginBottom: "7px" }}
                            onChange={(e) => setOptional(e.target.value)}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "25px" }}>
                    <button style={{ border: "transparent", 
                        width: "25%", height: "45px", fontSize: "17px", 
                        borderRadius: "6px", backgroundColor: "rgba(0, 80, 255, 0.8)", 
                        cursor: "pointer", color: "white", marginBottom: "20px" }} 
                        type="submit">
                            ✓ Save
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Profile_info_3