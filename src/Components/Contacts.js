import React, { Component } from 'react';
import SingleContacts from './SingleContact';
import {connect} from 'react-redux';
import {addContact, deleteContact, editContact, onEdit} from '../Actions/index'
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom'

class Contacts extends Component {
	constructor(props){
		super(props);

		this.state = {
			redirect: false
		};
		
	}


	handleOnEdit(id){
		console.log(id);
		this.props.onEditClick(id);	
		//this.setState({redirect: true});
		//this.props.history.push("/EditContact");
	}

	render(){
		/*if (this.state.redirect) {
			return <Redirect push to="/EditContact" />;
		}
*/
		let contactDetails;
		if(this.props.contacts){
			contactDetails = this.props.contacts.map(contact => (
				<SingleContacts onDelete={() => this.props.onDeleteClick(contact.id)} onEdit={() => this.props.onEditClick(contact.id)} key={contact.mobileNo} contact={contact}/>
			));
		}


		return (
			<div>
				<h3>Latest Contacts</h3>
				{contactDetails}
			</div>
		);

	}
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
		onEditClick: (id) => {
			dispatch(onEdit(id))
		}
	}
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Contacts));



