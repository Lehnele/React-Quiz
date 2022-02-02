import React from 'react';
import classes from './Backdrop.module.css';


const Backdrop = props => {

        const cls = [classes.Backdrop]
        if(props.isOpen) {
                cls.push(classes.close)
        }

        return (
            <div
                className={cls.join(' ')}
                onClick={props.onClick}
            />
        )
}



export default Backdrop;