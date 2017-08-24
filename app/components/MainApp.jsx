import React from 'react';
import uuid from 'node-uuid';
import IssuesForm from 'IssuesForm';
import IssuesList from 'IssuesList';

class MainApp extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		
		return (
			<div className='cardFlex justifyAround fullWidth fullHeight'>
				<div className='cardGap'></div>
				<div className='cardGap3 cardFlex columnOrder'>
					<h1 className='centerText'>{'Git issues'}</h1>
					<IssuesForm />
					<IssuesList />
				</div>
				<div className='cardGap'></div>
			</div>

		);
	}
}

export default MainApp;