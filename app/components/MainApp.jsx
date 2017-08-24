import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'node-uuid';

class MainApp extends React.Component {

	constructor(props) {
		super(props);
		
	}
	
	render() {
		
		return (
			<div className='cardFlex columnOrder justifyAround fullWidth fullHeight'>
				<h1 className='centerText'>{'Git issues'}</h1>
			</div>

		);
	}
}

export default MainApp;