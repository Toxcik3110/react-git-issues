import uuid from 'node-uuid';


export var issueReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_ISSUES': 
			return [{title:'issue1'}];
		default:
			return state;
	}
}