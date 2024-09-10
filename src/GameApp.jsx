import React, { useState } from 'react'


const score = 20;
const highscore = 20;

const message = "mensaje de tabla";

export const GameApp = () => {

    const [value, setValue] = useState(["?"])

    const handleInputChange = ({target}) =>{
        setValue(target.value)
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault
        // setValue('')
    }

  return (
    <>
        <button>Reiniciar</button>
        <h1>¡Adivinar el Número!</h1>
        <p>{ value }</p>
        
        <form onSubmit={ handleSubmit }>
        
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                placeholder='Ingresa un número'
            />
            <button type="submit">Probar</button>

        </form>
        
        <table className='game-info-table'>
            <tbody>
                <tr>
                    <td>{ message }</td>
                    <td> {highscore} </td>
                    <td>{score} </td>

                </tr>
            </tbody>
        </table>
    


    </>
  )
}


