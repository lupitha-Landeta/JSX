import React,{useState,Fragment} from 'react';

const MiArreglo = () => {
    //Declaramos el arreglo usando const
    const [miColeccion, setmiColeccion]= useState([1,2,3])
    const[numero, setnumero]= useState(4)
  
    //Funcion
    const agregar = ()=>{
      setnumero(numero + 1)
      setmiColeccion([...miColeccion, numero])
   }
    return ( 
        <Fragment>
            
        <h2>Soy un Componenete con un Arreglo</h2>
        <h3>Contenido del Arreglo</h3>
        <button onClick={agregar}>Agregar numero</button>
        <p>
            {
                miColeccion.map(
                    (item)=> <p>{item}</p>
                )
            }
        </p>
        </Fragment>
    );
}
 
export default MiArreglo;