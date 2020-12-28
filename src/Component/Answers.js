import React, { useState } from "react"


const Response = ({question, options, score}) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="answer">
            <div className="res">{question}</div>
            {answer.map((text, index) => (
                <button key={index} className="answerBtn"
                onClick={() => {
                    setAnswer([text]);
                    score(text)
                }}
                >
                    {text}
                </button>
            )
            )}
        </div>
    )
}


export default Response;