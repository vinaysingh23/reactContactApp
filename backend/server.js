import express from 'express';
import bodyParser from 'body-parser'
import { router as contacts } from './routes/contacts';

const app = express()
app.use(bodyParser.json());


app.use(contacts);


app.listen(8080, () => {
  console.log('server is running.')
})