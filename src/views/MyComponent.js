import React, { Fragment, useState } from 'react'


const MyComponent = () => {
    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [patente, setPatente] = useState("")
    const [automoviles, setAutomoviles] = useState([])

    const handleInputChangeModelo = (event) => {
        setModelo(event.target.value)
    }

    const handleInputChangeMarca = (event) => {
        setMarca(event.target.value)
    }
    const handleInputChangePatente = (event) => {
        setPatente(event.target.value)
    }

    const enviarDatos = () => {
        console.log("")
        
        if (!modelo){
            alert("No ha ingresado ningun modelo")
        }
        else if (!marca){
            alert("No ha ingresado ninguna marca")
        }
        else if (!patente){
            alert("No ha ingresado ningun patente")
        }
        else if (patente.length != 6) {
            alert("La patente no es valida")
        }
        else {
            let nuevo = {
                modelo: modelo,
                marca: marca,
                patente: patente
            }
            
    
            setAutomoviles(automoviles => [...automoviles, nuevo])
            setModelo("")
            setMarca("")
            setPatente("")
        }
        
    }
    return (
        <Fragment>
            <h1>Automoviles</h1>
            <div align="center">
                <div >
                    <input type="text" placeholder="Modelo" name="modelo" onChange={handleInputChangeModelo} value={modelo}></input>
                </div>

                <div>
                    <input type="text" placeholder="Marca" name="marca" onChange={handleInputChangeMarca} value={marca}></input>
                </div>

                <div>
                    <input type="text" placeholder="Patente" name="patente" onChange={handleInputChangePatente} value={patente}></input>
                </div>
                <button onClick={enviarDatos}>Enviar</button><br />
                | Marca | Modelo | Patente
                <div className="autos">
                    { automoviles.map((automovil) => (
                        
                        
                        <li>| {automovil.marca}
                        | {automovil.modelo}
                        | {automovil.patente} |
                        </li>
                        
                        
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
export default MyComponent