import React, { useState } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import is from 'is_js'

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

const Auth = () => {
    const [state, setState] = useState({
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    password: true,
                    minLength: 6
                }}
        }
    })

    const loginHandler = () => {

    }

    const registerHandler = () => {

    }

    const submitHandler = event => {
        event.preventDefault()
    }

    function validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    const onChangeHandler = (event, controlName) => {
        const formControls = { ...state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setState(state => ({
            ...state,
            isFormValid,
            formControls
        }))
    }

    function renderInputs() {
        return Object.keys(state.formControls).map((controlName,index) => {
            const control = state.formControls[controlName]

            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => onChangeHandler(event, controlName)}
                />
            )
        })
    }

    return (
        <div className={classes.Auth}>
            <div>
                <h1>Авторизация</h1>

                <form onSubmit={submitHandler} className={classes.AuthForm}>

                    { renderInputs() }

                    <Button
                        type='success'
                        onClick={loginHandler}
                        disabled={!state.isFormValid}
                    >
                        Войти
                    </Button>
                    <Button
                        type='primary'
                        onClick={registerHandler}
                        disabled={!state.isFormValid}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
