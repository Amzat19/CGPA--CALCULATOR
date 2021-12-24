import React from "react";

export const Gpa = ({gpCalc}) => {
    return (
        <>
        <h2>Your GPA is </h2>
	 <h3>{gpCalc()}</h3>
     </>
    )
}