import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Bg() {
  const vantaRef = useRef(null);
  const [vanta, setVanta] = useState(null);

  useEffect(() => {
    if (!vanta && window.innerWidth > 768) {
      setVanta(
        NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        points: 10.0,  
        maxDistance: 17.0,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fd1ff,
        backgroundColor: 0x5000f
        })
      );
    }

    return () => {
        if (vanta) vanta.destroy();
    };
    }, [vanta]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
    />
  );
}
