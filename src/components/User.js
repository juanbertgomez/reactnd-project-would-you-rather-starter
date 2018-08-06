import React, { Component } from 'react'
import { formatUser } from '../utils/helper'
import { connect } from 'react-redux'
import {Panel, Col, Row} from 'react-bootstrap'


class User extends Component {
    render () {
        //console.log(this.props)
        const { user } = this.props
        if (user == null ){
            return <p> This user doesn't exist </p>
        }

        const {name, avatar, answeredQuestions, userQuestions, totalPoints} = user

        return (
            <Panel className='user'>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{name}</Panel.Title>
            </Panel.Heading>
                <Panel.Body>
                    <Row>
                        <Col xs={2} >
                            <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className='avatar'
                            />
                        </Col>
                        <Col xs={10} className='quetion-info'>
                            <Row>
                                <h3 >Points: { totalPoints }</h3> 
                                <Col>Questions Answered: { answeredQuestions }</Col>
                                <Col>Created Questions: { userQuestions }</Col>
                            </Row>
                        </Col>
                    </Row>
                </Panel.Body>
            </Panel>
        )
    }
}

function mapSateteToProps({users}, {id}) {
    const user = users[id]

    return {
        user: user ?
        formatUser(user)
        : null
    }
}
export default connect(mapSateteToProps)(User)