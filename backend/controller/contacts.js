import mongodb from 'mongodb';
import {db} from '../config/dbConnection'

export const fetchAllContact = (req, res) => {
	const productId = req.params.id;
	db.collection('contacts').find({}).toArray((err, contacts) => {
		res.json({ contacts });
	});
};


export const addContact = (req, res) => {
	const newContact = {
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		mobileNo:req.body.mobileNo,
		sex:req.body.sex,
		email:req.body.email,
	};
	
	db.collection("contacts").insertOne(newContact, function(err, result) {
    	if (err) throw err;
    	const contacts = result.ops[0];
    	res.json({ contacts }); 
  	});	
};


export const updateContact = (req, res) => {
	const { firstName, lastName, mobileNo, sex ,email} = req.body;
	db.collection('contacts').findOneAndUpdate(
		{ _id: new mongodb.ObjectId(req.params._id) },
		{ $set: { firstName, lastName, mobileNo, sex, email } },
		{ returnOriginal: false },
		(err, result) => {
	  		res.json({ contact: result.value });
		}
	);
};


export const deleteContact = (req, res) => {
	db.collection('contacts').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, result) => {
		res.json({});
	});
};


export const fetchSingleContact = (req, res) => {
	db.collection('contacts').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, contact) => {
		res.json({ contact });
	});
};