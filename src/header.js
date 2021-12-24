import React from "react"
import { Gptable } from "./gptable"

export const Header = () => {
return (
<>
   <hr></hr>
    <h1>Marks/Score Letter Grade Point (GP)</h1>
			<p>If your score is in numbers(scores),check the correlating Grade in the table below and apply accordingly </p>
			<Gptable />			
			<p>*Note: This is a 5 point scale GPA</p>
            <h1>CGPA CALCULATOR </h1>
		<h4>Calculate your CGPA below</h4>
		<p>Keep track of your academic progress and knowing your target.</p>
        </>
)
}