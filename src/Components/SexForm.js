import React, { Component } from 'react';

function SexForm(props){
	return (
		<div>
			<lable>Sex</lable><br />
			<select value={props.sex} onChange={props.onChange}>
				<option value='male'>male</option>
				<option value='female'>female</option>
			</select>
		</div>
	);
  
}


export default SexForm;