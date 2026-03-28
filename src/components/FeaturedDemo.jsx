import { useEffect, useRef, useState } from "react";
import "./FeaturedDemo.css";

/** Renders an interactive, simulated Nurun routing log with staged system steps. */
function FeaturedDemo() {
  const [message, setMessage] = useState("");
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const routeResult =
      Math.random() < 0.5
        ? { text: "Gemini available ✓", tone: "success" }
        : { text: "Gemini rate limited — routing to DeepSeek ✓", tone: "amber" };

    clearTimers();
    setIsRunning(true);
    setLogs([{ text: "Identifying user...", tone: "amber" }]);

    timersRef.current.push(
      window.setTimeout(() => {
        setLogs((prevLogs) => [
          ...prevLogs,
          { text: "Loading conversation history from PostgreSQL...", tone: "teal" },
        ]);
      }, 600)
    );

    timersRef.current.push(
      window.setTimeout(() => {
        setLogs((prevLogs) => [...prevLogs, { text: "Routing to Gemini...", tone: "amber" }]);
      }, 1200)
    );

    timersRef.current.push(
      window.setTimeout(() => {
        setLogs((prevLogs) => [...prevLogs, routeResult]);
      }, 1800)
    );

    timersRef.current.push(
      window.setTimeout(() => {
        setLogs((prevLogs) => [
          ...prevLogs,
          { text: "Got it. I remember our last 12 messages.", tone: "muted" },
        ]);
        setIsRunning(false);
      }, 2400)
    );
  };

  const handleReset = () => {
    clearTimers();
    setLogs([]);
    setMessage("");
    setIsRunning(false);
  };

  return (
    <div className="featured-demo">
      <p className="featured-demo__label">How it works — live</p>

      <form className="featured-demo__form" onSubmit={handleSubmit}>
        <label className="featured-demo__input-label" htmlFor="featured-demo-input">
          Send a message to Nurun
        </label>
        <div className="featured-demo__input-row">
          <input
            id="featured-demo-input"
            className="featured-demo__input"
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ask something..."
          />
          <button className="featured-demo__send" type="submit" disabled={isRunning}>
            Send
          </button>
        </div>
      </form>

      <div className="featured-demo__terminal" role="status" aria-live="polite">
        {logs.map((entry, index) => (
          <p
            className={`featured-demo__log featured-demo__log--${entry.tone}`}
            key={`${entry.text}-${index}`}
          >
            {entry.text}
          </p>
        ))}
      </div>

      <button className="featured-demo__reset" type="button" onClick={handleReset}>
        Try again
      </button>
    </div>
  );
}

export default FeaturedDemo;
