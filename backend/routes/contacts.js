import express from 'express';
import * as contacts from '../controller/contacts';


const router = express.Router();


router.get('/getContacts', contacts.fetchAllContact);
router.post('/AddContact', contacts.addContact);
router.put('/UpdateContact/:_id', contacts.updateContact);
router.delete('/RemoveContact/:_id', contacts.deleteContact);
router.get('/fetchSingleContact/:_id', contacts.fetchSingleContact);


export {router};