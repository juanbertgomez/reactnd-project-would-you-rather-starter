import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        }
    }

    componentDidMount(e) {
        return setTimeout(() => this.setState({ navigate: true }), 1500)      

    };

    render() {
        if (this.state.navigate) {
        	this.props.dispatch(setAuthedUser(null))        	
          	return <Redirect to="/" />
        }

        return (
          <div>You successfully logouted</div>
        );
    }
}

export default connect()(Logout);