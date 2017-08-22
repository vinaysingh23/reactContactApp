import React, { Component } from 'react';

const ValidateInput = (props) => {

	function validateEmail(email){
		const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
		return re.test(email);
	}


	function validatePhoneNo(mobileNo){
		const len = props.mobileNo.length === 10;
		const re = /^[1-9]+[0-9]*$/;
		return (len && re.test(mobileNo));
	}

	console.log(props);
	if(props.firstname === '' || props.lastName === '' || props.email === '' || props.mobileNo === ''){
			console.log('Some field missing!!');
		}else{
			if (!validateEmail(props.email)) {
				alert('email is not valid');
			}else if(!(this.validatePhoneNo(props.mobileNo))){
				alert('mobileNo is not valid');
			}
		}

	return (
		<div>
			<h3>error</h3>
		</div>
	);	
}


export default ValidateInput;