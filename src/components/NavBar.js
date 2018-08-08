import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { handleUnAutheUser } from '../actions/authedUser';


class NavBar extends Component  {

    state = {
        activeKey: 1
    }
    // TODO: handel active tab acording to route? 
    // TODO: display ot not if authed user exists
    handleSelect = (e) => {
        const {dispatch, user } = this.props

        const activeKey = e
        
        console.log(activeKey)

        activeKey === 4 && dispatch(handleUnAutheUser(user))


        this.setState(() =>({
            activeKey
        })) 
    }

    render() {
        const { name, avatar } = this.props
        const { activeKey } = this.state
        return (
            <div>
                <Nav bsStyle="tabs" activeKey={activeKey} onSelect={this.handleSelect}>
                    <LinkContainer to="/">
                        <NavItem eventKey={1}>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <NavItem eventKey={2}>New Question</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/leaders">
                        <NavItem eventKey={3}>Leader Board</NavItem>
                    </LinkContainer>
                    <NavItem disabled>Hello {name}
                        <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className='nav-avatar'
                        />
                    </NavItem>
                    <NavItem eventKey={4} href="/signin">LogOut</NavItem>
                </Nav>
            </div>
            )
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]
    return {
        name: user ? user.name :  null,
        avatar: user ? user.avatarURL : null,
        user

    }
}

export default connect(mapStateToProps)(NavBar)