import {use, useState} from 'react';

const tip_percent = [5, 10, 15, 20, 25, 30] 

function TipCalculator(){
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(5);
    const [people, setPeople] = useState(1);
    const tipAmount = (bill*tip)/100;
    const total = bill + tipAmount;
    const perPerson = total/people;

    return (
        <>
        <div className="tip_calculator_container">
            <h1>Tip Calculator</h1>
            <div>
                <input
                    type="number"
                    placeholder="Bill Amount"
                    value={bill}
                    onChange={(e) => setBill(parseFloat(e.target.value))}
                />
            </div>

            <h3>Tip Percentage</h3>
            <div>
                {tip_percent.map((percent) => (
                    <button
                        key={percent}
                        onClick={() => setTip(percent)}
                        className={tip === percent ? 'selected' : ''}
                    >
                        {percent}%
                    </button>
                ))}
            </div>

            <h3>Number of People</h3>
            <div>
                <input
                    type="number"
                    placeholder="Number of People"
                    value={people}
                    onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
                />
            </div>

            <div className="final_bar">
                <span>
                    <h6>Tip Amount</h6>
                    <p>${tipAmount.toFixed(2)}</p>
                </span>
                <span>
                    <h6>Per Person</h6>
                    <p>${perPerson.toFixed(2)}</p>
                </span>
                <span>
                    <h6>Total Amount</h6>
                    <p>${total.toFixed(2)}</p>
                </span>
            </div>
        </div>
        </>
    )
} 

export default TipCalculator;