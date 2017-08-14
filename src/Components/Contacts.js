import React, { Component } from 'react';
import SingleContacts from './SingleContact';

function Contacts(props) {
	function deleteContact(id){
		props.onDelete(id); 
	}


	function editContact(id){
		props.onEdit(id);
	}


	
	let contactDetails;
	if(props.contacts){
		contactDetails = props.contacts.map(contact => (
			<SingleContacts onDelete={() => deleteContact(contact.id)} onEdit={() => editContact(contact.id)} key={contact.mobileNo} contact={contact}/>
		));

	}

	return (
		<div>
			<h3>Latest Contacts</h3>
			{contactDetails}
		</div>
	);
	
}


export default Contacts;
