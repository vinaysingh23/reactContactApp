import React, { Component } from 'react';
import uuid from 'uuid';
import SexForm from './SexForm';
import InputComponent from './InputComponent';

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
			email: nextProps.contact.email,
			firstName: nextProps.contact.firstName,
			lastName: nextProps.contact.lastName,
			mobileNo: nextProps.contact.mobileNo,
			sex: nextProps.contact.sex,
			contactId: nextProps.contact.id 
		});

	}

	//console.log(this.props.contact);
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
					this.props.editContact(newContact);
				}else{
					this.props.addContact(newContact);
				}
			
			}
		}
		e.preventDefault();
	}


	render() {
		return (
			<div className="form_input">
				<h3>Edit Contacts</h3>
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


export default AddContacts;