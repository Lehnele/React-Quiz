import React, {Component} from 'react';
import classes from './Drawer.module.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    {to: '/',label: 'Список'},
    {to: '/auth',label: 'Авторизация'},
    {to: '/quiz-creator',label: 'Создать тест'}
]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        // className={classes.active}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
                {/*{ this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }*/}
                <Backdrop onClick={this.props.onClose} isOpen={this.props.isOpen}/>
            </>
        )
    }
}

export default Drawer;