import React, { Component } from 'react';
import SingleContacts from './SingleContact';
import {connect} from 'react-redux';
import {addContact, deleteContact, editContact, onEdit} from '../Actions/index'
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom'

const Contacts = (props) =>  {
	console.log(props);
	let contactDetails;
	if(props.contacts){
		contactDetails = props.contacts.map(contact => (
			<SingleContacts onDelete={() => props.onDeleteClick(contact.id)} onEdit={() => props.onEditClick(contact.id, props.history)} key={contact.mobileNo} contact={contact}/>
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
	//console.log(state);
	return {
		contacts: state.contacts.contacts
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteClick: (id) => {
			dispatch(deleteContact(id))
		},
		onEditClick: (id, history) => {
			//dispatch(onEdit(id));
			history.push({ pathname: '/EditContact',
  			state: { id: id} })
		}
	}
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Contacts));



