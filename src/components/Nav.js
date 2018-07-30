import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component  {
    render() {
        const { name, avatar } = this.props
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaders' exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>                        
                        Hello {name} 
                        <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                        />
                    </li>
                    <li>
                        <NavLink to='/signin' exact activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
            )
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]
    return {
        name: user ? user.name :  null,
        avatar: user ? user.avatarURL : null

    }
}

export default connect(mapStateToProps)(Nav)