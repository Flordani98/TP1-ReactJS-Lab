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
    <div className='app-container'>
        <header>
            <button id='restart-button' className='button'>Reiniciar</button>
            <h1>¡Adivinar el Número!</h1>

        </header>


        <section className="bar-show-number-correct">
            
            <p>{ value }</p>

        </section>

        <main>

        <form onSubmit={ handleSubmit }>
            
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                placeholder='Ingresa un número'
            />
            <button className="submit-button" type="submit">Probar</button>

        </form>
        
        <table >
            <tbody className='game-info-table'>
                <tr >
                    <td>{ message }</td>
                </tr>
                <tr className='info-score'>
                    <td> {highscore} </td>
                    <td>{score} </td>
                </tr>
            </tbody>
        </table>
    
        </main>

       
 


    </div>
  )
}


