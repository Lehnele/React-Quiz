import React from 'react';
import classes from './Drawer.module.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    {to: '/',label: 'Список'},
    {to: '/auth',label: 'Авторизация'},
    {to: '/quiz-creator',label: 'Создать тест'}
]

const Drawer = (props) => {
    function renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        // className={classes.active}
                        onClick={props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    const cls = [classes.Drawer]

    if(!props.isOpen) {
        cls.push(classes.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    { renderLinks() }
                </ul>
            </nav>
            {/*{ this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }*/}
            <Backdrop onClick={props.onClose} isOpen={props.isOpen}/>
        </>
    )
};

export default Drawer;