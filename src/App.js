import React, { Component } from 'react';
import uuid from 'uuid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import {connect} from 'react-redux';
import {addContact, deleteContact, editContact} from './Actions/index'

class App extends Component {

	render() {
	
		return(
			<div className="App">
				My App
				<hr/>		
				<AddContact  />
				
				<Contacts />
			</div>
		);
	}
}


export default App;




