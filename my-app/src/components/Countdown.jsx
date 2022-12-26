import React, { useState, useEffect } from "react";

export default function Countdown() {

    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');
    const [min, setMin] = useState('00');
    const [sec, setSec] = useState('00');


    const nextYear = new Date().getFullYear() + 1;
    const currentYear = new Date(`January 01 ${nextYear} 00:00:00`);



    useEffect(() => {
        const updateCount = () => {
            const currentTime = new Date();
            const subtract = (currentYear - currentTime) / 1000;
            setDay(Math.floor(subtract/ 3600 / 24));
            setHour(Math.floor(subtract / 3600) % 24);
            setMin(Math.floor(subtract / 60) % 60);
            setSec(Math.floor(subtract) % 60);

        }

        setInterval(updateCount, 1000);
    }, [])

    return (
        <section className="countdown">
            <div className="day">
                <h2>{day}</h2>
                <p>dias</p>
            </div>
            <div className="hour">
                <h2>{hour}</h2>
                <p>horas</p>
            </div>
            <div className="min">
                <h2>{min}</h2>
                <p>minutos</p>
            </div>
            <div className="sec">
                <h2>{sec}</h2>
                <p>segundos</p>
            </div>
        </section>
        
    )


}