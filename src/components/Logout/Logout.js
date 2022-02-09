import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Routes, Route, Navigate } from 'react-router-dom';
import { logout } from '../../store/actions/auth';

function Logout(props) {
    useEffect(() => {
        props.logout()
    })

    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/auth" />} />
        </Routes>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);