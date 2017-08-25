import { MongoClient } from 'mongodb';
import urlConfig from '../config/urlSetup'
let db;

MongoClient.connect(urlConfig.database.url, (err, database) => {
	if( err ) throw err;
	db = database;
	console.log('database connected');
});

export {db};


