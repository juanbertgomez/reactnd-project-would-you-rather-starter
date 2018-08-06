import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap'


class NavBar extends Component  {

    state = {
        activeKey: "1"
    }
    // TODO: handel active tab acording to route? 
    // TODO: display ot not if authed user exists
    handleSelect = (e) => {
        const activeKey = e
        console.log(activeKey)

        this.setState(() =>({
            activeKey
        })) 
    }

    render() {
        const { name, avatar } = this.props
        const { activeKey } = this.state
        return (
            <div>
                <Nav bsStyle="tabs"  activeKey={activeKey} onSelect={this.handleSelect}>
                    <NavItem eventKey="1" href="/">
                        Home
                    </NavItem>
                    <NavItem eventKey="2" href="/new">
                        New Question
                    </NavItem>
                    <NavItem eventKey="3" href="/leaders">
                        Leader Board
                    </NavItem>
                    <NavItem disabled>
                        Hello {name}
                        <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className='nav-avatar'
                        />
                    </NavItem>
                    <NavItem eventKey="4" href="/signin">
                        LogOut
                    </NavItem>
                </Nav>
            </div>
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

export default connect(mapStateToProps)(NavBar)