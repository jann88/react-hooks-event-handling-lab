import React from "react";
// Code Keypad Component Here
function Keypad() {
    return (
    <React.Fragment>
         <input onChange={() => console.log("Entering password...")} type="password"/>
    </React.Fragment>
    )
  }
  export default Keypad;
  