import React, { Component } from 'react';

class GenaralForm extends Component {
	handleInputChange(e){
	/*	if(e.target.name === 'FirstName'){
			this.props.addFirstName(e.target.value);
		}else if(e.target.name === 'LastName'){
			this.props.addLastName(e.target.value);
		}else if(e.target.name === 'Email'){
			this.props.addEmail(e.target.value);
		}*/
		this.props.addInput(e);
	}


	render() { 
		const lable = this.props.lable;  
		return (
			<div>
				<lable>{lable}</lable><br />
				<input type="text" name={lable}  value={this.props.value} onChange={this.handleInputChange.bind(this)} />
			</div>
		);
	}
}


export default GenaralForm;
