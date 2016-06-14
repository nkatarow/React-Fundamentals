import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			input: '/* add jsx here */',
			output: '',
			err: ''
		}
		this.update = this.update.bind(this);
	}
	update(event) {
		let code = event.target.value;
		try {
			this.setState({
				output: babel.transform(code, {
					stage: 0,
					loose: 'all'
				}).code,
				err: ''
			})
		}
		catch(err) {
			this.setState({ err: err.message })
		}
	}
	render() {
		return (
			<div>
				<header>{this.state.err}</header>
				<div className="container">
					<textarea
						onChange={this.update}
						defaultValue={this.state.input}>
					</textarea>
					<pre>
						{this.state.output}
					</pre>
				</div>
			</div>
		)
	}
}

export default App
