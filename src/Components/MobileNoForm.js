import React, { Component } from 'react';


class MobileNoForm extends Component {
	handleInputChange(e){
		this.props.addMobile(e.target.value);
	}

	render() { 
		return (
			<div>
				<lable>Mobile Number</lable><br />
				<input type="text"  value={this.props.mobileNo} onChange={this.handleInputChange.bind(this)} />
			</div>
    );
  }
}


export default MobileNoForm;