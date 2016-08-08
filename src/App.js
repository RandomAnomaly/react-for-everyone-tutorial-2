import React from 'react';
import ContactsList from './contactsList';
import {render} from 'react-dom';

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList />
			</div>
		)
	}	
}

render(<App />, document.getElementById("app"));