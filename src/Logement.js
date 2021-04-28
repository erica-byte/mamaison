import './Logement.css';
import React from "react"
import { Link} from 'react-router-dom';
//import React, { Component } from "react"
import "antd/dist/antd.css"
import { Pagination} from "antd";
import { MdThumbUp } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdCreate } from 'react-icons/md';
import{connect} from 'react-redux';

class Logement extends React.Component {
  constructor(props){
    
    super(props)
    this.state= {
 elements:this.props.elem,
  
    isFavoriteLog:this.props.isFavoriteLog,
    
  };
  }
  //envoie dans le state tout les modification de la page courante .
//  componentDidMount(){
//   const favoriteLogIndex= this.props.favoritesLog.findIndex(item =>{
        
//     return   item.id=== this.state.elements.id })
//   if(favoriteLogIndex !==-1)
//   {
      
//       this.setState({isFavoriteLog:true });
//   }else{
//       this.setState({isFavoriteLog:false });
//   }

//  }

  handleFavoritelog=(Log)=>{
    //console.log(Log)
    this.setState({
      isFavoriteLog: !this.state.isFavoriteLog
      });
   const action = { type: "TOGGLE_FAVORITE", value: Log };
    this.props.dispatch(action);
  }
  
     
   render () {
 //   console.log(this.props.favoritesLog)

const{ elements }=this.state
 //const userToken=localStorage.getItem('token')
 //console.log(userToken)
// on ecrit les fonctions evenementielles du select
      //tableau du premier element logement
      
      return (
        <div >
          <div>
         
                      <div >    
                            <ul className="post-time">
                            <Link to={"/LogementDetails/"+elements.id}><img src={elements.roomStateName} alt="maison"style={{height: '450px'}, {width: '350px'}}></img></Link>
                             
                            <label className="type">{elements.roomName}</label> 
                             <li><label>nombres de salon :</label>{elements.livingRoomNumber}</li>
                             <li><label>nombres de chambre :</label>{elements.bedroomNumber}</li>
                             <li><label>nombres de douche :</label>{elements.showerNumber}</li>
                             <li><label>nombres de cuisine :</label>{elements.cookedNumber}</li>
                             <li><label>prix par mois :</label>{elements.rentCost}</li>
                             {(elements.etat==="disponible"&& <button>disponible</button> )|| (elements.etat==="occupe" && <button>occupe</button>)}
                             </ul>
                             <div className="icone" onClick={()=>(this.handleFavoritelog(elements))}> <img src={this.state.isFavoriteLog ? "/images/ic_favorite.png":"/images/ic_favorite_border.png" } alt="" style={{height:'30px'}}></img> </div>
                            
                                  
                             
                         </div>
                     </div>
                 </div>
             
             
     
       
      )
   }
  }   
  const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
  export default connect(mapStateToProps)(Logement);
  // export default Logement;

   // via la mthode connect on doit dischpacher l action. on creer un constantce qui parmet d acceder a 
   // au state dans la store
