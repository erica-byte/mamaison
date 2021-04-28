import React from 'react';
import AddLogement from './AddLogement'
import App from '../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Acceuil from './Acceuil';
import Signup from './User/Signup';
import Signin from './User/Signin';
import LogementDetails from '../LogementDetails';
import Favoris from '../Favoris';
import ListeLogement from './ListeLogement';
import LogementModifier from './LogementModifier';



function Main() {

   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route exact path="/">
                  <Signup />
               </Route>
               <Route path="/Acceuil">
                  <Acceuil />
               </Route>
               <Route path="/Signin">
                  <Signin />
               </Route>
               <Route path="/App">

                  <App />
                  
               </Route>
         
               <Route path="/AddLogement">

                  <AddLogement />

               </Route>
               <Route path="/LogementModifier/:id" component={LogementModifier} />
               <Route path="/LogementDetails/:id" component={LogementDetails} />

            </Switch>
         </BrowserRouter>
      </div>
   );

}
export default Main;
//<rout p='addlog;id coponent={addlog}/> pour la route de chaque logement details via les id
