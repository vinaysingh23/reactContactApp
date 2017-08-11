import React, { Component } from 'react';

class lastNameForm extends Component {
	handleInputChange(e){
		this.props.addLastName(e.target.value);
	}

	render() {  
		return (
			<div>
				<lable>lastName</lable><br />
				<input type="text" value={this.props.lastName} onChange={this.handleInputChange.bind(this)} />
			</div>
		);
	}
}


export default lastNameForm;