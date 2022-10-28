import React, { useEffect, useState } from "react";

import { ReactComponent as Rock } from "./images/icon-rock.svg";
import { ReactComponent as Paper } from "./images/icon-paper.svg";
import { ReactComponent as Scissors } from "./images/icon-scissors.svg";
import { ReactComponent as Lizard } from "./images/icon-lizard.svg";
import { ReactComponent as Spock } from "./images/icon-spock.svg";
import { ReactComponent as Rules } from "./images/image-rules-bonus.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Logo } from "./images/logo-bonus.svg";


const App = () => {
    const [rule, setRule] = useState(false);
    const [played, setPlayed] = useState(0);
    const [bank, setBank] = useState(0);
    const [timed, setTimed] = useState(false);
    const [score, setScore] = useState(0);
    const [win, setWin] = useState(false);

    useEffect(() => {
        let n = calculateWinner();
        if(n === "YOU WIN"){
            setTimeout(()=>{
                setScore(s => s + 1)
            }, 1000)
        }else if(n=== "YOU LOSE"){
            setTimeout(()=>{
                setScore(s => s - 1)
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bank])

    let showRules = () => {
        if(rule === true){
            return;
        }else{
            setRule(true);
        }
    }

    let littleTiming = () => {
        setTimeout(() => {
            setTimed(true)}
            , 1000);
    }

    let chooseBank = () => {
        setBank(Math.floor(Math.random() * (6 - 1) + 1));
    }

    let setChoice = () => {
        let text = '';
        if(bank === 1){
            text = 'scissor'
        }else if(bank === 2){
            text = 'paper'
        }else if(bank === 3){
            text = 'rock'
        }else if(bank === 4){
            text = 'lizard'
        }else if(bank === 5){
            text = 'spock'
        }
        return text;
    }

    let calculateWinner = () => {
        let winner = '';
        let p = played;
        let b = bank;
        if(p === 1){
            if(b === 2 || b === 4){
                winner = 'YOU WIN'
            }else if(b === 5 || b === 3){
                winner = 'YOU LOSE'
            }else{
                winner = 'EQUALITY'
            }
        }else if(p === 2){
            if(b === 3 || b === 5){
                winner = 'YOU WIN'
            }else if(b === 4 || b === 1){
                winner = 'YOU LOSE'
            }else{
                winner = 'EQUALITY'
            }
        }else if(p === 3){
            if(b === 4 || b === 1){
                winner = 'YOU WIN'
            }else if(b === 5 || b === 2){
                winner = 'YOU LOSE'
            }else{
                winner = 'EQUALITY'
            }
        }else if(p === 4){
            if(b === 2 || b === 5){
                winner = 'YOU WIN'
            }else if(b === 3 || b === 1){
                winner = 'YOU LOSE'
            }else{
                winner = 'EQUALITY'
            }
        }else{
            if(b === 1 || b === 3){
                winner = 'YOU WIN'
            }else if(b === 2 || b === 4){
                winner = 'YOU LOSE'
            }else{
                winner = 'EQUALITY'
            }
        }
        return winner;
    }

    return(
        <>
            <div className="container">
                <div className="head">
                    <Logo className="logo"/>
                    <div className="score">
                        <p>SCORE</p>
                        <span>{score}</span>
                    </div>
                </div>
                <div className={played === 0 ? "home" : "home ongame"}>
                    <div 
                        className={played === 0 ? "color scissor" : played === 1 ? calculateWinner() === "YOU WIN" ? "color scissor played left winner" : "color scissor played left" : "none"}
                        onClick={() => {setPlayed(1);
                            chooseBank();
                            littleTiming();
                            }}
                    >
                        <div className="white">
                            <Scissors/>
                        </div>
                    </div>
                    <div 
                        className={played === 0 ? "color paper" :played === 2 ? calculateWinner() === "YOU WIN" ? "color paper played left winner" : "color paper played left" : "none"}
                        onClick={() => {
                            setPlayed(2);
                            chooseBank();
                            littleTiming();
                            }}
                    >
                        <div className="white">
                            <Paper/>
                        </div>
                    </div>
                    <div 
                        className={played === 0 ? "color rock" :played === 3 ? calculateWinner() === "YOU WIN" ? "color rock played left winner" : "color rock played left" : "none"}
                        onClick={() => {setPlayed(3);
                            chooseBank();
                            littleTiming();
                            }}
                    >
                        <div className="white">
                            <Rock/>
                        </div>
                    </div>
                    <div 
                        className={played === 0 ? "color lizard" :played === 4 ? calculateWinner() === "YOU WIN" ? "color lizard played left winner" : "color lizard played left" : "none"}
                        onClick={() => {setPlayed(4);
                            chooseBank();
                            littleTiming();
                            }}
                    >
                        <div className="white">
                            <Lizard/>
                        </div>
                    </div>
                    <div 
                        className={played === 0 ? "color spock" :played === 5 ? calculateWinner() === "YOU WIN" ? "color spock played left winner" : "color spock played left" : "none"}
                        onClick={() => {setPlayed(5);
                            chooseBank();
                            littleTiming();
                            }}
                    >
                        <div className="white">
                            <Spock/>
                        </div>
                    </div>
                    {
                        played === 0 ?
                        ''
                        : 
                        
                        <div className={timed ? calculateWinner() === "YOU LOSE" ? "bank color right winner " + setChoice() : "bank color right " + setChoice() : "bank color bot"}>
                            <div className={timed ? "white" : "white unset"}>
                                {
                                    bank === 1 ?
                                    <Scissors/>
                                    :
                                    bank===2?
                                    <Paper/>
                                    :
                                    bank===3?
                                    <Rock/>
                                    :
                                    bank===4?
                                    <Lizard/>
                                    :
                                    
                                    <Spock/>
                                    
                                }
                            </div>
                        </div>
                    }
                    {
                    played === 0 ?
                    ''
                    :
                    
                    <div className="result">
                        <span>{calculateWinner()}</span>
                        <div className="play" 
                        onClick={() => {setPlayed(0);
                                        setTimed(false)}}>
                            <p>PLAY AGAIN</p>
                        </div>
                    </div>
                }   
                </div>
                
                <div className={rule ? "active rules-container" : "rules-container"} onClick={() => showRules()}>
                    <p>RULES</p>
                    {
                        rule ?
                        <>
                            <Rules className="rules"/>
                            <Close 
                                className="close"
                                onClick={() => setRule(false)}
                            />
                        </>
                        :
                        ''
                    }
                </div>
                {
                    rule ?
                    <div className="cache"
                        onClick={() => setRule(false)}    
                    ></div>
                    : 
                    ''
                }
            </div>
        </>
    )
}

export default App;