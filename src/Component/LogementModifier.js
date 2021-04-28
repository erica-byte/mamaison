
import axios from 'axios';
import React from 'react';
//import Logement from '../Logement';
import './AddLogement.css';



class LogementModifier extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      logM:
      {

      },
      file: [],
    //pictures: [],
     cloudimage:[],

      //l'etat de mon tableau d'ajout est celle ci au debut  
    }
   
  }
   componentDidMount() {
    const { match:{params} }=this.props;
    let id=params.id;
   axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/`+id)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        //in traite la reponde obtenue
        this.setState({ logM:persons });
      }).catch(erreur =>{
          //on traite ici les erreurs eventuelles du serveur
         alert("Serveur indisponible")
          console.log(erreur);
      });}
  handleChange = e => {
    
    if ((e.target.name === "image") && (this.state.file.length < 4) && (e.target.files.length>0)) {// condition de ne pas exceder 4 images
      
      let imgtmp = this.state.file;
    

      imgtmp.push(e.target.files[0]) 
      console.log(imgtmp)

      //il recupere les name dans les input et les associe au valeur entre dans celle ci

      this.setState({
        file: imgtmp,

      });
      e.preventDefault();
    } else {
      console.log(this.state.logM)
      let logtmp = this.state.logM
      logtmp[e.target.name] = e.target.value

      this.setState({
        logM: logtmp,
         
      });
    }
  };
  remove = index => {
    let imgdel = this.state.file
    imgdel.splice(index, 1)
    this.setState({ file: imgdel });
  }



  handleSubmit = e => {

    console.log(this.state.file); 
   

const formData=new FormData();
formData.append('file',this.state.file[0]);
formData.append('upload_preset','ml_default')

const option={
  method:'POST',
  body:formData,

};

axios.post(`https://api.cloudinary.com/v1_1/erica/image/upload`, formData)
         .then(res => {
            console.log(res.data);
      let persons=res.data.url;
      //console.log(persons)
      let tmploge=this.state.logM;
      tmploge["roomStateName"]=persons;
      console.log(tmploge)
      this.setState({
        logM: tmploge,})
        this.addRoom(this.state.logM.id)
      
          }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);
        });
        e.preventDefault() 
  }

    addRoom(id){
      console.log(id)

    axios.put(`https://mamaison.arenaplaza.site/api/Room/UpdatedRoomModel/`, {id})
      .then(res => {
        console.log(res)
        console.log(res.data);
        //On traite la reponse obtenue
        
      }).catch(erreur => {
        //On traite ici les erreurs éventuellement survenues

        console.log(erreur);
      })
      
  
}

  render() {

    return (
      <div className="container">
        <div className="imagefont"> <span> </span></div>
        <form >
          <legend>ajouter votre logement</legend>
          <div >
            <div>
              <label>Type : </label>
              <input type="text"  value={this.state.logM["roomName"]} name="roomName"
                  onChange={this.handleChange}
               />
            </div>

            <div>
              <label>Nombre de salon :
                <input type="number" max="5" value={this.state.logM["livingRoomNumber"]} name="livingRoomNumber"
                  onChange={this.handleChange} />
              </label>

            </div>

            <div>
              <label>Nombre de chambre :
                <input type="number" max="5" value={this.state.logM["bedroomNumber"]} name="bedroomNumber"
                  onChange={this.handleChange} />
              </label>

            </div>

            <div>
              <label>Nombre de douche :</label>
                <input type="number" max={5} name="showerNumber"
                  onChange={this.handleChange} />
              
            </div>

            <div>
            <label>nombre de cuisine
  <select
    value={this.state.logM["cookedNumber"]} name="cookedNumber"
    onChange={this.handleChange}
  >
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select></label>
            </div>
            <div>
              <label>Prix du loyer :
                    <input type="text" value={this.state.logM["rentCost"]} name="rentCost"
                  onChange={this.handleChange}
                />
              </label>
            </div>
           
            <div>
              
            <label>
            Choisissez une image
    <input type="file" className="img-vis" name="image" onChange={this.handleChange} />
          </label>
 
{ 
this.state.file.map((urlimg, index) => {
  return <div key={index}>
    <button type="button" onClick={this.remove} >del</button>
    <img src={URL.createObjectURL(urlimg)} alt="" width='100' height='100' />
  </div>
})}
            </div>
            <input className="envoi" type="submit" value="Envoyer"  onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default LogementModifier;