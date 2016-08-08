import React from 'react';
import ContactsList from './contactsList';
import {render} from 'react-dom';

let contacts = {
	name: 'Scott',
	phone: '555 333 5555'
}


class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}	
}

render(<App contacts={contacts} />, document.getElementById("app"));