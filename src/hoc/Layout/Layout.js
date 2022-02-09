import React, { useState } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import { connect } from 'react-redux';

const Layout = (props) => {
    const [state, setState] = useState({menu: false})

    const toggleMenuHandler = () => {
        setState(state => ({
            ...state,
            menu: !state.menu
        }))
    }

    const menuCloseHandler= () => {
        setState(state => ({
            ...state,
            menu: false
        }))
    }

    return (
        <div className={classes.Layout}>

            <Drawer
                isOpen={state.menu}
                onClose={menuCloseHandler}
                isAuthenticated={props.isAuthenticated}
            />

            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={state.menu}
            />

            <main>
                { props.children }
            </main>
        </div>
    );
};

function mapStateToProps (state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);