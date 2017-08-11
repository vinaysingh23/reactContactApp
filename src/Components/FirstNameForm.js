import React, { Component } from 'react';

class FirstNameForm extends Component {
	handleInputChange(e){
		this.props.addFirstName(e.target.value);
	}

	render() {  
		return (
			<div >
				<lable>firstName</lable><br />
				<input type="text" value={this.props.firstName} onChange={this.handleInputChange.bind(this)}/>
			</div>
		);
	}
}


export default FirstNameForm;


