import React from 'react';
import uuid from 'node-uuid';
import {connect} from 'react-redux';
import * as actions from 'actions';

class IssuesForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			owner: 'octocat',
			name: 'Hello-World',
		}
	}

	render() {
		var {owner, name} = this.state;
		var {dispatch} = this.props;
		return (
			<div className='cardFlex columnOrder justifyAround'>
				<label>
					Repository owner name
					<input type='text' value={owner} onChange={e=>this.setState({owner:e.target.value})} />
				</label>
				<label>
					Repository name
					<input type='text' value={name} onChange={e=>this.setState({name:e.target.value})}/>
				</label>
				<button 
				className='button hollow primary'
				onClick={(e) => {dispatch(actions.getIssues())}}
				>Get issues!</button>
			</div>

		);
	}
}

export default connect(
	(state) => {
		return {
			issues:state.issues,
		};
	}
)(IssuesForm);