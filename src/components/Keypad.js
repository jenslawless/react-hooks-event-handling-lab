import React from "react";


function Keypad() {
    function keypadClick(event) {
        console.log("Entering password...")
    };

    return (

        <input onChange={keypadClick} type="password" ></input>

    )
}

export default Keypad;