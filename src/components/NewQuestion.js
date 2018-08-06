import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { FormGroup, ControlLabel, FormControl,  Button } from 'react-bootstrap'

class NewQuestion extends Component {
    state={
        optionOne: '',
        optionTwo: ''
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
            optionTwoText: ''
        }))
    }


        constructor(props, context) {
          super(props, context);
      
          this.handleChange = this.handleChange.bind(this);
      
          this.state = {
            value: ''
          };
        }
      
        getValidationState() {
          const length = this.state.value.length;
          if (length > 10) return 'success';
          else if (length > 5) return 'warning';
          else if (length > 0) return 'error';
          return null;
        }
      
        handleChange = (e) => {
            const value = e.target.value
            const name = e.target.name
            this.setState({
                [name]: value
              }) 
        }

    render () {
        const { optionOne, optionTwo } = this.state
        
        return(
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
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