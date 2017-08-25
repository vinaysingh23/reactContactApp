import React, { Component } from 'react';
import uuid from 'uuid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import Header from './Components/Header'
import Main from './Components/Main'

function App(props) {
	return(
		<div className="App">
			My App
			<hr/>		
			<Header  />
			
			<Main />
		</div>
	);	
}


export default App;




