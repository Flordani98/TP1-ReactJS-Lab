import React, { useState, useEffect } from 'react';

const MAX_SCORE = 20;
const MIN_SCORE = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

const message = "mensaje de tabla";

export const GameApp = () => {

    const [value, setValue] = useState()
    
    const [winningNumber, setWinningNumber] = useState(generateRandomNumber());
    
    const [score, setScore] = useState(MAX_SCORE);
    
    const [highscore, setHighscore] = useState(0);

    const [message, setMessage] = useState('');

    const [showNumber, setShowNumber] = useState(false);

    const handleInputChange = ({target}) =>{
        setValue(target.value)
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        console.log(winningNumber)
        // setValue('')
        if (value === winningNumber) {
            setMessage('¡Número correcto!');
            setShowNumber(true);
            setScore((prevScore) => Math.min(prevScore + 10, MAX_SCORE)); 
            setWinningNumber(generateRandomNumber()); 
        } else if(value > winningNumber){
            setMessage('Muy alto!');
            setScore((prevScore) => prevScore - 1); 
        }
        else{
            setMessage('Muy bajo!');
            setScore((prevScore) => prevScore - 1); 
        }
        
        
    
    }

    const handleRestart= () => {
        setScore(MAX_SCORE);
        setWinningNumber(generateRandomNumber());
        setMessage('');
        setValue('');

    }

       
    useEffect(() => {
        if (score <= MIN_SCORE) {
            setMessage('¡Game Over!');
            if (score > highscore) {
                setHighscore(score);
            }
            setScore(MAX_SCORE); 
            setWinningNumber(generateRandomNumber()); 
        }
    }, [score, highscore]);
    


  return (
    <div className='app-container'>
        <header>
            <button id='restart-button' className='button' onClick={handleRestart}>Reiniciar</button>
            <h1>¡Adivinar el Número!</h1>

        </header>


        <section className="bar-show-number-correct">
            
            <p>{ showNumber ? winningNumber : '?' }</p>

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
                    <td> Score: {highscore} </td>
                    <td> Highscore: {score} </td>
                </tr>
            </tbody>
        </table>
    
        </main>

       
 


    </div>
  )
}


