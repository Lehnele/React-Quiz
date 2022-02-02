import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const FinishedQuiz = props => {
    const successCount = Object.keys(props.result).reduce((total, key) => {
        if(props.result[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            {/*font awesome*/}
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.result[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.result[quizItem.id]]
                    ]

                    //debugger

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )

                }) }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>Повторим?</Button>
                <Link to='/'>
                    <Button type='success'>Перейти в список тестов?</Button>
                </Link>
            </div>
        </div>
    );
}

export default FinishedQuiz;