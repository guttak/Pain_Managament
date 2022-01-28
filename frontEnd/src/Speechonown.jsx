import React, { useEffect } from "react";

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;




export default function Speechonown(props) {
    const synthRef = React.useRef(window.speechSynthesis);
    const speakOut = (value) => {

        const utter = new SpeechSynthesisUtterance(value);
        synthRef.current.speak(utter);
        console.log('inside speak out');



    }

    // const voiceCommands = () => {
    //     const recognition = new SpeechRecognition();
    //     console.log('voice out');
    //     // On start
    //     recognition.onstart = () => {
    //         console.log('Speech own Voice is actived');
    //     }

    //     recognition.onresult = (e) => {
    //         let current = e.resultIndex;
    //         let transcript = e.results[current][0].transcript;
    //         console.log(transcript);
    //     }
    // }
    useEffect(() => {
        console.log('inside useEffect speak')

        // code to run on component mount
    }, []);;



    return (

        <label onClick={() => { speakOut(props.text) }} >{props.text}</label>


    );


}
