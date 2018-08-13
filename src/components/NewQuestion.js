import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { FormGroup, ControlLabel, FormControl,  Button } from 'react-bootstrap'
import {
    Redirect
  } from 'react-router-dom'

class NewQuestion extends Component {
    state={
        optionOne: '',
        optionTwo: '',
        redirectToReferrer: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        const { optionOne, optionTwo } =this.state

        //todo: Add Question to Store
        dispatch(handleSaveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }))

        console.group('New options:')
            console.log('One: ', optionOne)
            console.log('Two: ', optionTwo)
        console.groupEnd()
        this.setState(()=>({
            optionOneText: '',
            optionTwoText: '',
            redirectToReferrer: true
        }))
    }


      
        handleChange = (e) => {
            const value = e.target.value
            const name = e.target.name
            this.setState({
                [name]: value
              }) 
        }

    render () {
        const { optionOne, optionTwo,redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/'}}
        
        if (redirectToReferrer === true ) {
            return <Redirect to={from}/>
        }

        return(
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel className='center'>
                        <h3 > Would you rather</h3>
                    </ControlLabel>
                        <FormControl
                            name="optionOne"
                            placeholder="First option"
                            value = { optionOne }
                            onChange ={this.handleChange}
                            className='textarea'
                        />
                        <h4 className='center'>Or</h4>
                        <FormControl
                            name="optionTwo"
                            placeholder="Second option"
                            value = { optionTwo }
                            onChange ={this.handleChange}
                            className='textarea'
                        />
                    
                    </FormGroup>
                    <Button
                        className='btn'
                        type='submit'
                        disabled={(optionOne === '' || optionTwo === '')}
                    >
                        Submit
                    </Button>
                </form> 
        )
    }
}

function mapStateToProp ({authedUser}) {
    return {
        authedUser
    }
}
export default connect(mapStateToProp)(NewQuestion)