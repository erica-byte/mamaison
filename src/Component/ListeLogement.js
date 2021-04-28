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
    
    
             
 //   <h1 onClick={()=>this.props.deleteitem(5)}>jjkjjjj</h1>
    render(){
        const iconSize = 30;
        const{ liste }=this.state
        console.log(liste)
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
                              
                               <span className="delete-button" onClick={() => (this.props.deleteitem(liste.id))}>
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