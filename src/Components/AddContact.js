import React, { Component } from 'react';
import uuid from 'uuid';
import SexForm from './SexForm';
import InputComponent from './InputComponent';
import {addContact, deleteContact, editContact} from '../Actions/index'
import {connect} from 'react-redux';

class AddContacts extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			firstName: '',
			lastName: '',
			mobileNo: '',
			sex: 'male',
			contactId: ''
		};
		
	}


	componentWillReceiveProps(nextProps){
		this.setState({
			email: nextProps.contacts.email,
			firstName: nextProps.contacts.firstName,
			lastName: nextProps.contacts.lastName,
			mobileNo: nextProps.contacts.mobileNo,
			sex: nextProps.contacts.sex,
			contactId: nextProps.contacts.id
		});

	}
	

	handleInput(event){
		const value =  event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}


	handleAddSex(event){
		this.setState({sex: event.target.value});
	}


	validateEmail(email){
		const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
		return re.test(email);
	}


	validatePhoneNo(mobileNo){
		const len = this.state.mobileNo.length === 10;
		const re = /^[1-9]+[0-9]*$/;
		return (len && re.test(mobileNo));
	}


	handleSubmit(e){
		console.log("hufidh");
		if(this.state.firstname === '' || this.state.lastName === '' || this.state.email === '' || this.state.mobileNo === ''){
			alert('Some field missing!!');
		}else{
			if (!this.validateEmail(this.state.email)) {
				alert('email is not valid');
			}else if(!(this.validatePhoneNo(this.state.mobileNo))){
				alert('mobileNo is not valid');
			}else{
				let newContact = {};
				newContact.id = this.state.contactId ? this.state.contactId : uuid.v4(),
				newContact.firstName = this.state.firstName,
				newContact.lastName = this.state.lastName,
				newContact.mobileNo = this.state.mobileNo,
				newContact.sex     = this.state.sex,
				newContact.email   = this.state.email;
			
				if(this.state.contactId){
					console.log("jdsih");
					this.props.editContact(newContact);
				}else{
					this.props.addContact(newContact);
				}
			}
		}
		e.preventDefault();
	}


	render() {
		const edit=this.state.contactId;
		return (
			<div className="form_input">
			{edit ? (
					<h3>Edit Contact</h3>
				) : (
					<h3>Add Contact </h3>
				)}
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<InputComponent  value={this.state.firstName}  onChange={this.handleInput.bind(this)}  lable='firstName' />
						<InputComponent  value={this.state.lastName}  onChange={this.handleInput.bind(this)}  lable='lastName' />
						<InputComponent  value={this.state.email}  onChange={this.handleInput.bind(this)}  lable='email' />
						<SexForm  sex={this.state.sex}  onChange={this.handleAddSex.bind(this)} />
						<InputComponent  value={this.state.mobileNo}  onChange={this.handleInput.bind(this)} lable='mobileNo'/>
						<br />
						<input type="submit" value="submit" />
					</div>
				</form>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	const id= state.editContactId.editId;
	const contacts = state.contacts.contacts;
	const index = contacts.findIndex(x => x.id === id);
	const newContact = contacts[index];
	return {
		contacts: newContact,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (contact) => {
			dispatch(addContact(contact))
		},
		editContact: (contact) => {
			dispatch(editContact(contact))
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddContacts);

