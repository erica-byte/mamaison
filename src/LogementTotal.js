import React from "react";
import axios from 'axios';
import { Pagination} from "antd";
import{connect} from 'react-redux';
//import Logement from './Logement'
import ListeLogement from './Component/ListeLogement'
import { Link} from 'react-router-dom';


 
class LogementTotal extends React.Component {
    constructor(props){
      super(props)
      this.state= {
   
     elem :[],
     currentPage: 1,
     logPerPage: 2,
    }
    }
    componentDidMount() {
        axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
           .then(res => {
               const total=res.data.length;
             const persons = res.data.slice(total-20,total);
             console.log(persons)

             //in traite la reponde obtenue
             this.setState({ elem:persons });
           })
         }

 handleChange = value => {
            this.setState({
              currentPage: value,
            });
            };
            
handleSelectChange = e => {
            this.setState({
              logPerPage: e.target.value,
              currentPage: 1
            });
            };         

    render (){
        const {
            currentPage,
            logPerPage,
            elem
            }=this.state;
      
            const indexLastLog = currentPage * logPerPage; // pour avoir le dernier logement a affiche
            const indexFirstLog = indexLastLog - logPerPage;
      //on extrait certaine valeurs du tableau elem
       const log= elem.slice(indexFirstLog,indexLastLog);
       console.log(this.props)
        return(
            <div>
                <h1>welcome et bonjour a tous </h1><h3>trouvez vous un logement a toux prix </h3>
             <div className="Logement-sell">
                 <div className="col-2">
                   <div className="col-10 profile-row"></div>
            <div className="element">
                
                 {elem.map((data) => {
   //             return (<Logement  elem = {data} isFavoriteLog={this.props.favoritesLog.findIndex(item=>item.id===data.id)!==-1} />
return(<ListeLogement elem={data}/>
                )
            } )} 
             </div>  
            <Pagination
            defaultCurrent={this.state.currentPage}
            defaultPageSize={this.state.logPerPage} //default size of page
            pageSize={this.state.logPerPage}
            onChange={this.handleChange}
            total={/*loadingOk && */elem.length > 0 && elem.length} //total number of card data available
            />
            
            <div className="pagination_div">

              
            <label >page</label>
            <select 
            value={this.state.logPerPage}
            onChange={this.handleSelectChange} 
            >
              <option  className="pageCurrent1" >2</option>
              <option className="page2" >3</option>
              <option className="page3">4</option>
            </select>
            </div>

            </div>
        </div>
        </div>
         ) }
}
export default LogementTotal;
/* const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
  export default connect(mapStateToProps)(LogementTotal); */