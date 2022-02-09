import React from 'react';
import classes from './Drawer.module.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Drawer = (props) => {
    function renderLinks(links) {
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

    const links = [
        {to: '/',label: 'Список'},
    ]

    if(props.isAuthenticated) {
        links.push({to: '/quiz-creator',label: 'Создать тест'})
        links.push({to: '/logout',label: 'Выйти'})
    } else {
        links.push({to: '/auth',label: 'Авторизация'})
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    { renderLinks(links) }
                </ul>
            </nav>
            {/*{ this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }*/}
            <Backdrop onClick={props.onClose} isOpen={props.isOpen}/>
        </>
    )
};

export default Drawer;