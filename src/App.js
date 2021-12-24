import React, { useState } from "react";
import { Body } from "./body";
import { Footer } from "./footer";
import { Header } from "./header";
import "./index.css";
import {Select} from "./input";
import { Gpa } from "./Mygpa";

const App = () => {
	const [state, setState] = useState([{title:"", grade: 5, units: 4}]);

	// Handles the change of state by changing the state into an array  and tracking the index of each row of input and the selected change.
	const handleChange = (i, change) => {
		let courses = state.slice()
		courses[i] = {...state[i], ...change}
		setState(courses);
	}

	// Adds more row of input to the table 
    const addCourse = () => {
	  setState([...state , {title:"", grade: 5, units: 4}]);
		
	}

	// Calls the totalUnit and totalGrade for the gpa calculation globally for easy referencing in different functions
	let totalUnit = 0;
	let totalGrade = 0;

	// Maps the state of the app and returns input and select tags as the corresponding value.
	const input = () => {
		//This is another way of doing what u did earlier
		//Choose the one u like :)
	  const courses =  state.map((course,i) => {
		  totalUnit += course.units ;
		  totalGrade += course.grade * course.units;
		  
		  return (
			  <Select index={i} key={i} handleChange={handleChange}/>
		  )
	  })
	  return courses;
	}

	// Returns the calculated gpa
		const gpCalc = () => { 
		return (totalGrade / totalUnit).toFixed(2);
	}
	

  return  (
	<div className="App">
		<Header/>
		<Body addCourse={addCourse} input={input}/>
		<Gpa gpCalc={gpCalc}/>
		<Footer/>
	</div>
  );
};

export default App