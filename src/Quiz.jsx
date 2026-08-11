import { useState } from "react";

const questions = [
    {
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"],
        answer: "JavaScript XML"
    },
    {
        question: "Which hook stores state in React?",
        options: ["useEffect", "useRef", "useState", "useContext"],
        answer: "useState"
    },
    {
        question: "What does the spread operator do?",
        options: ["Deletes an array", "Copies all items", "Creates a function", "Loops through array"],
        answer: "Copies all items"
    },
    {
        question: "Which method is used to loop through an array and return a new one?",
        options: ["filter()", "forEach()", "find()", "map()"],
        answer: "map()"
    },
    {
        question: "What does useState return?",
        options: ["Just the value", "Just the setter function", "The value and a setter function", "An object with methods"],
        answer: "The value and a setter function"
    },
];

function Quiz() {
    const [current, setCurrent] = useState(0);      // which question we're on
    const [score, setScore] = useState(0);           // how many correct
    const [answered, setAnswered] = useState(false); // has user answered?
    const [selected, setSelected] = useState(null);  // which option user picked
    const [finished, setFinished] = useState(false); // is quiz done?

    function selectAnswer(option) {
        if (answered) return;
        setSelected(option);
        setAnswered(true);
        if (option === questions[current].answer) {
            setScore(score + 1);
        }
    }

    function nextQuestion() {
        if (!answered) return;
        if (current === questions.length - 1) {
            setFinished(true);
        } else {
            setCurrent(current + 1);
            setAnswered(false);
            setSelected(null);
        }
    }

    function resetQuiz() {
        setCurrent(0);
        setScore(0);
        setAnswered(false);
        setSelected(null);
        setFinished(false);
    }

    if (finished) {
        return (
            <div>
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score}/{questions.length}</p>
                <button onClick={resetQuiz}>Restart Quiz</button>
            </div>
        )
    }
    const q = questions[current];
    return (
        <div className="quiz_main_container" >
            <h3>Question No. {current + 1} of {questions.length}</h3>
            <h2>{q.question}</h2>
            {q.options.map((option) => (
                <button
                    className="option-btn"
                    key={option}
                    onClick={() => selectAnswer(option)}
                    disabled={answered}
                >
                    {option}
                </button>
            ))}

            {answered && <button onClick={nextQuestion}>Next →</button>}
        </div>
    )

}

export default Quiz;