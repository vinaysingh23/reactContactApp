import React, { Component } from 'react';
import uuid from 'uuid';
import SexForm from './SexForm';
import InputComponent from './InputComponent';
import ValidateInput from './ValidateInput';
import {addContact, deleteContact, editContact, updateContact, addSingleContact} from '../Actions/index';
import {connect} from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

class AddContacts extends Component {
	constructor(props){
		super(props);
		const empty = {
			email: '',
			firstName: '',
			lastName: '',
			mobileNo: '',
			sex: 'male',
			_id: '',
			error: ''
		};
                           
		this.state = this.props.contacts || empty;
		
		if ( this.props.location.pathname === '/AddContact' ) {
			this.state = empty;
		}	
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


	validate() {
		var errors = '';

		if(this.state.firstname === '' || this.state.lastName === '' || this.state.email === '' || this.state.mobileNo === ''){
			errors = 'some field missing!!!!';
		}else {
			const reg1 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
			const len = this.state.mobileNo.length === 10;
			const reg2 = /^[1-9]+[0-9]*$/;
			if(!reg1.test(this.state.email)){
				errors = 'invalide Email!!!!';	
			}
			else if(!(len && reg2.test(this.state.mobileNo))){
				errors = 'invalide mobile Number!!!!';
			}
		}
		
		return errors;
	}


	handleSubmit(e){
		const errors = this.validate();
		if(errors){
			this.setState({error : errors});
		}else{
			this.setState({error : ''});
			if(this.state._id){
				this.props.updateContact(this.state);

			}else{
				this.props.addSingleContact(this.state);
				//<Redirect to='/' from={this.props.location.pathname} />
			}
		}

		e.preventDefault();
	}


	render() {
		const edit=this.state._id;

		return (
			<div className="form_input">

				{edit ? (
					<h3>Edit Contact</h3>
				) : (
					<h3>Add Contact </h3>
				)}

				{this.state.error ? (
					<li>{this.state.error}</li>
				) : (
					<h3>{''}</h3>
				) 
				}
				
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


const mapStateToProps = (state, ownProps) => {
	//console.log(state);
	//console.log(ownProps.location.state._id);
	//const id= state.editContactId.editId;
	if(ownProps.location.state){
		const _id = ownProps.location.state._id;
		const contacts = state.contacts;
		const index = contacts.findIndex(x => x._id === _id);
		const newContact = contacts[index];
		return {
			contacts: newContact,
		};
	}else{
		return {
			contacts: {},
		};
	}
};


export default (connect(
	mapStateToProps,
	{addSingleContact, updateContact}
)(AddContacts));

