import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
const Header = props => {
    return (
        <header className="header">
            {/* NavLink es para crear una clase active cuando esta en la ruta */}
            <NavLink to="/" exact>Home</NavLink>
            {props.user ?
                <div className="userZone">
                    <a>{props.user.email}</a>
                    <a>Logout</a>
                </div>
                :
                <div className="guestZone">
                    <NavLink to="/login" exact>Login</NavLink>
                    <NavLink to="/register" exact>Registro</NavLink>
                </div>
            }

        </header>
    )
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);