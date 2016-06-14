import React from 'react';
import ReactDOM from 'react-dom';

// This can have states
class App extends React.Component {
	constructor(){
		super();
		this.state = { txt: '' }
		this.update = this.update.bind(this);
	}
	update(event) {
		this.setState({ txt: event.target.value })
	}
	render(){
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		);
	}
}

const Widget = (props) => {
	return (
		<div>
			<input type="text" onChange={props.update} />
			<h1>{props.txt}</h1>
		</div>
	);
}


// This is cannot have states
// const App = () => <h1>Hellow Eggheads</h1>

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
// 	txt: 'Default txt'
// }

// ReactDOM.render(
// 	<App cat={5} txt="this is the props value" />,
// 	document.getElementById('app')
// );

export default App
