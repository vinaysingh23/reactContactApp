
export const addContact = contact => {
	console.log(contact,  'in addContact');
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


export const onEdit = contact => {
	return {
		type: 'ON_EDIT',
		contact
	};
};


export const setContact = contacts => {
	return {
		type: 'SET_CONTACTS',
		contacts
	};
};


export function fetchContacts() {
	return dispatch => {
		fetch('/getContacts')
		.then(res => res.json())
		.then(data => { 
			dispatch(setContact(data.contacts));
		});
	};
}



export function addSingleContact(data) {
	return dispatch => {
		return fetch('/AddContact', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then((result) => {
			dispatch(addContact(result.contacts));});
	};
}


export function updateContact(data) {
	return dispatch => { 
		return fetch(`/UpdateContact/${data._id}`, {
			method: 'put',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(data => dispatch(editContact(data.contact)));
	};
}



export function onDeleteClick(id) {
	return dispatch => {
		return fetch(`/RemoveContact/${id}`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(data => dispatch(deleteContact(id)));
	};
}


export function onEditClick(id) {
	console.log('in onEditClick');
	return dispatch => {
		fetch(`/fetchSingleContact/${id}`)
		.then(res => res.json())
		.then(data => dispatch(onEdit(data.contact)));
	};
}