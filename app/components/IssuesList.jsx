import React from 'react';
import uuid from 'node-uuid';
import IssueComponent from 'IssueComponent';
import {connect} from 'react-redux';

export class IssuesList extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		var {issues} = this.props;

		var renderIssues = () => {
			return issues.map((e) => {
				return (<IssueComponent 
					key={uuid()} 
					title={e.title}
					/>)
			})
		}

		return (
			<div className='cardFlex columnOrder'>
				{renderIssues()}
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
)(IssuesList);