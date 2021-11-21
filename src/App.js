import React, {Component} from "react";
import "./index.css";
import Select from "./input";

class App extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		courses: [{ title:"", grade: 4.0, units: 4 }]
	  };
	}
  
	handleChange(i, change) {
	  const courses = this.state.courses.slice();
	  courses[i] = { ...courses[i], ...change };
	  this.setState({
		courses: courses
	  });
	}
  
	addCourse() {
	  this.setState({
		courses: [...this.state.courses, { title:"", grade: 4.0, units: 4 }]
	  });
	}
  
	render() {
	  let totalUnit = 0;
	  let totalGrade = 0;
  
	  const courses = this.state.courses.map((course, i) => {
		totalUnit += course.units;
		totalGrade += course.grade * course.units;
		return (
		  <Select index={i} key={i} handleChange={this.handleChange.bind(this)} />
		);
	  });

  return (
	<div className="App">
		<h1>Marks/Score Letter Grade Point (GP)</h1>
			<p>If your score is in numbers(scores),check the correlating Grade in the table below and apply accordingly </p>
			<table>
				<thead>
					<tr>
						<th>Score</th>
						<th>Grade</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>70% and above</td>
							<td>A</td>
						</tr>
						<tr>
							<td>60 - 69</td>
							<td>B</td>
						</tr>
						<tr>
							<td>50 - 59</td>
							<td>C</td>
						</tr>
						<tr>
							<td>45 - 49</td>
							<td>D</td>
						</tr>
						<tr>
							<td>40 - 44</td>
							<td>E</td>
						</tr>
						<tr>
							<td>0 - 39</td>
							<td>F</td>
						</tr>
					</tbody>
			</table>
			<p>*Note: This is a 5 point scale GPA</p>
		<h1>CGPA CALCULATOR </h1>
		<h4>Calculate your CGPA below</h4>
		<p>Keep track of your academic progress and knowing your target</p>
	 <div className="container">
		 <div>
			 <table >
			 <thead>
				 <tr>
				 <th>Enter Course title</th>
				 <th>Enter Grade</th>
				 <th>Enter Course Credit Units</th>
				 </tr>
			 </thead>
			 <tbody>
				 {courses}
			 </tbody>
		 </table>

		 <button type="submit" onClick={this.addCourse.bind(this)}>Add Course</button>
		 </div> 
	 </div>
	 <h2>Your GPA is </h2>
	 <h3>{(totalGrade / totalUnit).toFixed(2)}</h3>

	 <footer>
		 <p>Coded by Amzat</p>
	 </footer>
	</div>
  );
  }
};

export default App