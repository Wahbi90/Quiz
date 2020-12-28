import React from 'react'

const FinalScore = ({score, playAgain}) => (
    <div className="totalScore">
        <div className="score">You got {score} / 7 correct answers</div>
        <button className="playBtn" onClick={playAgain}>Play again</button>
    </div>
)


export default FinalScore