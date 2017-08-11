import React, { Component } from 'react';
import uuid from 'uuid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

class App extends Component {
	constructor(){
		super();
		this.state = {
			contacts: [
				{
					id: uuid.v4(),
					firstName: 'Vinay',
					lastName: 'Singh',
					mobileNo: '7739060909',
					sex     : 'male',
					email   : 'vinaysingh@gmail.com'
				}
			],
			editContact: false,
			contactForEdit: ''
  
		};
	}


	handleAddContact(contact){
		const contacts = this.state.contacts;
		contacts.push(contact);
		this.setState({contacts: contacts});
	}


	handleDeleteContact(id){
		const contacts = this.state.contacts;
		const index = contacts.findIndex(x => x.id === id);
		contacts.splice(index, 1);
		this.setState({contacts: contacts});
	}


	handleOnEdit(id){
		this.setState({editContact: true});
		const contacts = this.state.contacts;
		const index = contacts.findIndex(x => x.id === id);
		this.setState({contactForEdit: contacts[index]});
	}

	
	handleEditContact(contact){
		const contacts = this.state.contacts;
		const index = contacts.findIndex(x => x.id === contact.id);
		contacts.splice(index, 1);
		contacts.push(contact);
		this.setState({contacts: contacts, editContact: false});
	}


	render() {
		const edit = this.state.editContact;
		const contactId = this.state.contactId;
		return(
			<div className="App">
        		My App
				<hr/>
				{edit ? (
					<EditContact editContact={this.handleEditContact.bind(this)} contact={this.state.contactForEdit}  />
				) : (
					<AddContact addContact={this.handleAddContact.bind(this)} />
				)}
				<Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)} onEdit={this.handleOnEdit.bind(this)} />
			</div>
		);
	}
}

export default App;