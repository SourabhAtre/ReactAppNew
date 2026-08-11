import {useState} from 'react';

function Guessnumber(){
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [message, setMessage] = useState("");
    const [won, setWon] = useState(false);
    const [attempts, setAttempts] = useState(0);

    function checkGuess(){
        if(won) return;

        const UserNumber = parseInt(guess);
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setGuesses([...guesses, UserNumber]);
        setGuess("");

        if(UserNumber < 1 || UserNumber > 100){
            setMessage("Please enter a number between 1 and 100.");
            setGuess("");
        } else if(UserNumber < number){
            setMessage("Too low! Try again.");
            setGuess("");
        } else if(UserNumber > number){
            setMessage("Too high! Try again.");
            setGuess("");
        } else {
            setWon(true);
            // setNumber(number);
            setMessage(`Congratulations! You guessed the number ${number}!`);
        }
    }

    function resetGame(){
        window.location.reload();
    }

    return (
        <>
            <h1>Guess the Number</h1>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={won}
            />
            <p>Your Attempts</p>
            <span>{attempts}: {guess}</span> <br/>
            <div>
                {guesses.map((g, index) => (
                <span key={index}>{g} </span>
                ))}
            </div>

            <p>{message}</p>
            <button onClick={checkGuess} disabled={won}>
                Submit Guess
            </button>
            <button onClick={resetGame}>
                Reset Game
            </button>
        </>
    )
}
export default Guessnumber