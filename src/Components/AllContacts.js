import React, { Component } from 'react';
import '../contacts.css';
class AllContacts extends Component {
	deleteContact(){
		this.props.onDelete();
	}

	editContact(id){
		this.props.onEdit(id);
	}


	render() { 
		return (
			<div className="contactTable">
				<li>{this.props.contact.firstName}</li>
				<li>{this.props.contact.lastName}</li>
				<li>{this.props.contact.sex}</li>
				<li>{this.props.contact.mobileNo}</li>
				<li>{this.props.contact.email}</li>
				<a href="#" onClick={this.deleteContact.bind(this, this.props.contact.id)}>Delete</a><br />
				<a href="#" onClick={this.editContact.bind(this, this.props.contact.id)}>Edit</a>
				<hr />
			</div>
		);
	}
}


export default AllContacts;
