import { useState, useEffect } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);          // milliseconds elapsed
    const [running, setRunning] = useState(false); // is it running?
    const [laps, setLaps] = useState([]);          // list of laps

    // ── useEffect — runs every time "running" changes ──
    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                setTime(t => t + 10);                    // increase by 10ms
            }, 10);
            return () => clearInterval(interval);      // cleanup when stopped
        }
    }, [running]);

    function reset() {
        setRunning(false);
        setTime(0);
        setLaps([]);
    }

    function lap() {
        if (running) {
            setLaps([{ id: Date.now(), time: format(time) }, ...laps]);
        }
    }

    // format milliseconds → 00:00:00
    function format(ms) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        const h = Math.floor(m / 60);
        const centiseconds = Math.floor((ms % 1000) / 10); // ← new

        return [h, m % 60, s % 60]
            .map(n => String(n).padStart(2, "0"))
            .join(":") + "." + String(centiseconds).padStart(2, "0"); // ← new
    }

    return (
        <div>
            <h1>Stopwatch</h1>

            {/* Time display */}
            <h2>{format(time)}</h2>

            {/* Buttons */}
            <button onClick={() => setRunning(!running)}>
                {running ? "Stop" : "Start"}
            </button>
            <button onClick={lap}>Lap</button>
            <button onClick={reset}>Reset</button>

            {/* Laps */}
            {laps.map((lap, index) => (
                <p key={lap.id}>Lap {laps.length - index} — {lap.time}</p>
            ))}
        </div>
    );
}

export default StopWatch;