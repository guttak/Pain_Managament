import { ReactMediaRecorder } from "react-media-recorder";
//import classes from './RecordSection.module.css';
import { Fragment } from "react";
import Speechonown from './Speechonown.jsx'



const RecordSection = () => (
    <Fragment>

        <ReactMediaRecorder
            audio
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div>

                    {status === 'idle' ? <button style={{ color: 'green',marginBottom:"50px",padding:"20px" }}
                     onClick={startRecording}>Start Recording</button> : null}
                    {status === 'recording' ? <button style={{ color: 'red',marginBottom:"50px",padding:"20px" }} onClick={stopRecording}>Stop Recording</button> : null}
                    {status === 'stopped' ? <audio src={mediaBlobUrl} controls autoplay /> : null}
                </div>
            )}
        />
    </Fragment>
);

export default RecordSection;
