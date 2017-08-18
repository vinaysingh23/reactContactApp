import uuid from 'uuid';
const initialState = {
	contacts:[
		{
			id: uuid.v4(),
			firstName: 'Vinayr',
			lastName: 'Singh',
			mobileNo: '7739060909',
			sex     : 'male',
			email   : 'vinaysingh@gmail.com'
		},
		{
			id: uuid.v4(),
			firstName: 'rahul',
			lastName: 'Singh',
			mobileNo: '7739060989',
			sex     : 'male',
			email   : 'vinaysingh@gmail.com'
		}
	]
};

export default function(state = initialState, action){
	switch(action.type){
	case 'DELETE_CONTACT':
		const index = state.contacts.findIndex((x) => x.id === action.id);
		return {
			contacts: [...state.contacts.slice(0, index), ...state.contacts.slice(index + 1)]
		};
		
		
	case 'ADD_CONTACT':
		return {
			...state,
			contacts: [ ...state.contacts, action.contact]
		};
	

	case 'EDIT_CONTACT':
		const i = state.contacts.findIndex(x => x.id === action.contact.id);
		return {
			contacts: [
				...state.contacts.slice(0, i),
				action.contact,
				...state.contacts.slice(i + 1)
			]	 
		};
	}
	return state;
}
