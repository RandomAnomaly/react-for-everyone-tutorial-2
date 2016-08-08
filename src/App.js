import React from 'react';
import ContactsList from './contactsList';
import {render} from 'react-dom';

let contacts = [{
	id: 1,
	name: 'Scott',
	phone: '555 333 5555'
}, {
	id: 2,
	name: 'Courtney',
	phone: '555 111 5555'
}, {
	id: 3,
	name: 'Tim',
	phone: '111 333 5555'
}, {
	id: 4,
	name: 'Jeff',
	phone: '123 456 7891'
}]


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