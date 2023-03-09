import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/greetings/greetings";

const Greeting = () => {
    const dispatch = useDispatch();
    const greet = useSelector((state) => state.greetings)

    useEffect(() => {
        dispatch(getGreetings());
    }, []);
    console.log(greet)

    return (
        <div >
            <p>{greet.greetings.greeting}</p>
        </div>
    )
}

export default Greeting;