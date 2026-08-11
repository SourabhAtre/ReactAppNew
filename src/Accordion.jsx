import { useState } from "react";

const faqs = [
    {
        id: 1, question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces using reusable components."
    },
    {
        id: 2, question: "What is useState?",
        answer: "useState is a hook that lets you store and update data inside a component."
    },
    {
        id: 3, question: "What is useEffect?",
        answer: "useEffect runs code when something changes — like starting a timer when a button is clicked."
    },
    {
        id: 4, question: "What is JSX?",
        answer: "JSX lets you write HTML-like code inside JavaScript to describe your UI."
    },
    {
        id: 5, question: "What is the spread operator?",
        answer: "The spread operator (...) copies all items from an array or object without changing the original."
    },
];

function Accordion() {
    const [openId, setOpenId] = useState(null);

    function toggle(id) {
        setOpenId(openId === id ? null : id);
    }
    return (
        <div>
            <h1>FAQs</h1>
            {faqs.map(faq => (
                <div key={faq.id} className="faq">
                    <h3 data-id={faq.id} onClick={() => toggle(faq.id)}>{faq.question}</h3>
                    {openId === faq.id && <p>{faq.answer}</p>}
                </div>
            ))}
        </div>
    )
}
export default Accordion;