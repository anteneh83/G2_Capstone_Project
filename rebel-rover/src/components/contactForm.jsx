function contactForm() {
    return (
      <div
        className="boxOne"
        style={{
          fontSize: "30px",
          backgroundColor: "white",
          maxWidth: "340px",
          margin: "auto",
          padding: "10px",
          borderRadius: "10px",
          wordWrap: "break-word",
          width: "90%",
          height: "390px",
          boxShadow: "0px 3px 14px 1px rgba(225, 223, 223, 0.7)",
        }}
      >
        <form style={{ padding: " 20px" }}>
          <input
            type="text"
            className="inputs"
            style={{
              width: "300px",
              maxWidth: "100%",
              padding: "10px",
              border: "1px solid #C4C4C4",
              paddingRight: "0px",
              paddingLeft: "5px",
              borderRadius: "4px",
              fontSize: "11px",
              fontFamily: "poppins",
              fontWeight: "300px",
              color: "#343434",
            }}
            placeholder="Your Name"
          />
          <input
            type="text"
            className="inputs"
            style={{
              width: "300px",
              maxWidth: "100%",
              padding: "10px",
              border: "1px solid #C4C4C4",
              paddingRight: "0px",
              paddingLeft: "5px",
              borderRadius: "4px",
              fontSize: "11px",
              color: "#343434",
            }}
            placeholder="Your Email"
          />
          <input
            type="text"
            className="inputs"
            style={{
              width: "300px",
              maxWidth: "100%",
              padding: "10px",
              border: "1px solid #C4C4C4",
              paddingRight: "0px",
              paddingLeft: "5px",
              borderRadius: "4px",
              fontSize: "11px",
              color: "#343434",
            }}
            placeholder="Subject"
          />
          <textarea
            style={{
              width: "300px",
              height: "100px",
              margin: "10px 0",
              maxWidth: "100%",
              borderRadius: "4px",
              border: "1px solid #C4C4C4",
              outline: "none",
              resize: "none",
            }}
            placeholder="Your message"
          />
          <button
            value="submit"
            style={{
              color: "white",
              background: "black",
              width: "320px",
              borderRadius: "32px",
              maxWidth: "103%",
              height: "41px",
              fontSize: "18px",
              fontWeight: "500",
              fontFamily: "poppins",
              alignItems: "center",
              border: "none",
              marginTop: "26px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    );
 }
export default contactForm;