import React, { useState } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import {createControl, validate, validateForm} from '../../form/formFramework';
import axios from '../../axios/axios-quiz';

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

const QuizCreator = () => {
    const [state, setState] = useState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    })

    const submitHandler = event => {
        event.preventDefault()
    }

    const addQuestionHandler = event => {
        event.preventDefault()

        const quiz = state.quiz.concat()
        const index = quiz.length + 1
        console.log(quiz)

        const {question, option1, option2, option3, option4} = state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: state.rightAnswerId,
            answers: [
                {text: option1, id: option1.id},
                {text: option2, id: option2.id},
                {text: option3, id: option3.id},
                {text: option4, id: option4.id}
            ]
        }

        quiz.push(questionItem)

        setState(state => ({
            ...state,
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()

        }))
    }

    const createQuizHandler = async event => {
        event.preventDefault()

        try {
            await axios.post('/quizzes.json', state.quiz)

            setState(state => ({
                ...state,
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            }))
        } catch (e) {
            console.log(e)
        }
        //     await axios.post('https://react-quiz-40305-default-rtdb.europe-west1.firebasedatabase.app/quizzes.json', this.state.quiz)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })


    }
    const changeHandler = (value, controlName) => {
        const formControls = { ...state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        setState(state => ({
            ...state,
            formControls,
            isFormValid: validateForm(formControls)
        }))
    }

    function renderControls() {
        return Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName]

            return (
                <>
                    <Input
                        index={controlName + index}

                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => changeHandler(event.target.value, controlName)}
                    />
                    { index === 0 ? <hr/> : null }
                </>
            )
        })
    }

    const selectChangeHandler = event => {
        setState(state => ({
            ...state,
            rightAnswerId: +event.target.value
        }))
    }

    const select = <Select
        label='Выберите правильный ответ'
        value={state.rightAnswerId}
        onChange={selectChangeHandler}
        options={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4}
        ]}
    />

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>Создание теста</h1>

                <form onSubmit={submitHandler}>

                    { renderControls() }

                    { select }

                    <Button
                        type='primary'
                        onClick={addQuestionHandler}
                        disabled={!state.isFormValid}
                    >
                        Добавить вопрос
                    </Button>
                    <Button
                        type='success'
                        onClick={createQuizHandler}
                        disabled={state.quiz.length === 0}
                    >
                        Создать тест
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default QuizCreator;
