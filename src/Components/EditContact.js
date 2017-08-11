import React, { Component } from 'react';
import MobileNoForm from './MobileNoForm';
import SexForm from './SexForm';
import ImputComponent from './InputComponent';

class EditContacts extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: this.props.contact.email,
			firstName: this.props.contact.firstName,
			lastName: this.props.contact.lastName,
			mobileNo: this.props.contact.mobileNo,
			sex: this.props.contact.sex,
			contactId: this.props.contact.id,
			newContact: {}
		};
	}

	handleInput(event){
		const value =  event.target.value;
		const name = event.target.name;

		this.setState({
		  [name]: value
		});
	}


	handleAddSex(sex){
		this.setState({sex: sex});
	}


	handleAddMobile(mobileNo){
		this.setState({mobileNo: mobileNo});
	}


	handleSubmit(e){
		if(this.state.firstname === '' || this.state.lastName === '' || this.state.email === '' || this.state.mobileNo === ''){
			alert('Some field missing!!');
		}else{
			this.setState({newContact: {
				id: this.state.contactId,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				mobileNo: this.state.mobileNo,
				sex     : this.state.sex,
				email   : this.state.email
			}}, () => {
				//console.log(this.state);
				this.props.editContact(this.state.newContact);
			});
		}
		e.preventDefault();
	}


	render() {
		const array = ['firstName', 'lastName', 'email'];
		return (
			<div className="form_input">
				<h3>Edit Contacts</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<ImputComponent  value={this.state.firstName}  addInput={this.handleInput.bind(this)}  lable={array[0]} />
						<ImputComponent  value={this.state.lastName}  addInput={this.handleInput.bind(this)}  lable={array[1]} />
						<ImputComponent  value={this.state.email}  addInput={this.handleInput.bind(this)}  lable={array[2]}/>
						<SexForm  sex={this.state.sex}  addSex={this.handleAddSex.bind(this)} />
						<MobileNoForm  mobileNo={this.state.mobileNo}  addMobile={this.handleAddMobile.bind(this)} />
						<br />
						<input type="submit" value="submit" />
					</div>
				</form>
			</div>
		);
	}
}


export default EditContacts;