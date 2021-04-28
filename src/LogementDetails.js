//import { Link} from 'react-router-dom';
//import Logement from './Logement';
import React from "react"
//import App from '../App'
import axios from 'axios';
import './LogementDetails.css';
import{connect} from 'react-redux';


class LogementDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            logdet:{
               
            },
            isFavoriteLog:false,
        };
 }
    componentDidMount(){

            const { match:{params} }=this.props;
            let id=params.id;
            axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id).then(res => {
      
     this.setState({ logdet:res.data });
    
     const favoriteLogIndex= this.props.favoritesLog.findIndex(item =>{
        
        return   item.id=== this.state.logdet.id })
      if(favoriteLogIndex !==-1)
      {
          
          this.setState({isFavoriteLog:true });
      }else{
          this.setState({isFavoriteLog:false });
      }
    
    
   
})
 }
  handleFavoritelog=(Log)=>{
    this.setState({
        isFavoriteLog: !this.state.isFavoriteLog
        });
     const action = { type: "TOGGLE_FAVORITE", value: Log };
      this.props.dispatch(action); 
 }


    render(){
        const {
            logdet
            }=this.state;
        
           
            
    return(
        <div className="details">
                <div>
        
                            <img src={this.state.logdet.roomStateName} alt="maison"></img>
                 </div> 
                 <div>           
                            <ul className="post-time">
                             {console.log()};
                           <li> <label className="type">type: </label>{this.state.logdet.roomName}</li> 
                             <li><label>nombres de salon :</label>{this.state.logdet.livingRoomNumber}</li>
                             <li><label>nombres de chambre :</label>{this.state.logdet.bedroomNumber}</li>
                             <li><label>nombres de douche :</label>{this.state.logdet.showerNumber}</li>
                             <li><label>nombres de cuisine :</label>{this.state.logdet.cookedNumber}</li>
                             <li><label>prix par mois: </label>{this.state.logdet.rentCost}</li>
                             <button><label>etat : </label>{}</button>
                             </ul>
                </div>       <div className="ico" onClick={()=>(this.handleFavoritelog(logdet))}> <img src={this.state.isFavoriteLog ? "/images/ic_favorite.png":"/images/ic_favorite_border.png" } alt="" style={{height:'30px'} }></img> </div>   
      </div>
    );

    
    }   
    
}
const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
  export default connect(mapStateToProps)(LogementDetails);