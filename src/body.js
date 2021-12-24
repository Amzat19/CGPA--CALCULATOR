import React from "react";

export const Body = ({addCourse,input}) => {
    return (
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
			 {input()}
			 </tbody>
		 </table>
		 <button type="submit" onClick={addCourse}>Add Course</button>
		 </div> 
	 </div>

    )
}