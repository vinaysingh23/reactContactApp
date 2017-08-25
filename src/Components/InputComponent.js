import React, { Component } from 'react';

function InputComponent(props) {
	const lable = props.lable;  
	return (
		<div>
			<lable>{lable}</lable><br />
			<input type="text" name={lable}  value={props.value} onChange={props.onChange} />
		</div>
	);
	
}


export default InputComponent;
