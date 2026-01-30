import React, { useEffect, useState, useRef } from "react";
import "/src/App.css"; 

function Typing({
  msg,
  style1,
  speed = 100,
  pauseTime = 1000,
  eraseSpeed = 50,
  cursor = true,
  cursorBlinkSpeed = 500,
  style2,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const timeouts = useRef([]);
  const typingForward = useRef(true); 

  useEffect(() => {
    const animate = () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];

      let index = typingForward.current ? 0 : msg.length;

      const step = () => {
        if (typingForward.current) {
          if (index <= msg.length) {
            setDisplayedText(msg.slice(0, index));
            index++;
            timeouts.current.push(setTimeout(step, speed));
          } else {
            typingForward.current = false;
            timeouts.current.push(setTimeout(step, pauseTime)); // pause before deleting
          }
        } else {
          if (index >= 0) {
            setDisplayedText(msg.slice(0, index));
            index--;
            timeouts.current.push(setTimeout(step, eraseSpeed));
          } else {
            typingForward.current = true;
            timeouts.current.push(setTimeout(step, pauseTime)); // pause before retyping
          }
        }
      };

      step();
    };

    animate();

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, [msg, speed, pauseTime, eraseSpeed]);

  // Cursor blinking
  useEffect(() => {
    if (!cursor) return;
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(blink);
  }, [cursor, cursorBlinkSpeed]);

  return (
    <h1 className={style2} style={{ ...style1, display: "inline-block", whiteSpace: "pre" }}>
      {displayedText}
      {cursor && showCursor && <span>|</span>}
    </h1>
  );
}

export default Typing;
