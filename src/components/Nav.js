import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component  {
    render() {
        const { userName, avatar} = this.props
        return (
            <nav className='nav'>
                <ul align="left">
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
                        <NavLink to='/signin' exact activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
            )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
            //userName: users[authedUser].name,
            //avatar: users[authedUser].avatarURL
    }
}

export default connect(mapStateToProps)(Nav)