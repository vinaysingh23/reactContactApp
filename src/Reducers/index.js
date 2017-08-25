import { combineReducers } from 'redux';
import Contacts from './Contacts';
import EditContact from './EditContact';


const allReducers = combineReducers({
	contacts: Contacts

});

export default allReducers;