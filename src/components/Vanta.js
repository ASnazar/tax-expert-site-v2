import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from "three"
const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(

                NET({
                    el: myRef.current,
                     THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 0,
                    minWidth: 0,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x25ff,
                    backgroundColor: 0x0,
                    points: 20.00,
                    maxDistance: 0.10,
                    spacing: 18.00
                }))

        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef} className="vanta">
    </div>
};

export default Vanta;