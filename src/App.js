import React, { Component } from 'react';
import uuid from 'uuid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import Header from './Components/Header'
import Main from './Components/Main'

class App extends Component {
	render() {	
		return(
			<div className="App">
				My App
				<hr/>		
				<Header  />
				
				<Main />
			</div>
		);
	}
}


export default App;




