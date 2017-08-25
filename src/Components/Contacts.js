import React, { Component } from 'react';
import SingleContacts from './SingleContact';
import {connect} from 'react-redux';
import { fetchContacts, onDeleteClick, onEditClick} from '../Actions/index';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class Contacts extends Component {
	constructor(props){
		super(props);
		this.state = {onEdit: false};	 
	}


	componentDidMount(props){
		this.props.fetchContacts();  
		console.log(this.props);      
	}


	handleOnEditClick(_id, history){
		history.push({ pathname: '/EditContact',
  			state: { _id: _id} });
	}


	render(){
		if(this.state.onEdit){
			return <Redirect to="/EditContact" />;
		}
		let contactDetails;
		if(this.props.contacts){
			contactDetails = this.props.contacts.map(contact => (
				<SingleContacts onDelete={() => this.props.onDeleteClick(contact._id)} onEdit={() => this.handleOnEditClick(contact._id, this.props.history)} key={contact.mobileNo} contact={contact}/>
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
		contacts: state.contacts
	};
};



export default connect(mapStateToProps,  { fetchContacts, onDeleteClick, onEditClick })(Contacts);



