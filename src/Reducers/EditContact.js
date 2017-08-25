
export default function(state=[], action){
	switch(action.type){
	case 'ON_EDIT':
		return action.contact;

	default: return state;
	}
	
}
