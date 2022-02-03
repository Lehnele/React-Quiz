import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';


const Quiz = () => {
    const [state, setState] = useState({
        results: {}, //{ [id]: 'success' or 'error' }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' or 'error' }
        quiz: [],
        loading: true
    });



    const onAnswerClickHandler = answerId => {
        // debug double click
        if(state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if(state.answerState[key] === 'success') {
                return
            }
        }

        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            setState(state => ({
                ...state,
                answerState: {[answerId]: 'success'},
                results
            }))
            const timeout = window.setTimeout(() => {
                if(isQuizFinished()) {
                    setState(state => ({
                        ...state,
                        isFinished: true
                    }))
                } else {
                    setState(state => ({
                        ...state,
                        activeQuestion: state.activeQuestion + 1,
                        answerState: null
                    }))
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            setState(state => ({
                ...state,
                answerState: {[answerId]: 'error'},
                // activeQuestion: this.state.activeQuestion + 1,
                results
            }))
        }
    }

    function isQuizFinished() {
        return state.activeQuestion + 1 === state.quiz.length
    }

    const retryHandler = () => {
        setState(state => ({
                ...state,
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}
        }))
    }


    const {id} = useParams();
    console.log(id)

    useEffect((id) => {

        async function axiosData(id) {
            try {
                const response = await axios.get(`/quizzes/${id}.json`)

                const quiz = response.data

                setState(state => ({
                    ...state,
                    quiz,
                    loading: false
                }))
            } catch (e) {
                console.log(e)
            }
        }
        axiosData(id)
    }, [])

    return (
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>
                <h1>Ответьте на все вопросы:</h1>

                {
                    state.loading
                        ? <Loader/>
                        : state.isFinished
                            ? <FinishedQuiz
                                result={state.results}
                                quiz={state.quiz}
                                onRetry={retryHandler}
                            />
                            : <ActiveQuiz
                                answers={state.quiz[state.activeQuestion].answers}
                                question={state.quiz[state.activeQuestion].question}
                                onAnswerClick={onAnswerClickHandler}
                                quizLength={state.quiz.length}
                                answerNumber={state.activeQuestion + 1}
                                state={state.answerState}
                            />
                }
            </div>
        </div>
    );
};

export default Quiz;
