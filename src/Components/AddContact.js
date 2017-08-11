import React, { Component } from 'react';
import uuid from 'uuid';
import MobileNoForm from './MobileNoForm';
import SexForm from './SexForm';
import InputComponent from './InputComponent';

class AddContacts extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			firstName: '',
			lastName: '',
			mobileNo: '',
			sex: 'male',
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
				id: uuid.v4(),
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				mobileNo: this.state.mobileNo,
				sex     : this.state.sex,
				email   : this.state.email
			}}, () => {
				this.props.addContact(this.state.newContact);
			});
		}
		e.preventDefault();
	}


	render() {
		const array = ['firstName', 'lastName', 'email'];
		return (
			<div className="form_input">
				<h3>Add Contacts</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<InputComponent  value={this.state.firstName}  addInput={this.handleInput.bind(this)}  lable={array[0]} />
						<InputComponent  value={this.state.lastName}  addInput={this.handleInput.bind(this)}  lable={array[1]} />
						<InputComponent  value={this.state.email}  addInput={this.handleInput.bind(this)}  lable={array[2]}/>
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


export default AddContacts;