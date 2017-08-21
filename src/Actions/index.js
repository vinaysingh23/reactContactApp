export const addContact = contact => {
	return {
		type: 'ADD_CONTACT',
		contact
	};
};

export const deleteContact = id => {
	return {
		type: 'DELETE_CONTACT',
		id
	};
};

export const editContact = contact => {
	return {
		type: 'EDIT_CONTACT',
		contact
	};
};

export const onEdit = id => {
	//console.log("ujih");
	return {
		type: 'ON_EDIT',
		id
	};
};