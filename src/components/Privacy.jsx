const Privacy = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row", 
            justifyContent: "center", 
            alignItems: "center",
            gap: "4%",
            width: "100%",
            backgroundColor: "rgba(235, 235, 235, 0.8)",
            borderRadius: "8px",
            marginTop: "25px",
            marginBottom: "25px"
        }}>
            
            <div style={{display: "flex", alignItems: "center"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lock_Icon.svg/768px-Lock_Icon.svg.png"
                    style={{height: "20px"}}/>
            </div>
            
            <p style={{fontSize: "", color: "black", textAlign: "left"}}>
                We take privacy issues seriously. You can be sure<br></br>
                that your personal data is securely protected.
            </p>

            <div style={{display: "flex", alignItems: "center"}}>
                <img src="https://static.thenounproject.com/png/1202535-200.png"
                    style={{height: "20px"}}/>
            </div>

        </div>
    )
}

export default Privacy