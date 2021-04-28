import { Link} from 'react-router-dom';
import './Acceuil.css';

function Acceuil () {
    return(
        <div id="vue" style={{background: ' linear-gradient(to left, transparent, rgb(248, 237, 236)),url("https://res.cloudinary.com/erica/image/fetch/h_700/https://res.cloudinary.com/erica/image/upload/v1618574308/maison7_f9r9dz.jpg")',width:'1000px',height:'400px'}}>
       <span><h1>Trouver votre logement de reves</h1></span>
         
       <button style={{margin:'150px'}}> 
        <Link to="/App">Voir le catalogue</Link>
        </button>
        <button>    
            <Link to="/AddLogement">Ajouter un logement</Link>
            </button>  
            <button style={{margin:'10px'}}> 
        <Link to="/Admin">Mes mise a jour des logements</Link>
        </button> 
   
   </div>  
    );
}
export default Acceuil;