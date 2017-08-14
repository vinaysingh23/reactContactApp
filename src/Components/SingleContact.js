import React, { Component } from 'react';
import '../contacts.css';
function SingleContact(props){
	function deleteContact(id){
		props.onDelete(id);
	}


	function editContact(id){
		props.onEdit(id);
	}


	return (
		<div className="contactTable">
			<li>{props.contact.firstName}</li>
			<li>{props.contact.lastName}</li>
			<li>{props.contact.sex}</li>
			<li>{props.contact.mobileNo}</li>
			<li>{props.contact.email}</li>
			<button onClick={() => deleteContact(props.contact.id)}>Delete</button>
			<button onClick={() => editContact(props.contact.id)}>Edit</button>
			<hr />
		</div>
	);

}


export default SingleContact;
