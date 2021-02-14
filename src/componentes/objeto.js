import React, {useState,Fragment} from 'react';

const MiFormulario = () => {
  //Declarar el objeto
  const [persona, setPersona]= useState({
      nombre:'',
      apellido:''
  })
  
    //Funcion evento cambio 
 const funcionCambio = (event)=>{
 setPersona(
     {
         ...persona,[event.target.name]: event.target.value 
     }
 ) }
 const [dato, setDato]= useState (" ")
 //funcion con envio 
 const envioBoton = (event)=>{
event.preventDefault();
setDato(persona.nombre  +'  '+   persona.apellido)
}

    return (  
        <Fragment>
            <div className="container"></div>
            <h1>Soy un Formulario y manejo un Objeto</h1>
            <form className="row" onSubmit={envioBoton}>
                <div className="col-md-3">
                <input placeholder="Ingrese Nombre"
                       className= "form-control"
                       type="text"
                       name="nombre"
                       onChange={funcionCambio}>
                </input>
                </div> 
                <div className="col-md-3">
                <input placeholder="Ingrese Apellido"
                       className= "form-control"
                       type="text"
                       name="apellido"
                       onChange={funcionCambio}>
                </input>
                </div> 
                <div className="col-md-3">
                   <button className= "btn btn-danger" type="submit"> Enviar </button>
                </div> 
                </form>
                <h4>{persona.nombre} {persona.apellido}</h4>
                <h5>{dato}</h5>
        </Fragment>
    );
}
 
export default MiFormulario;