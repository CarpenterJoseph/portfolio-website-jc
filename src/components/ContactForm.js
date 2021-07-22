import React from 'react';
import ReactDOM from 'react-dom';

class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contactName: '',
			email: '',
			subject: '',
			message: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log(this.state.contactName + this.state.email + '')
		event.preventDefault();
	}

	render() {
		return (
			<form className={"w-full"} onSubmit={this.handleSubmit}>
				<input type="text" className={"bg-red w-full"} placeholder={"Name"} value={this.state.contactName}
				       onChange={(event) => this.setState({contactName: event.target.value})}/>
				<input type="text" className={"bg-red w-full"} placeholder={"Email Address"} value={this.state.email}
				       onChange={(event) => this.setState({email: event.target.value})}/>
				<input type="text" className={"bg-red w-full"} placeholder={"Subject"} value={this.state.subject}
				       onChange={(event) => this.setState({subject: event.target.value})}/>
				<input type="text" className={"bg-red w-full"} placeholder={"Your Message"} value={this.state.message}
				       onChange={(event) => this.setState({message: event.target.value})}/>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default ContactForm