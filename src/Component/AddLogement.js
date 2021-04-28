
import axios from 'axios';
import React from 'react';
//import Logement from '../Logement';
import './AddLogement.css';
//import ImageUploader from 'react-images-upload';

//import ReactDOM from 'react-dom';


class AddLogement extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      logApp:
      {

        roomName:"Studio",
        livingRoomNumber:0,
        bedroomNumber:0,
        showerNumber:0,
        cookedNumber:0,
        rentCost:0,
        roomStateName:"",
        roomCategory:{

        },
        roomDaCreated: "2021-04-15T09:42:31.173Z",
        // file: null
      },
      file: [],
    //pictures: [],
     cloudimage:[],

      //l'etat de mon tableau d'ajout est celle ci au debut  
    }
   //  this.onDrop = this.onDrop.bind(this);
  }
  //modifie ce qui est dans le state lorsque l utilisateur ecrit
  // OnChange s appelle quand quelque chose change dans votre champs de saisie
  /* onDrop(pictureFiles, pictureDataURLs) {
    if(pictureFiles.length<4 ){
    console.log(pictureFiles);
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }else{
    alert("erreur pas plus de 4");
    
    console.log(pictureFiles); 
    
  }
}*/
  
  handleChange = e => {
    //ici je cree un tableau temporaire qui dans lequel je recupere tout les element entree par l user 
    //mais avant ce tableau prend l etat de mon tableau d'origine 
   // console.log(e.target.files)
    if ((e.target.name === "image") && (this.state.file.length < 4) && (e.target.files.length>0)) {// condition de ne pas exceder 4 images
      
      let imgtmp = this.state.file;
     //let cloudimagetmp=this.state.cloudimage

      imgtmp.push(e.target.files[0]) //ajouter les url de chaque images dans le tableau temporaire
     //cloudimagetmp.push(e.target.files[0])
      console.log(imgtmp)

      //il recupere les name dans les input et les associe au valeur entre dans celle ci

      this.setState({
        file: imgtmp,

        // on met l'etat (les valeurs du tableau temporaire) dans le tableau d'origine
        //file: URL.createObjectURL(e.target.files[0]) 
      });
      e.preventDefault();
    } else {
      console.log(this.state.logApp)
      let logtmp = this.state.logApp
      logtmp[e.target.name] = e.target.value

      this.setState({
        logApp: logtmp,
        // on met l'etat (les valeurs du tableau temporaire) dans le tableau d'origine
        //file: URL.createObjectURL(e.target.files[0]) 
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
    // au clic du submit il affiche les elements entre dns le tableau  dans la console

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
      let tmploge=this.state.logApp;
      tmploge["roomStateName"]=persons;
      console.log(tmploge)
      this.setState({
        logApp: tmploge,})
        this.addRoom(this.state.logApp)
      
          }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);
        });
        e.preventDefault() 
  }

    addRoom(room){
      console.log(room)

    axios.post(`https://mamaison.arenaplaza.site/api/Room/CreatedRoom`, {room})
      .then(res => {
        console.log(res)
        console.log(res.data);
        //On traite la reponse obtenue
        
      }).catch(erreur => {
        //On traite ici les erreurs éventuellement survenues

        console.log(erreur);
      })
      
  
}
    
  
  
 
  // componentDidMount() 
  /*  axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        //in traite la reponde obtenue
        //this.setState({ persons });
      }).catch(erreur =>{
          //on traite ici les erreurs eventuelles du serveur
         // alert("Serveur indisponible")
          console.log(erreur);
      });*/


  render() {

    return (
      <div className="container">
        <div className="imagefont"> <span> </span></div>
        <form >
          <legend>ajouter votre logement</legend>
          <div >
            <div>
              <label>Type :
           <select value={this.state.logApp["roomName"]} name="roomName"
                  onChange={this.handleChange}
                >
                  <option className="Type1" >Appartement</option>
                  <option className="Type2" >Chambre</option>
                  <option className="Type3">Studio</option>
                </select>

              </label>
            </div>

            <div>
              <label>Nombre de salon :
                <input type="number" max="5" value={this.state.logApp["livingRoomNumber"]} name="livingRoomNumber"
                  onChange={this.handleChange} />
              </label>

            </div>

            <div>
              <label>Nombre de chambre :
                <input type="number" max="5" value={this.state.logApp["bedroomNumber"]} name="bedroomNumber"
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
    value={this.state.logApp["cookedNumber"]} name="cookedNumber"
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
                    <input type="text" value={this.state.logApp["rentCost"]} name="rentCost"
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

export default AddLogement;