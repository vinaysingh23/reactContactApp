import { combineReducers } from 'redux'
import Contacts from './Contacts'
import EditContactId from './EditContactId'


const allReducers = combineReducers({
	contacts: Contacts,
	editContactId: EditContactId

})

export default allReducers;