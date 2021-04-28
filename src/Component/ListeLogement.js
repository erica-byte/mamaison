import React from "react"
import { Link} from 'react-router-dom';
//import React, { Component } from "react"
import "antd/dist/antd.css"
import { MdDelete } from 'react-icons/md';
import { MdCreate } from 'react-icons/md';
import axios from 'axios';
import '../LogementTotal.css'

class ListeLogement extends React.Component {
    constructor(props){
      
      super(props)
      this.state= {
liste:this.props.elem,
      
    }
    }
    DeleteItem=(id,e)=>{
        //https://mamaison.arenaplaza.site/api/Room/UpdatedRoomModel/

    
        axios.delete(`https://mamaison.arenaplaza.site/api/Room/`+id)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
          const posts = this.state.liste.filter(item => item.id !== id);  
          this.setState({ liste:posts });  
        })
        e.preventDefault()  
      } 
    
             
       
    render(){
        const iconSize = 30;
        const{ liste }=this.state
        console.log(this.state.liste);
        return (<div className='total'>
            <div>
           
                        <div className='loge'>    
                              <ul className="post-time">
                              <Link to={"/LogementDetails/"+liste.id}><img className='image' src={liste.roomStateName} alt="maison"style={{height: '200px'}, {width: '100px'}}></img></Link>
                               
                              <label className="type">{liste.roomName}</label> 
                               <li><label>nombres de salon :</label>{liste.livingRoomNumber}</li>
                               <li><label>nombres de chambre :</label>{liste.bedroomNumber}</li>
                               <li><label>nombres de douche :</label>{liste.showerNumber}</li>
                               <li><label>nombres de cuisine :</label>{liste.cookedNumber}</li>
                               <li><label>prix par mois :</label>{liste.rentCost}</li>
                               {(liste.etat==="disponible"&& <button>disponible</button> )|| (liste.etat==="occupe" && <button>occupe</button>)}
                               </ul>
                              
                               <span className="delete-button" onClick={(e) => (this.DeleteItem(liste.id,e))}>
                      <MdDelete></MdDelete>
                  </span>
                  <Link to={"/LogementModifier/"+liste.id}>
                  <span 
                      className="modifier-button" >
                      <MdCreate></MdCreate>
                  </span></Link>
                                    
                               
                           </div>
                       </div>
                   </div>
               

        )
    }
}
export default ListeLogement