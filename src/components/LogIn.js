import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helper'
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap'

class Dashboard extends Component {
    state = {
        answered: true
    }
    render() {
        const { name } = this.props

        
        console.log(this.props)
        return (
            <div>
                <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                    </Col>
                    <Col xs={6} md={4}>
                    <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
                </Row>
                    <ButtonToolbar>
                    {/* Standard button */}
                    <Button>Default</Button>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <Button bsStyle="primary" bsSize="large">Primary</Button>

                    {/* Indicates a successful or positive action */}
                    <Button bsStyle="success">Success</Button>

                    </ButtonToolbar>
            </Grid>
        </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]
    return {
        name: user ?
        formatUser(user).name
        : null

    }
}

export default connect(mapStateToProps)(Dashboard)