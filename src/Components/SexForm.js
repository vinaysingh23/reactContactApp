import React, { Component } from 'react';

class SexForm extends Component {
	handleInputChange(e){
		this.props.addSex(e.target.value);
	}

	render() {
		return (
			<div>
				<lable>Sex</lable><br />
				<select value={this.props.sex} onChange={this.handleInputChange.bind(this)}>
					<option value='male'>male</option>
					<option value='female'>female</option>
				</select>
			</div>
    );
  }
}


export default SexForm;