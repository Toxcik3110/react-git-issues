import React from 'react';
import uuid from 'node-uuid';

class IssueComponent extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		var {title} = this.props;
		return (
			<div className='cardFlex columnOrder'>
				<h1 className='centerText'>{'Issue:' + title}</h1>

			</div>

		);
	}
}

export default IssueComponent;