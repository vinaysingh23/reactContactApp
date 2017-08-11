import React, { Component } from 'react';
import AllContacts from './AllContacts';

class Contacts extends Component {
	deleteContact(id){
		this.props.onDelete(id); 
	}


	editContact(id){
		this.props.onEdit(id);
	}


	render() {
		let contactDetails;
		if(this.props.contacts){
			contactDetails = this.props.contacts.map(contact => {
				return (
					<AllContacts onDelete={this.deleteContact.bind(this)} onEdit={this.editContact.bind(this)} key={contact.mobileNo} contact={contact}/>
				);

			});

		}
		console.log(this.props.contacts);
		return (
			<div>
				<h3>Latest Contacts</h3>
				{contactDetails}
			</div>
		);
	}
}


export default Contacts;
