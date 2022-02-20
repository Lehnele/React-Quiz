import React from 'react';
import classes from './input.module.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    // if(isInvalid(props)) {
    //     cls.push(classes.invalid)
    // }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>
                {props.label}
            </label>


            {/*<i className="fal fa-lock"></i>*/}



            <div>
                <i className={props.icon}></i>
                <input
                    type={inputType}
                    id={htmlFor}
                    // key={props.key}
                    value={props.value}
                    onChange={props.onChange}
                />
                {
                    isInvalid(props)
                        ? <div className={classes.alert_warning}>
                            <span>
                                {props.errorMessage || 'Неверные значения'}
                            </span>
                            &nbsp;
                            <i className="fas fa-exclamation-circle"/>
                        </div>
                        : null
                }
            </div>

        </div>
    );
};

export default Input;