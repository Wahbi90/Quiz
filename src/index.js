import React, { Component } from "react";
import ReactDOM from "react-dom";
// import $ from "jquery"
import axios from 'axios';
import Response from './Component/Answers.js'
import FinalScore from './Component/new.js'
import  "./index.css";
import logo from './titelim.png';

class Math extends Component{
    constructor(props) {
        super(props);
        this.state  = {
            questionList:[],
            score:0,
            responses:0
    };
    }

    getQuestions = () => {
            axios.get(`http://localhost:5000/all`)
              .then(res => {
                  console.log(res)
                const questionList = res.data
                this.setState({ questionList });
              });
        

    }

    computeAnswer = (answer, correct) => {
        if(answer === correct) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 7 ? this.state.responses + 1 : 7
        })

        }
    
        playAgain = () => {
            this.setState({
            score : 0,
            responses: 0
        })
        }

        componentDidMount(){
            this.getQuestions()
        }

    render () {
        return (
            <div className="container">
                <div className="title"></div>
                <img className="logo" src={logo} alt="Logo" />
                <div className="quest">
                { this.state.responses < 7 &&
                this.state.questionList.map(
                    ({question, answers, correct}) => (
                        <Response question={question} options={answers}
                        score={answer => this.computeAnswer(answer,correct)}/>
                    )
                )}
                </div>
                {this.state.responses === 7 ? (
                <FinalScore score= {this.state.score} playAgain={this.playAgain}/>
                ) : null}

            </div>
        );
    }
}


ReactDOM.render (<Math />, document.getElementById("app"));