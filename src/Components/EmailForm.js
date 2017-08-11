import React, { Component } from 'react';

class EmailForm extends Component {
	handleInputChange(e){
		this.props.addEmail(e.target.value);
	}

	render() {
		return (
			<div>
				<lable>Email</lable><br />
				<input type="text"  value={this.props.email} onChange={this.handleInputChange.bind(this) }/>
			</div>
		);
	}
}


export default EmailForm;