import React from "react";

function EyesOnMe() {

    function blurOut() {
        console.log("Hey! Eyes on me!")
    }
    function focusOut() {
        console.log("Good!")
    }


    return (
        <button onFocus={focusOut} onBlur={blurOut}  >Eyes on me</button>
    )
}

export default EyesOnMe;
