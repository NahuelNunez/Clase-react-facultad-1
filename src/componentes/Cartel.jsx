import './Cartel.css'
const surname = true;
 function Cartel (){
    return (
        <div className="cartel">
        <h1 className="name">Nahuel <span className="surname" style={surname ? {color:'aqua'} : {color:'green'}}>{surname ? 'Nuñez' : ': dont have surname' }</span></h1>
        </div>
    )
}
export default Cartel;