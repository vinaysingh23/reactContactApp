import React from 'react'
import { Switch, Route ,browserHistory} from 'react-router-dom'
import Contacts from './Contacts';
import AddContact from './AddContact';


const Main = () => (
  <Switch>
    <Route exact path='/' component={Contacts}/>
 	<Route exact path='/AddContact' component={AddContact} />
 	<Route exact path='/EditContact' component={AddContact} />
  </Switch>
)


export default Main