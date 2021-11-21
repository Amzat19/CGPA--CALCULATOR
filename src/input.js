import React, {Component}  from 'react';


class Select extends Component {

    gradeChange(event) {
      this.props.handleChange(this.props.index, {
        grade: Number(event.target.value)
      });
    }
  
    unitChange(event) {
      this.props.handleChange(this.props.index, {
        units: Number(event.target.value)
      });
    }

    render() {
return (
    <tr>
        <td>
            <input id="text" type="text"></input>
        </td>
        <td>
            <select onChange={this.gradeChange.bind(this)}> 
                <option value="5.00">A</option>
                <option value="4.00">B</option>
                <option value="3.00">C</option>
                <option value="2.00">D</option>
                <option value="1.00">E</option>
                <option value="0.00">F</option>

            </select>
        </td>
        <td>
            <select onChange={this.unitChange.bind(this)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </td>
    </tr>
)
    }
};

export default Select;

