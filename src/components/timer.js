import { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import '../Puchu.css';

const Timer = ({ updateBirthday }) => {
    const [days, setDays] = useState('00');
    const [hours, sethours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    let interval = useRef()

    const setTimer = () => {

        const countDownDate = new Date("June 19, 2022 08:49:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            console.log(distance)
            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(day, hour, minute, second)

            if (distance < 0) {
                clearInterval(interval.current);
                updateBirthday(true)
            }
            else {
                setDays(day);
                sethours(hour);
                setMinutes(minute);
                setSeconds(second);
            }

        }, 1000);
    }

    useEffect(() => {
        setTimer();
        return (() => {
            clearInterval(interval.current);
        });
    })


    return (
        <div className="molang">
            <Spline class='model' scene="https://draft.spline.design/wTuxCF7JPfknEV0Z/scene.spline" />
            <div className="timer">

                <h3>{days}</h3> :
                <h3>{hours}</h3>:
                <h3>{minutes}</h3>:
                <h3>{seconds}</h3>
            </div>
        </div>
    )
}

export default Timer;