import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
    
  }, []);
  useEffect(()=>{
    document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorRef.current.style.transform =
      "translate(-50%, -50%) scale(1.8)";
  });

  el.addEventListener("mouseleave", () => {
    cursorRef.current.style.transform =
      "translate(-50%, -50%) scale(1)";
  });
});

  })
  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100"
    ></div>
  );
}

export default CustomCursor;
