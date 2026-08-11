import { useState } from "react";

function Todo({ title }) {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);
    const [id, setId] = useState(1);

    function addTask() {
        if (input === "") return;
        setTask([...task, { id: id, text: input, done: false }]);
        setId(id + 1);
        setInput('');
    }
    function deletetask(id) {
        setTask(task.filter((t) => t.id != id))
    }
    function toggleDone(id) {
        setTask(task.map((t) => (
            t.id === id ? { ...t, done: !t.done } : t
        )))
    }

    return (
        <>
            <h1>{title}</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {task.map((t) => (
                    <li key={t.id}>
                        {t.text}
                        <button onClick={() => deletetask(t.id)}>Delete</button>
                        <button onClick={() => toggleDone(t.id)}>
                            {t.done ? "Undo" : "Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Todo;