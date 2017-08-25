
export default function(state = [], action ) {
	switch(action.type) {
	case 'ADD_CONTACT':
		return [
			...state,
			action.contact
		];

	case 'DELETE_CONTACT':
		return state.filter(item => item._id !== action.id);

	case 'EDIT_CONTACT':
		return state.map(item => {
			if (item._id === action.contact._id) return action.contact;
			return item;
		});

	case 'SET_CONTACTS':
		return action.contacts;

	default: return state;
	}
}
