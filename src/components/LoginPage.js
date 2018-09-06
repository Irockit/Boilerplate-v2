import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Base app</p>
            <button className="button" onClick={props.startLogin}>Login with google</button>
        </div>
       
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);