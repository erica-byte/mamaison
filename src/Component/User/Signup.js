import axios from 'axios';
import './Signup.css';
import React from 'react';
import { Link} from 'react-router-dom';


class Signup extends React.Component  {
  constructor(props) {
      super(props)
      this.state = {
        user:{
          userLogin:'',
          userPassWord:'',
          agentName:'',
          agentEmail:'',
          Image:''

        },

      }
  }
  handleChange = e =>{
  
      let usertmp = this.state.user;
      usertmp[e.target.name] = e.target.value

      this.setState({
        user: usertmp,
        // on met l'etat (les valeurs du tableau temporaire) dans le tableau d'origine
        //file: URL.createObjectURL(e.target.files[0]) 
      });
  }

  handleSubmit = e =>{
    console.log(this.state.user)
    axios.post(`https://mamaison.arenaplaza.site/api/User/CreatedUser`,this.state.user)
         .then(res => {
            console.log(res.data);

            
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
          <legend>S'ENREGISTRER</legend>
       <div>
              <label>User login :</label>
                <input type="Text" value={this.state.user["userLogin"]} name="userLogin" className="user"
                  onChange={this.handleChange} />
            
            </div>

            <div>
              <label>User password :</label>
                <input type="password"  value={this.state.user["userPassWord"]} name="userPassWord" className="pwd"
                 onChange={this.handleChange}  />
              </div>
              <div>
              <label>Agent Name :</label>
                <input type="text"  value={this.state.user["agentName"]}  name="agentName" className="agentN"
                 onChange={this.handleChange}  />
              
              </div>
              <div>
              <label>Agent email :</label>
                <input type='email'  value={this.state.user["agentEmail"]} name="agentEmail" className="agentM"
               onChange={this.handleChange}   />
            
              </div>
              <button style={{margin:'10px'}}> 
        <Link to="/Signin">Signin</Link>
        </button>
        <input className='sub' type='submit' value='enter' onClick={this.handleSubmit}/>
        </form>
      </div>
    );

    }
  }

    export default Signup;