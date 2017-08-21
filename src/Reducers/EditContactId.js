
export default function(state=[], action){

	switch(action.type){
		case 'ON_EDIT':
		return Object.assign({}, state, {
			editId: action.id
		})
		
	}
	return state;
}
