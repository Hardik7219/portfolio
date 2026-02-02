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
          touchControls: true,
          gyroControls: false,
          color: 0x005eff,
          backgroundColor: 0x030b22,
          maxDistance: 19,
          spacing: 12,
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
