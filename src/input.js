import React from 'react';


export const Select = ({handleChange,index}) => {

    // Handles the targeted change for the title input field.
    const titleChange = (event) => {
        //Advanced destructuring :)
        //Nothing complex :)
        const {target: {value}} = event
        handleChange(index,{title: String(value)})
    }

    // Handles the targeted change for the select grade input field.
    const gradeChange = (event) => {
        const {target: {value}} = event
        handleChange(index,{grade: Number(value)})
    }

    // Handles the targeted change for the select unit input field. 
    const unitChange = (event) => {
        const {target: {value}} = event
        handleChange(index,{units: Number(value)})
    }


    return (
    <tr>
        <td>
            <input id="text" type="text" onChange={titleChange}></input>
        </td>
        <td>
            <select onChange={gradeChange} defaultValue="5"> 
                <option value="5.00">A</option>
                <option value="4.00">B</option>
                <option value="3.00">C</option>
                <option value="2.00">D</option>
                <option value="1.00">E</option>
                <option value="0.00">F</option>

            </select>
        </td>
        <td>
            <select onChange={unitChange} defaultValue="4">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
                <option value="4">6</option>
                <option value="4">7</option>
                <option value="4">8</option>
                <option value="4">9</option>
                <option value="4">10</option>
            </select>
        </td>
    </tr>
)
};
