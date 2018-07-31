import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Collapse, Nav, NavItem, MenuItem } from 'react-bootstrap'


class NavBar extends Component  {

    state = {
        activeKey: "1"
    }
    // TODO: handel active tab
    handleSelect = (e) => {
        const activeKey = e.eventKey
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