import axios from 'axios';
import './Signup.css';
import React from 'react';
import { Link} from 'react-router-dom';
import { render } from '@testing-library/react';
import Signup from './Signup';
import { useHistory } from 'react-router-dom';


class Signin extends Signup {
    constructor(props) {
        super(props)
        this.state = {
            login:{
                userLogin:'',
                userPassWord:'',
      
              },
             
        }
    }
    handleChange=e=>{
        
          let logintmp = this.state.login;
          logintmp[e.target.name] = e.target.value// dans la norme on doit hache le motde passe
         // console.log(this.state.login)
          this.setState({
            login: logintmp,
            // on met l'etat (les valeurs du tableau temporaire) dans le tableau d'origine
            //file: URL.createObjectURL(e.target.files[0]) 
          });
      }
      
        handleSubmit = e =>{
            console.log(this.state.login)
            axios.post(`https://mamaison.arenaplaza.site/api/User/Authentificate`, this.state.login)
                 .then(res => {
                    console.log(res);
                    console.log(res.data);
                    localStorage.setItem('token', res.data.userTokeng)
            
                    const userToken=localStorage.getItem('token')
                    console.log(userToken)
                   
                    const history = useHistory();
                    
                    history.push('/Acceuil')
                 }).catch(erreur => {
                  //On traite ici les erreurs éventuellement survenues
                  alert("serveur indisponible")
                  console.log(erreur);
              });
            
              e.preventDefault()     
          }
        
      
        render() {
    return (
      <div className="Signgup" >
          <form className="sign">
          <legend>S'IDENTIFIER</legend>
       <div>
              <label>User login :</label>
                <input type="Text" value={this.state.login["userLogin"]} name="userLogin" className="user"
                onChange={this.handleChange}  />
            
            </div>

            <div>
              <label>User password :</label>
                <input type="password" value={this.state.login["userPassWord"]}  name="userPassWord" className="pwd"
                 onChange={this.handleChange} />

              </div>
               <div>
        <Link to="/Acceuil">yes </Link>
        <button className='sub'  onClick={this.handleSubmit}>Acceuil</button> 
       
        </div>

        </form>
        
      </div>
    );

    }

    }
    export default Signin;