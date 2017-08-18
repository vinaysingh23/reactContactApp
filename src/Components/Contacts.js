import React, { Component } from 'react';
import SingleContacts from './SingleContact';
import {connect} from 'react-redux';
import {addContact, deleteContact, editContact, onEdit} from '../Actions/index'

function Contacts(props) {
	let contactDetails;
	if(props.contacts){
		contactDetails = props.contacts.map(contact => (
			<SingleContacts onDelete={() => props.onDeleteClick(contact.id)} onEdit={() => props.onEditClick(contact.id)} key={contact.mobileNo} contact={contact}/>
		));
	}


	return (
		<div>
			<h3>Latest Contacts</h3>
			{contactDetails}
		</div>
	);
	
}


const mapStateToProps = (state) => {
	return {
		contacts: state.contacts.contacts
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteClick: (id) => {
			dispatch(deleteContact(id))
		},
		onEditClick: (id) => {
			dispatch(onEdit(id))
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contacts);



