import{connect} from 'react-redux';
import React from "react"
//import { Link} from 'react-router-dom';


class Favoris extends React.Component {
    constructor(props){
    
        super(props)
        this.state= {
        Favoris:[],
      
        
      };
      }

    render()
    {
   //console.log(this.props,"message");

    return (
      <div className="Favors">
        <div>
         
         <p>vos favoris</p>
        </div>
        
      </div>
    );
    }

  }
  const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
  export default connect(mapStateToProps)(Favoris);